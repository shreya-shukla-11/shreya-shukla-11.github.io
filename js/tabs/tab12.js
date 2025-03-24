class Tab12 {
    constructor() {
        this.applyStyles();
        setTimeout(() => {
            this.updateContent();
        }, 100);
    }

    applyStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .tab:nth-child(12) {
                background: linear-gradient(135deg, 
                    rgba(232, 211, 199, 0.95) 0%, 
                    rgba(212, 181, 167, 0.95) 50%,
                    rgba(232, 211, 199, 0.95) 100%);
                color: #4A2511;
                font-family: 'Source Code Pro', 'Courier New', monospace;
                padding: 4px;
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
                box-shadow: 0 4px 15px rgba(74, 37, 17, 0.2),
                           inset 0 0 20px rgba(255, 255, 255, 0.3);
                border: 1px solid rgba(74, 37, 17, 0.2);
                transform-origin: center center;
                will-change: transform;
                background-image: url('images/image12.png');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            }
            .tab:nth-child(12)::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(135deg, 
                    rgba(232, 211, 199, 0.95) 0%, 
                    rgba(212, 181, 167, 0.95) 50%,
                    rgba(232, 211, 199, 0.95) 100%);
                z-index: 1;
            }
            .tab:nth-child(12) .tab-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 4px;
                transform: translateZ(1px);
                width: 100%;
                height: 100%;
                pointer-events: auto;
                overflow: hidden;
                position: relative;
                z-index: 2;
            }
            .tab:nth-child(12) h2 {
                font-size: 10px;
                font-weight: 800;
                text-align: center;
                margin: 0;
                color: #4A2511;
                width: 100%;
                padding: 2px;
                text-transform: uppercase;
                margin-top: 4px;
                letter-spacing: 1px;
                position: relative;
                text-shadow: 1px 1px 2px rgba(74, 37, 17, 0.1);
            }
            .tab:nth-child(12) .content-text {
                font-size: 7px;
                line-height: 1.4;
                color: #4A2511;
                margin: 0;
                text-align: left;
                padding: 8px;
                font-weight: 600;
                position: relative;
                background: rgba(255, 255, 255, 0.6);
                border-radius: 12px;
                border: 1px solid rgba(74, 37, 17, 0.1);
                backdrop-filter: blur(5px);
            }
            .tab:nth-child(12) .paragraph {
                margin-bottom: 6px;
                position: relative;
                z-index: 2;
            }
            .tab:nth-child(12) .highlight {
                color: #8B4513;
                font-weight: 800;
                position: relative;
                display: inline-block;
                text-decoration: underline;
                text-decoration-color: rgba(139, 69, 19, 0.3);
                text-decoration-thickness: 1px;
            }
            .tab:nth-child(12):hover {
                transform: scale(1.02);
            }
            .tab:nth-child(12)::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: radial-gradient(circle at 50% 50%,
                    rgba(74, 37, 17, 0.05) 0%,
                    transparent 70%);
                pointer-events: none;
                z-index: 1;
            }
        `;
        document.head.appendChild(style);
    }

    updateContent() {
        const tab = document.querySelector('.tab:nth-child(12)');
        if (tab) {
            let contentDiv = tab.querySelector('.tab-content');
            if (!contentDiv) {
                contentDiv = document.createElement('div');
                contentDiv.className = 'tab-content';
                tab.appendChild(contentDiv);
            }

            contentDiv.innerHTML = `
                <h2>The AI Gateway</h2>
                <div class="content-text">
                    <div class="paragraph">
                        After building AI products for a long time in the enterprise, this is one of the most inevitable challenges. Managing numerous <span class="highlight">LLM providers</span> with their associated costs, <span class="highlight">observability requirements</span>, rate limits, and unique authentication systems becomes overwhelming.
                    </div>

                    <div class="paragraph">
                        We created an <span class="highlight">abstraction layer microservice</span> over all providers with a single dedicated authentication system that handled <span class="highlight">load balancing</span>, retries, and rate limiting internally across deployments. This solution provided us with one comprehensive dashboard for complete <span class="highlight">observability</span>.
                    </div>
                </div>
            `;
        } else {
            console.error('Tab12: Could not find tab element');
        }
    }
}

// Create instance
new Tab12(); 