'use client';

import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const container = canvas.parentElement;
        if (!container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let mouse = { x: 0, y: 0 };
        let cursor = { x: 0, y: 0 };
        let particles: Particle[] = [];
        let animationFrameId: number;

        // ==========================================
        // 設定値
        // ==========================================
        const PARTICLE_LINK_DISTANCE = 100; // 密度が高いので少し距離を短く
        const CURSOR_LINK_DISTANCE = 150;
        const PARTICLE_COLOR = 'rgba(87, 199, 212, 0.5)'; // 数が増えるので少し透明度を下げる
        const PARTICLE_LINE_COLOR = '87, 199, 212';
        const CURSOR_LINE_COLOR = '15, 76, 92';

        const getParticleCount = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 480) {
                return 200; // スマホ
            } else if (screenWidth <= 768) {
                return 400; // タブレット
            } else {
                return 800; // PC（高密度）
            }
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2.5 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = PARTICLE_COLOR;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const generateParticles = () => {
            particles = [];
            const count = getParticleCount();
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };

        const resize = () => {
            width = canvas.width = container.offsetWidth;
            height = canvas.height = container.offsetHeight;

            if (cursor.x === 0 && cursor.y === 0) {
                cursor.x = width / 2;
                cursor.y = height / 2;
                mouse.x = width / 2;
                mouse.y = height / 2;
            }

            generateParticles();
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleTouchMove = (e: TouchEvent) => {
            const rect = canvas.getBoundingClientRect();
            const touch = e.touches[0];
            mouse.x = touch.clientX - rect.left;
            mouse.y = touch.clientY - rect.top;
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            cursor.x += (mouse.x - cursor.x) * 0.1;
            cursor.y += (mouse.y - cursor.y) * 0.1;

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < PARTICLE_LINK_DISTANCE) {
                        ctx.beginPath();
                        const opacity = 1 - (distance / PARTICLE_LINK_DISTANCE);
                        ctx.strokeStyle = `rgba(${PARTICLE_LINE_COLOR}, ${opacity * 0.4})`;
                        ctx.lineWidth = 0.8;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            particles.forEach(p => {
                const dx = cursor.x - p.x;
                const dy = cursor.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < CURSOR_LINK_DISTANCE) {
                    ctx.beginPath();
                    const opacity = 1 - (distance / CURSOR_LINK_DISTANCE);
                    ctx.strokeStyle = `rgba(${CURSOR_LINE_COLOR}, ${opacity})`;
                    ctx.lineWidth = 1.2;
                    ctx.moveTo(cursor.x, cursor.y);
                    ctx.lineTo(p.x, p.y);
                    ctx.stroke();
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        container.addEventListener('mousemove', handleMouseMove as any);
        container.addEventListener('touchmove', handleTouchMove as any, { passive: false });

        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            container.removeEventListener('mousemove', handleMouseMove as any);
            container.removeEventListener('touchmove', handleTouchMove as any);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ background: '#0B0E14', zIndex: 0 }}
        />
    );
}
