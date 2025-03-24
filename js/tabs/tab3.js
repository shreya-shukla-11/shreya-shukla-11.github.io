class Tab3 {
    constructor() {
        this.applyStyles();
        setTimeout(() => this.updateContent(), 100);
    }

    applyStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .tab:nth-child(3) {
                background: linear-gradient(135deg, #15176b 0%, #5b6eae 50%, #7289da 100%);
                color: #ffffff;
                font-family: 'Courier New', monospace;
                padding: 15px;
                transform-style: preserve-3d;
                backface-visibility: hidden;
                overflow: hidden;
                border-radius: 15px;
                width: 280px;
                height: 340px;
                position: absolute;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                pointer-events: auto;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                border: 1px solid rgba(255, 255, 255, 0.2);
                transform-origin: center center;
                will-change: transform;
            }
            .tab:nth-child(3)::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
                pointer-events: none;
            }
            .tab:nth-child(3) .sparkle {
                position: absolute;
                width: 4px;
                height: 4px;
                background: white;
                border-radius: 50%;
                animation: sparkle 2s infinite;
            }
            @keyframes sparkle {
                0% { opacity: 0; transform: scale(0); }
                50% { opacity: 1; transform: scale(1); }
                100% { opacity: 0; transform: scale(0); }
            }
            .tab:nth-child(3) .tab-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
                transform: translateZ(1px);
                width: 100%;
                height: 100%;
                pointer-events: auto;
                overflow: hidden;
            }
            .tab:nth-child(3) h2 {
                font-size: 14px;
                font-weight: 700;
                text-align: center;
                margin: 0;
                color: #ffffff;
                text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
                width: 100%;
                padding: 2px;
                font-family: 'Courier New', monospace;
            }
            .tab:nth-child(3) .content-text {
                font-size: 8.5px;
                line-height: 1.4;
                color: #ffffff;
                margin: 0;
                text-align: left;
                padding: 0 8px;
                font-family: 'Courier New', monospace;
                text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
            }
            .tab:nth-child(3) .content-text strong {
                color: #ffffff;
                font-weight: 700;
            }
            .tab:nth-child(3) .image-container {
                display: flex;
                flex-direction: column;
                gap: 6px;
                width: 100%;
                padding: 0 8px;
                justify-content: center;
                margin-top: auto;
            }
            .tab:nth-child(3) .image-container img {
                width: 100%;
                height: 100px;
                object-fit: cover;
                border-radius: 6px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }
            .tab:nth-child(3):hover {
                transform: scale(1.02);
            }
        `;
        document.head.appendChild(style);
    }

    createSparkles() {
        const tab = document.querySelector('.tab:nth-child(3)');
        for (let i = 0; i < 15; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = `${Math.random() * 100}%`;
            sparkle.style.top = `${Math.random() * 100}%`;
            sparkle.style.animationDelay = `${Math.random() * 2}s`;
            tab.appendChild(sparkle);
        }
    }

    updateContent() {
        const tab = document.querySelector('.tab:nth-child(3)');
        if (tab) {
            let contentDiv = tab.querySelector('.tab-content');
            if (!contentDiv) {
                contentDiv = document.createElement('div');
                contentDiv.className = 'tab-content';
                tab.appendChild(contentDiv);
            }

            contentDiv.innerHTML = `
                <h2>HACKING MIDJOURNEY</h2>
                <div class="content-text">
                    I noticed our content team was spending weeks manually creating images with <strong>Midjourney</strong> - writing prompts, downloading files, renaming them, and saving them. Since Midjourney doesn't offer an <strong>API</strong>, I developed an <strong>automated bot solution</strong> that handles this entire workflow (most used internal tool).
                </div>
                <div class="image-container">
                    <img src="images/image3.jpeg" alt="Midjourney Example 1">
                    <img src="images/image4.jpeg" alt="Midjourney Example 2">
                </div>
            `;
            this.createSparkles();
        } else {
            console.error('Tab3: Could not find tab element');
        }
    }
}

// Create instance
new Tab3(); 