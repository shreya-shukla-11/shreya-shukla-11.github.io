class Tab7 {
    constructor() {
        this.applyStyles();
        setTimeout(() => this.updateContent(), 100);
    }

    applyStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .tab:nth-child(7) {
                background: linear-gradient(135deg, #FFD700 0%, #FFF8DC 25%, #DAA520 50%, #FFF8DC 75%, #FFD700 100%);
                color: #382E1C;
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
                box-shadow: 0 4px 15px rgba(218, 165, 32, 0.4);
                border: 1px solid rgba(255, 215, 0, 0.7);
                transform-origin: center center;
                will-change: transform;
            }
            .tab:nth-child(7) .tab-content {
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
            .tab:nth-child(7) h2 {
                font-size: 13px;
                font-weight: 800;
                text-align: center;
                margin: 0;
                color: #382E1C;
                text-shadow: 1px 1px 2px rgba(255, 215, 0, 0.5);
                width: 100%;
                padding: 2px;
                font-family: 'VT323', 'Courier New', monospace;
                text-transform: uppercase;
                margin-top: 8px;
                letter-spacing: 1px;
                position: relative;
            }
            .tab:nth-child(7) h2::before {
                content: '> ';
                color: #B8860B;
                position: absolute;
                left: 10px;
            }
            .tab:nth-child(7) .content-text {
                font-size: 8px;
                line-height: 1.4;
                color: #382E1C;
                margin: 0;
                text-align: left;
                padding: 0 12px;
                font-family: 'Courier New', monospace;
                font-weight: 600;
                position: relative;
            }
            .tab:nth-child(7) .highlight {
                font-weight: 800;
                color: #B8860B;
                text-shadow: 0px 0px 1px rgba(184, 134, 11, 0.3);
                position: relative;
                padding: 0 2px;
            }
            .tab:nth-child(7) .highlight::before {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                height: 2px;
                background: linear-gradient(90deg, transparent, #B8860B, transparent);
                opacity: 0.5;
            }
            .tab:nth-child(7) .image-container {
                display: flex;
                flex-direction: column;
                gap: 6px;
                width: 100%;
                padding: 0 12px;
                justify-content: center;
                margin-top: 6px;
                margin-bottom: 8px;
            }
            .tab:nth-child(7) .image-container img {
                width: 240px;
                height: 140px;
                object-fit: contain;
                border-radius: 6px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                border: 1px solid rgba(218, 165, 32, 0.5);
                margin: 0 auto;
                background: linear-gradient(135deg, #FFF8DC 0%, #FFD700 50%, #FFF8DC 100%);
            }
            .tab:nth-child(7):hover {
                transform: scale(1.02);
            }
            .tab:nth-child(7)::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(45deg, rgba(255,215,0,0.2) 0%, transparent 100%);
                pointer-events: none;
            }
        `;
        document.head.appendChild(style);
    }

    updateContent() {
        const tab = document.querySelector('.tab:nth-child(7)');
        if (tab) {
            let contentDiv = tab.querySelector('.tab-content');
            if (!contentDiv) {
                contentDiv = document.createElement('div');
                contentDiv.className = 'tab-content';
                tab.appendChild(contentDiv);
            }

            contentDiv.innerHTML = `
                <h2>Mining Data Dumps</h2>
                <div class="content-text">
                    For this <span class="highlight">reviews project</span> of restaurants, the basic thing a person can think to digest such large data is to summarize it, but if you are <span class="highlight">creative enough</span>, you can get <span class="highlight">gold standard insights</span> from such large chunks of data. We were able to get <span class="highlight">USPs of restaurants</span> that were later used to enhance their discoverability on search too. In this project, I was exposed to good <span class="highlight">product management</span> and crazy creativity and I learned how you should use your <span class="highlight">creativity</span> to get crazy insights from any large dumps of data.
                </div>
                <div class="image-container">
                    <img src="images/image7.png" alt="Data Mining Example">
                </div>
            `;
        } else {
            console.error('Tab7: Could not find tab element');
        }
    }
}

// Create instance
new Tab7(); 