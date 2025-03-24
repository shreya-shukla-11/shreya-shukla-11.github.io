class Tab6 {
    constructor() {
        this.applyStyles();
        setTimeout(() => this.updateContent(), 100);
    }

    applyStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .tab:nth-child(6) {
                background: linear-gradient(135deg, #87CEEB 0%, #B0E0E6 50%, #87CEEB 100%);
                color: #00008B;
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
                box-shadow: 0 4px 15px rgba(135, 206, 235, 0.4);
                border: 1px solid rgba(255, 255, 255, 0.7);
                transform-origin: center center;
                will-change: transform;
            }
            .tab:nth-child(6) .tab-content {
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
            .tab:nth-child(6) h2 {
                font-size: 13px;
                font-weight: 800;
                text-align: center;
                margin: 0;
                color: #00008B;
                text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
                width: 100%;
                padding: 2px;
                font-family: 'Courier New', monospace;
                text-transform: uppercase;
                margin-top: 8px;
            }
            .tab:nth-child(6) .content-text {
                font-size: 8px;
                line-height: 1.4;
                color: #00008B;
                margin: 0;
                text-align: left;
                padding: 0 12px;
                font-family: 'Courier New', monospace;
                font-weight: 700;
            }
            .tab:nth-child(6) .highlight {
                font-weight: 800;
                background: linear-gradient(120deg, #000080 0%, #0000CD 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                text-shadow: none;
            }
            .tab:nth-child(6) .image-container {
                display: flex;
                flex-direction: column;
                gap: 6px;
                width: 100%;
                padding: 0 12px;
                justify-content: center;
                margin-top: 6px;
                margin-bottom: 8px;
            }
            .tab:nth-child(6) .image-container img {
                width: 240px;
                height: 140px;
                object-fit: contain;
                border-radius: 6px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                border: 1px solid rgba(255, 255, 255, 0.5);
                margin: 0 auto;
                background: linear-gradient(135deg, #B0E0E6 0%, #87CEEB 50%, #B0E0E6 100%);
            }
            .tab:nth-child(6):hover {
                transform: scale(1.02);
            }
            .tab:nth-child(6)::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(45deg, rgba(255,255,255,0.2) 0%, transparent 100%);
                pointer-events: none;
            }
        `;
        document.head.appendChild(style);
    }

    updateContent() {
        const tab = document.querySelector('.tab:nth-child(6)');
        if (tab) {
            let contentDiv = tab.querySelector('.tab-content');
            if (!contentDiv) {
                contentDiv = document.createElement('div');
                contentDiv.className = 'tab-content';
                tab.appendChild(contentDiv);
            }

            contentDiv.innerHTML = `
                <h2>Agents on Steroids</h2>
                <div class="content-text">
                    This one is my favorite project. This is a <span class="highlight">text-to-SQL</span> bot but it did a lot more than that. We built our in-house <span class="highlight">visualization library</span> that, given a CSV, transforms it into 2-3 most suitable graphs for that kind of data. It also had an <span class="highlight">RCA library</span> that did RCA for north star metrics and a <span class="highlight">RAG system</span> for a new employee to learn logs (it was text-to-SQL for the logs team).
                </div>
                <div class="image-container">
                    <img src="images/image6.png" alt="Agents Example">
                </div>
            `;
        } else {
            console.error('Tab6: Could not find tab element');
        }
    }
}

// Create instance
new Tab6(); 