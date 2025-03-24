class Tab5 {
    constructor() {
        this.applyStyles();
        setTimeout(() => this.updateContent(), 100);
    }

    applyStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .tab:nth-child(5) {
                background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
                color: #ffffff;
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
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                border: 1px solid rgba(255, 255, 255, 0.1);
                transform-origin: center center;
                will-change: transform;
            }
            .tab:nth-child(5) .eternal-logo {
                width: 300px;
                height: 300px;
                opacity: 0.8;
                margin-top: -150px;
                margin-bottom: 2px;
            }
            .tab:nth-child(5) h2 {
                font-size: 13px;
                font-weight: 700;
                text-align: center;
                margin: 0;
                color: #ffffff;
                text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
                width: 100%;
                padding: 2px;
                font-family: 'Courier New', monospace;
                text-transform: uppercase;
                margin-top: 0;
            }
            .tab:nth-child(5) .content-text {
                font-size: 8px;
                line-height: 1.4;
                color: #ffffff;
                margin: 0;
                text-align: left;
                padding: 0 12px;
                font-family: 'Courier New', monospace;
            }
            .tab:nth-child(5) .image-container {
                display: flex;
                flex-direction: column;
                gap: 6px;
                width: 100%;
                padding: 0 12px;
                justify-content: center;
                margin-top: 6px;
                margin-bottom: 8px;
            }
            .tab:nth-child(5) .image-container img {
                width: 210px;
                height: 270px;
                object-fit: contain;
                border-radius: 6px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                border: 1px solid rgba(255, 255, 255, 0.1);
                margin: 0 auto;
            }
            .tab:nth-child(5):hover {
                transform: scale(1.02);
            }
            .tab:nth-child(5)::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(45deg, rgba(255,255,255,0.03) 0%, transparent 100%);
                pointer-events: none;
            }
        `;
        document.head.appendChild(style);
    }

    updateContent() {
        const tab = document.querySelector('.tab:nth-child(5)');
        if (tab) {
            let contentDiv = tab.querySelector('.tab-content');
            if (!contentDiv) {
                contentDiv = document.createElement('div');
                contentDiv.className = 'tab-content';
                tab.appendChild(contentDiv);
            }

            contentDiv.innerHTML = `
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgMjQwIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIwIDI0MEMxODYuMjc0IDI0MCAyNDAgMTg2LjI3NCAyNDAgMTIwQzI0MCA1My43MjYgMTg2LjI3NCAwIDEyMCAwQzUzLjcyNiAwIDAgNTMuNzI2IDAgMTIwQzAgMTg2LjI3NCA1My43MjYgMjQwIDEyMCAyNDBaTTEyMCAxNDBDMTA4Ljk1NCAxNDAgMTAwIDEzMS4wNDYgMTAwIDEyMEMxMDAgMTA4Ljk1NCAxMDguOTU0IDEwMCAxMjAgMTAwQzEzMS4wNDYgMTAwIDE0MCAxMDguOTU0IDE0MCAxMjBDMTQwIDEzMS4wNDYgMTMxLjA0NiAxNDAgMTIwIDE0MFoiLz48L3N2Zz4=" alt="Eternal Logo" class="eternal-logo">
                <h2>Getting into RAG</h2>
                <div class="content-text">
                    Created an internal Slack bot called <span style="font-weight: 700; text-shadow: 0 0 5px rgba(255,255,255,0.5);">Zomato's People Person</span> that integrates with our regularly updated employee policies and documentation. The bot allows employees to ask questions and receive accurate, up-to-date information about company policies directly through Slack.
                </div>
                <div class="image-container">
                    <img src="images/image5.png" alt="RAG Example">
                </div>
            `;
        } else {
            console.error('Tab5: Could not find tab element');
        }
    }
}

// Create instance
new Tab5(); 