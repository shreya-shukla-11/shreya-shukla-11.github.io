class Tab8 {
    constructor() {
        this.applyStyles();
        setTimeout(() => this.updateContent(), 100);
    }

    applyStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .tab:nth-child(8) {
                background: linear-gradient(135deg, #D6C6B1 0%, #E8DFD1 30%, #F5E6D3 50%, #E8DFD1 70%, #D6C6B1 100%);
                color: #2F271D;
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
                box-shadow: 0 4px 15px rgba(214, 198, 177, 0.4);
                border: 1px solid rgba(214, 198, 177, 0.7);
                transform-origin: center center;
                will-change: transform;
            }
            .tab:nth-child(8) .tab-content {
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
            .tab:nth-child(8) h2 {
                font-size: 10px;
                font-weight: 800;
                text-align: center;
                margin: 0;
                color: #2F271D;
                text-shadow: 1px 1px 2px rgba(214, 198, 177, 0.5);
                width: 100%;
                padding: 2px;
                font-family: 'Source Code Pro', 'Courier New', monospace;
                text-transform: uppercase;
                margin-top: 8px;
                letter-spacing: 1px;
                position: relative;
                padding-left: 24px;
            }
            .tab:nth-child(8) h2::before {
                content: '$ ';
                color: #8B7355;
                position: absolute;
                left: 10px;
                animation: blink 1s infinite;
            }
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }
            .tab:nth-child(8) .content-text {
                font-size: 8px;
                line-height: 1.4;
                color: #2F271D;
                margin: 0;
                text-align: left;
                padding: 0 12px;
                font-family: 'Courier New', monospace;
                font-weight: 600;
                position: relative;
                background: rgba(214, 198, 177, 0.1);
                border-radius: 4px;
                padding: 8px;
                border-left: 2px solid #8B7355;
            }
            .tab:nth-child(8) .highlight {
                font-weight: 800;
                color: #8B7355;
                position: relative;
                padding: 0 2px;
            }
            .tab:nth-child(8) .highlight::after {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                height: 4px;
                background: linear-gradient(90deg, transparent, rgba(139, 115, 85, 0.2), transparent);
                animation: scanline 2s linear infinite;
            }
            @keyframes scanline {
                0% { transform: translateY(4px); opacity: 0; }
                50% { opacity: 0.5; }
                100% { transform: translateY(-4px); opacity: 0; }
            }
            .tab:nth-child(8) .image-container {
                display: flex;
                flex-direction: column;
                gap: 6px;
                width: 100%;
                padding: 0 8px;
                justify-content: center;
                margin-bottom: 8px;
                position: relative;
            }
            .tab:nth-child(8) .image-container::before {
                content: '[memory.snapshot]';
                position: absolute;
                bottom: -15px;
                right: 12px;
                font-size: 8px;
                color: #8B7355;
                font-family: 'Source Code Pro', 'Courier New', monospace;
                padding: 2px 6px;
                background: rgba(214, 198, 177, 0.2);
                border-radius: 4px;
                z-index: 2;
            }
            .tab:nth-child(8) .image-container img {
                width: 240px;
                height: 140px;
                object-fit: contain;
                border-radius: 6px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                border: 1px solid rgba(139, 115, 85, 0.3);
                margin: 0 auto;
                background: linear-gradient(135deg, #E8DFD1 0%, #F5E6D3 50%, #E8DFD1 100%);
                position: relative;
            }
            .tab:nth-child(8):hover {
                transform: scale(1.02);
            }
            .tab:nth-child(8)::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(45deg, rgba(214, 198, 177, 0.2) 0%, transparent 100%);
                pointer-events: none;
            }
        `;
        document.head.appendChild(style);
    }

    updateContent() {
        const tab = document.querySelector('.tab:nth-child(8)');
        if (tab) {
            let contentDiv = tab.querySelector('.tab-content');
            if (!contentDiv) {
                contentDiv = document.createElement('div');
                contentDiv.className = 'tab-content';
                tab.appendChild(contentDiv);
            }

            contentDiv.innerHTML = `
                <h2>Long Term Memory for AI Agents</h2>
                <div class="image-container">
                    <img src="images/image8.png" alt="AI Memory System">
                </div>
                <div class="content-text">
                    When building <span class="highlight">AI Systems</span> that work at scale, you need some tech tools to support your development. I got an opportunity to build the <span class="highlight">ai-insights-service</span> that acts like an insights hub for all the pre-processing of any kind of data that we did that could be directly used in the app or for <span class="highlight">contextual memory</span> for distinctive AI projects. It had some cool <span class="highlight">access patterns</span> and I learned so much about <span class="highlight">DynamoDB</span> in this project.
                </div>
            `;
        } else {
            console.error('Tab8: Could not find tab element');
        }
    }
}

// Create instance
new Tab8(); 