'use client';

import { useEffect, useRef } from 'react';

export default function HeroNode() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let animationFrameId: number;
        let mouse = { x: -1000, y: -1000, active: false }; // Mouse state

        // Configuration
        const BACKGROUND_COLOR = '#0f172a'; // Dark slate/blue

        const PARTICLE_COLOR = 'rgba(100, 200, 255, 0.3)'; // Faint blueish particles
        const CONNECTION_DISTANCE = 100;

        // Atom Configuration
        const NUCLEUS_RADIUS = 12;
        const ELECTRON_ORBIT_RADIUS = 130;
        const ELECTRON_COUNT = 3;
        const ATOM_DUST_COUNT = 100; // Magic dust around the atom

        // Node Sphere Config (This section is now mostly empty as atom config moved)
        // const SPHERE_RADIUS = 180; // Not used in the final version, can be removed or kept.
        // const RINGS_COUNT = 40; // Not used in the final version, can be removed or kept.

        // Particles
        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                const speed = Math.random() * 2.2 + 0.1; // Random speed between 0.1 and 2.3
                this.vx = (Math.random() - 0.5) * speed;
                this.vy = (Math.random() - 0.5) * speed;
                this.size = Math.random() * 1.5 + 0.5;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = PARTICLE_COLOR;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        let particles: Particle[] = [];

        let particleCount = 700; // Default

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                width = canvas.width = parent.offsetWidth;
                height = canvas.height = parent.offsetHeight;

                // Adjust particle count based on width
                // Base: 700 particles for ~1400px width => factor ~0.5
                particleCount = Math.floor(width * 0.5);

                init();
            }
        };

        const animate = () => {
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = BACKGROUND_COLOR;
            ctx.fillRect(0, 0, width, height);

            // Draw Background Particles
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                p1.update();
                p1.draw();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < CONNECTION_DISTANCE) {
                        ctx.beginPath();
                        const opacity = 1 - distance / CONNECTION_DISTANCE;
                        ctx.strokeStyle = `rgba(100, 200, 255, ${opacity * 0.2})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            // Mouse Interaction
            if (mouse.active) {
                const ACTIVE_COLOR = 'rgba(0, 255, 255, 1)';
                const L1_COLOR = 'rgba(0, 255, 255, 0.4)'; // 40%
                const L2_COLOR = 'rgba(0, 255, 255, 0.3)'; // 30%
                const L3_COLOR = 'rgba(0, 255, 255, 0.2)'; // 20%
                const MOUSE_CONNECTION_DISTANCE = CONNECTION_DISTANCE * 1.8;

                ctx.save();
                ctx.globalCompositeOperation = 'lighter';
                ctx.shadowBlur = 20;
                ctx.shadowColor = ACTIVE_COLOR;
                ctx.fillStyle = ACTIVE_COLOR;
                ctx.beginPath();
                ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();

                const level1Particles: Particle[] = [];
                const level2Particles = new Set<Particle>();

                // Level 1
                for (let i = 0; i < particles.length; i++) {
                    const p = particles[i];
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < MOUSE_CONNECTION_DISTANCE) {
                        level1Particles.push(p);
                        ctx.beginPath();
                        ctx.strokeStyle = L1_COLOR;
                        ctx.lineWidth = 2;
                        ctx.moveTo(mouse.x, mouse.y);
                        ctx.lineTo(p.x, p.y);
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.fillStyle = ACTIVE_COLOR;
                        ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }

                // Level 2
                for (const p1 of level1Particles) {
                    for (let i = 0; i < particles.length; i++) {
                        const p2 = particles[i];
                        if (p1 === p2) continue;
                        const dx = p1.x - p2.x;
                        const dy = p1.y - p2.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < CONNECTION_DISTANCE) {
                            if (!level1Particles.includes(p2)) level2Particles.add(p2);
                            ctx.beginPath();
                            ctx.strokeStyle = L2_COLOR;
                            ctx.lineWidth = 1;
                            ctx.moveTo(p1.x, p1.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.stroke();
                        }
                    }
                }

                // Level 3
                for (const p1 of Array.from(level2Particles)) {
                    for (let i = 0; i < particles.length; i++) {
                        const p2 = particles[i];
                        if (p1 === p2) continue;
                        if (level1Particles.includes(p2) || level2Particles.has(p2)) continue;
                        const dx = p1.x - p2.x;
                        const dy = p1.y - p2.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < CONNECTION_DISTANCE) {
                            ctx.beginPath();
                            ctx.strokeStyle = L3_COLOR;
                            ctx.lineWidth = 0.5;
                            ctx.moveTo(p1.x, p1.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.stroke();
                        }
                    }
                }
            }

            ctx.restore();

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            mouse.active = true;
        };

        const handleMouseLeave = () => {
            mouse.active = false;
        };

        window.addEventListener('resize', resize);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        // Initial resize with delay to ensure parent dimensions are ready
        setTimeout(resize, 100);
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full"
            style={{ zIndex: 0 }}
        />
    );
}
