// ========================================
// AI Network Effect - Canvas Animation
// ========================================

const initAINetwork = () => {
    const canvas = document.getElementById('ai-canvas');
    const hero = document.querySelector('.hero');

    if (!canvas || !hero) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let mouse = { x: 0, y: 0 };
    let cursor = { x: 0, y: 0 };
    // let particles = []; // Removed from here

    // 設定値（会社カラーに合わせて調整）
    let PARTICLE_COUNT = 800; // 粒子の数（デフォルト：PC）
    const PARTICLE_LINK_DISTANCE = 120;  // パーティクル同士が繋がる距離（拡大）
    const CURSOR_LINK_DISTANCE = 200;  // カーソルと繋がる距離（拡大）
    const PARTICLE_COLOR = 'rgba(87, 199, 212, 0.6)'; // ターコイズ（少し濃く）
    const PARTICLE_LINE_COLOR = '87, 199, 212'; // ターコイズ RGB（パーティクル間）
    const CURSOR_LINE_COLOR = '15, 76, 92'; // ティール RGB（カーソル接続）
    const CURSOR_COLOR = '#57C7D4'; // ターコイズ

    // 画面サイズに応じてパーティクル数を調整
    const getParticleCount = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 480) {
            return 212; // スマホ: 15%減（250 × 0.85 = 212.5 → 212）
        } else if (screenWidth <= 768) {
            return 500; // タブレット: 密なネットワーク
        } else {
            return 800; // PC: 超密な幾何学模様
        }
    };

    // パーティクルクラス
    class Particle {
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

            // 端で跳ね返る
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw() {
            ctx.fillStyle = PARTICLE_COLOR;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    let particles = [];

    // パーティクルを生成する関数
    const generateParticles = () => {
        particles = [];
        PARTICLE_COUNT = getParticleCount();

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new Particle());
        }

        console.log(`🎨 Generated ${PARTICLE_COUNT} particles for ${width}x${height}`);
    };

    // リサイズハンドラー
    const resize = () => {
        if (hero) {
            width = canvas.width = hero.offsetWidth;
            height = canvas.height = hero.offsetHeight;
        }

        // 初期位置（画面中央）
        if (cursor.x === 0 && cursor.y === 0) {
            cursor.x = width / 2;
            cursor.y = height / 2;
            mouse.x = width / 2;
            mouse.y = height / 2;
        }

        // リサイズ時にパーティクルを再生成
        generateParticles();
    };

    window.addEventListener('resize', resize);
    resize();

    // マウス移動ハンドラー
    const handleMouseMove = (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };

    // タッチ対応
    const handleTouchMove = (e) => {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        mouse.x = touch.clientX - rect.left;
        mouse.y = touch.clientY - rect.top;
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('touchmove', handleTouchMove, { passive: false });

    // アニメーションループ
    let animationFrameId;
    const animate = () => {
        ctx.clearRect(0, 0, width, height);

        // カーソル追従（イージング効果）
        cursor.x += (mouse.x - cursor.x) * 0.1;
        cursor.y += (mouse.y - cursor.y) * 0.1;

        // パーティクルの更新と描画
        particles.forEach(p => {
            p.update();
            p.draw();
        });

        // パーティクル同士の接続（各エリアで自動的に繋がる）
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // 近くのパーティクル同士を繋ぐ
                if (distance < PARTICLE_LINK_DISTANCE) {
                    const opacity = (1 - distance / PARTICLE_LINK_DISTANCE) * 0.4;
                    ctx.strokeStyle = `rgba(${PARTICLE_LINE_COLOR}, ${opacity})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        // カーソルとパーティクルの接続
        particles.forEach(p => {
            const dx = cursor.x - p.x;
            const dy = cursor.y - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // カーソルに近いパーティクルと繋ぐ
            if (distance < CURSOR_LINK_DISTANCE) {
                const opacity = (1 - distance / CURSOR_LINK_DISTANCE) * 0.8;
                ctx.strokeStyle = `rgba(${CURSOR_LINE_COLOR}, ${opacity})`;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(cursor.x, cursor.y);
                ctx.lineTo(p.x, p.y);
                ctx.stroke();
            }
        });

        // メインカーソルの描画（中心の円）
        ctx.strokeStyle = CURSOR_COLOR;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cursor.x, cursor.y, 15, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = CURSOR_COLOR;
        ctx.beginPath();
        ctx.arc(cursor.x, cursor.y, 3, 0, Math.PI * 2);
        ctx.fill();

        // 回転する装飾（アニメーション効果）
        const time = Date.now() * 0.002;
        ctx.strokeStyle = `rgba(${CURSOR_LINE_COLOR}, 0.6)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cursor.x, cursor.y, 20, time, time + Math.PI / 2);
        ctx.stroke();

        animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // クリーンアップ関数を返す
    return () => {
        window.removeEventListener('resize', resize);
        hero.removeEventListener('mousemove', handleMouseMove);
        hero.removeEventListener('touchmove', handleTouchMove);
        cancelAnimationFrame(animationFrameId);
    };
};

// ========================================
// Scroll Reveal Animation with Intersection Observer
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // AI Network Effect の初期化
    initAINetwork();

    // 機能1: スクロール検知（Intersection Observer）
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // 一度表示したら監視を解除（パフォーマンス向上）
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // 要素の10%が見えたらトリガー
        rootMargin: '0px 0px -50px 0px' // 少し早めに発火
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // 機能2: タイピングアニメーション
    const codeElement = document.querySelector('.code-decoration');

    if (codeElement) {
        const originalText = codeElement.textContent;
        codeElement.textContent = ''; // テキストを空にする

        let charIndex = 0;
        const typingSpeed = 80; // ミリ秒（1文字あたりの表示速度）

        // カーソル要素を作成
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        cursor.textContent = '|';

        function typeWriter() {
            if (charIndex < originalText.length) {
                // カーソルを一時的に削除
                if (codeElement.contains(cursor)) {
                    codeElement.removeChild(cursor);
                }

                // 1文字追加
                codeElement.textContent += originalText.charAt(charIndex);
                charIndex++;

                // カーソルを再追加
                codeElement.appendChild(cursor);

                // 次の文字へ
                setTimeout(typeWriter, typingSpeed);
            } else {
                // タイピング完了後、カーソルを点滅させ続ける
                // カーソルはCSSアニメーションで点滅
            }
        }

        // 少し遅延させてからタイピング開始（ヒーローアニメーション後）
        setTimeout(() => {
            codeElement.appendChild(cursor);
            typeWriter();
        }, 1500);
    }

    // ========================================
    // Card Mouse Tracking Effect
    // ========================================
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
    });
});

// ========================================
// Hamburger Menu Toggle
// ========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

console.log('🚀 NexRide - Building the Future...');
