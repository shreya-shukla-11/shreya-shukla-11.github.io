class Tab1 {
    constructor() {
        this.applyStyles();
        setTimeout(() => {
            this.updateContent();
        }, 100);
    }

    applyStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .tab:nth-child(1) {
                background: linear-gradient(135deg, 
                    #00ff00 0%, 
                    #00cc00 50%,
                    #00ff00 100%);
                color: #000;
                font-family: 'Source Code Pro', 'Courier New', monospace;
                padding: 8px;
                transform-style: preserve-3d;
                backface-visibility: hidden;
                overflow: hidden;
                border-radius: 12px;
                width: 280px;
                height: 340px;
                position: absolute;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                pointer-events: auto;
                box-shadow: 0 0 30px rgba(0, 255, 0, 0.5),
                           inset 0 0 30px rgba(0, 255, 0, 0.3);
                border: 2px solid #fff;
                transform-origin: center center;
                will-change: transform;
            }
            .tab:nth-child(1) .tab-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
                transform: translateZ(1px);
                width: 100%;
                height: 100%;
                pointer-events: auto;
                overflow: hidden;
                position: relative;
                z-index: 1;
                padding: 0 12px;
                box-sizing: border-box;
            }
            .tab:nth-child(1) .content-text {
                font-size: 9px;
                line-height: 1.6;
                color: #000;
                margin: 12px 0;
                text-align: left;
                padding: 16px;
                font-weight: 600;
                position: relative;
                background: rgba(255, 255, 255, 0.9);
                border-radius: 8px;
                border: 1px solid rgba(255, 255, 255, 0.5);
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                width: 100%;
                box-sizing: border-box;
            }
            .tab:nth-child(1) .social-links {
                display: flex;
                gap: 20px;
                margin-top: 12px;
                justify-content: center;
                align-items: center;
            }
            .tab:nth-child(1) .social-link {
                width: 36px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.9);
                border: 2px solid #fff;
                transition: all 0.3s ease;
                cursor: pointer;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            .tab:nth-child(1) .social-link:hover {
                transform: scale(1.1);
                background: #fff;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            }
            .tab:nth-child(1) .social-link img {
                width: 24px;
                height: 24px;
            }
            .tab:nth-child(1) .cursor {
                display: inline-block;
                width: 2px;
                height: 12px;
                background: #00ff00;
                margin-left: 2px;
                animation: blink 1s infinite;
            }
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }
            .tab:nth-child(1):hover {
                transform: scale(1.02);
            }
            .tab:nth-child(1)::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: radial-gradient(circle at 50% 50%,
                    rgba(255, 255, 255, 0.2) 0%,
                    transparent 70%);
                pointer-events: none;
            }
        `;
        document.head.appendChild(style);
    }

    updateContent() {
        const tab = document.querySelector('.tab:nth-child(1)');
        if (tab) {
            let contentDiv = tab.querySelector('.tab-content');
            if (!contentDiv) {
                contentDiv = document.createElement('div');
                contentDiv.className = 'tab-content';
                tab.appendChild(contentDiv);
            }

            contentDiv.innerHTML = `
                <div class="content-text">
                    Hey! I am Shreya, I worked as an AI Engineer for 2 years at Zomato, and I vibe coded this portfolio for you to enjoy my story working in AI at large scale enterprise. You can find my handles below if you want to connect to learn more or have some cool collaboration opportunities.
                </div>
                <div class="social-links">
                    <a href="https://www.linkedin.com/in/shreyashukla1109/" target="_blank" class="social-link">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn">
                    </a>
                    <a href="mailto:shreya.shukla092@gmail.com" class="social-link">
                        <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="Gmail">
                    </a>
                    <a href="https://wa.me/7383859277" target="_blank" class="social-link">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp">
                    </a>
                </div>
            `;
        } else {
            console.error('Tab1: Could not find tab element');
        }
    }
}

// Create instance
new Tab1();