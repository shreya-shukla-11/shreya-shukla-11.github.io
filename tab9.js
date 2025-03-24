class Tab9 {
    constructor() {
        this.applyStyles();
        setTimeout(() => this.updateContent(), 100);
    }

    applyStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .tab:nth-child(9) {
                background: radial-gradient(circle farthest-corner at 10% 20%, #c0b1ea 0%, #fd9bc8 90%);
                color: #8B4513;
                font-family: 'Courier New', monospace;
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
                box-shadow: 0 4px 15px rgba(192, 177, 234, 0.4),
                           inset 0 0 20px rgba(255, 255, 255, 0.3);
                border: 1px solid rgba(255, 255, 255, 0.6);
                transform-origin: center center;
                will-change: transform;
                position: relative;
            }
            .tab:nth-child(9) .tab-content {
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
            }
            .tab:nth-child(9) h2 {
                font-size: 11px;
                font-weight: 800;
                text-align: center;
                margin: 0;
                color: #4A2511;
                text-shadow: 1px 1px 2px rgba(255, 218, 185, 0.5);
                width: 100%;
                padding: 2px;
                font-family: 'Source Code Pro', 'Courier New', monospace;
                text-transform: uppercase;
                margin-top: 8px;
                letter-spacing: 1px;
                position: relative;
                padding-left: 24px;
            }
            .tab:nth-child(9) h2::before {
                content: '🤖';
                position: absolute;
                left: 10px;
                animation: bounce 2s infinite;
            }
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-3px); }
            }
            .tab:nth-child(9) .content-text {
                font-size: 7px;
                line-height: 1.4;
                color: #4A2511;
                margin: 0;
                text-align: left;
                padding: 10px;
                font-family: 'Courier New', monospace;
                font-weight: 600;
                position: relative;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 12px;
                border: 1px solid rgba(74, 37, 17, 0.2);
                backdrop-filter: blur(5px);
            }
            .tab:nth-child(9) .notification {
                position: absolute;
                top: -8px;
                right: -8px;
                background: #FF6B6B;
                color: white;
                font-size: 8px;
                padding: 2px 6px;
                border-radius: 10px;
                font-weight: bold;
                animation: pulse 2s infinite;
            }
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
            .tab:nth-child(9) .highlight {
                font-weight: 800;
                color: #E91E63;
                position: relative;
                padding: 0 2px;
                text-shadow: 0 0 1px rgba(233, 30, 99, 0.3);
            }
            .tab:nth-child(9) .highlight::after {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                height: 2px;
                background: linear-gradient(90deg, transparent, #E91E63, transparent);
                opacity: 0.6;
            }
            .tab:nth-child(9) .image-container {
                display: flex;
                flex-direction: column;
                gap: 6px;
                width: 100%;
                padding: 0 !important; /* Remove horizontal padding */
                margin-top: auto; /* Push container to bottom */
                justify-content: flex-end;
                height: 150px; /* Set fixed height for image area */
            }

            .tab:nth-child(9) .image-container img {
                width: 100%;
                height: 100%;
                object-fit: cover; /* Fill the container */
                margin: 0;
            }
            .tab:nth-child(9):hover {
                transform: scale(1.02);
            }
            .tab:nth-child(9)::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: 
                    linear-gradient(45deg, 
                        rgba(255, 255, 255, 0.4) 0%, 
                        rgba(255, 255, 255, 0.1) 30%,
                        rgba(255, 255, 255, 0.3) 50%,
                        rgba(255, 255, 255, 0.1) 70%,
                        rgba(255, 255, 255, 0.4) 100%);
                pointer-events: none;
                mix-blend-mode: soft-light;
            }
            .tab:nth-child(9)::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: radial-gradient(circle at 50% 50%,
                    rgba(255, 255, 255, 0.3) 0%,
                    rgba(255, 255, 255, 0.1) 30%,
                    transparent 70%);
                pointer-events: none;
                mix-blend-mode: overlay;
            }
        `;
        document.head.appendChild(style);
    }

    updateContent() {
        const tab = document.querySelector('.tab:nth-child(9)');
        if (tab) {
            let contentDiv = tab.querySelector('.tab-content');
            if (!contentDiv) {
                contentDiv = document.createElement('div');
                contentDiv.className = 'tab-content';
                tab.appendChild(contentDiv);
            }

            contentDiv.innerHTML = `
                <h2>AI and me trying to be creative</h2>
                <div class="content-text">
                    <div class="notification">1 new notif</div>
                    It was a simple task, no fancy <span class="highlight">AI agents</span> to generate creatives for Zomato's notifications, but we were not able to get that zing from a lot of models that we tried. The simple task transformed into a <span class="highlight">chaining of AI-agents</span>. We started putting <span class="highlight">meme context</span>, past notifications so that it learns that zing. Finally, we were able to get something out of <span class="highlight">Claude</span> (there is something in this model that makes it more creative than other models). In this process, I really got to learn the <span class="highlight">capabilities of every individual model</span> for niche tasks and when to use what.
                </div>
                <div class="image-container">
                    <img src="images/image9.png" alt="AI Notification System">
                </div>
            `;
        } else {
            console.error('Tab9: Could not find tab element');
        }
    }
}

// Create instance
new Tab9(); 