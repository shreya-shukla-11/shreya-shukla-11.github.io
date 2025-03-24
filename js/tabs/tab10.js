class Tab10 {
    constructor() {
        this.applyStyles();
        setTimeout(() => this.updateContent(), 100);
    }

    applyStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .tab:nth-child(10) {
                background: linear-gradient(135deg, 
                    #d4d4d4 0%, 
                    #b8b8b8 25%,
                    #d4d4d4 50%, 
                    #b8b8b8 75%,
                    #d4d4d4 100%);
                color: #333;
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
                box-shadow: 0 4px 15px rgba(192, 192, 192, 0.4),
                           inset 0 0 20px rgba(255, 255, 255, 0.3);
                border: 1px solid rgba(255, 255, 255, 0.6);
                transform-origin: center center;
                will-change: transform;
            }
            .tab:nth-child(10) .tab-content {
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
            .tab:nth-child(10) h2 {
                font-size: 13px;
                font-weight: 800;
                text-align: center;
                margin: 0;
                color: #333;
                text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
                width: 100%;
                padding: 2px;
                text-transform: uppercase;
                margin-top: 8px;
                letter-spacing: 1px;
                position: relative;
            }
            .tab:nth-child(10) .content-text {
                font-size: 7px;
                line-height: 1.4;
                color: #333;
                margin: 0;
                text-align: left;
                padding: 10px;
                font-family: 'Courier New', monospace;
                font-weight: 600;
                position: relative;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 12px;
                border: 1px solid rgba(192, 192, 192, 0.3);
                backdrop-filter: blur(5px);
            }
            .tab:nth-child(10) .paragraph {
                margin-bottom: 8px;
            }
            .tab:nth-child(10) .highlight {
                color: #666;
                font-weight: 800;
                text-shadow: 0 0 1px rgba(102, 102, 102, 0.3);
            }
            .tab:nth-child(10) .ps-note {
                font-size: 6px;
                font-style: italic;
                color: #666;
                margin-top: 5px;
                opacity: 0.9;
                text-align: center;
                width: 100%;
            }
            .tab:nth-child(10):hover {
                transform: scale(1.02);
            }
            .tab:nth-child(10)::before {
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
            .tab:nth-child(10)::after {
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
        const tab = document.querySelector('.tab:nth-child(10)');
        if (tab) {
            let contentDiv = tab.querySelector('.tab-content');
            if (!contentDiv) {
                contentDiv = document.createElement('div');
                contentDiv.className = 'tab-content';
                tab.appendChild(contentDiv);
            }

            contentDiv.innerHTML = `
                <h2>The Ideal Product</h2>
                <div class="content-text">
                    <div class="paragraph">
                        This is a story of failure. We had to generate the <span class="highlight">checkout page</span> directly with carts given the <span class="highlight">menu of the restaurant</span>, number of <span class="highlight">veg/non-veg people</span>. There was a text box where a person could add their <span class="highlight">special preferences</span>, maximize quality and diversity, apply the latest offer, adjust the cart to apply the most <span class="highlight">optimized offers/promos</span> - all under <span class="highlight">15 seconds</span> and <span class="highlight">2 Rs of cost per cart</span>.
                    </div>

                    <div class="paragraph">
                        This problem statement is an obvious case for a <span class="highlight">multi-agentic framework</span> of different types of models. Some models are good with <span class="highlight">Indian food context</span> and what goes with what to ensure dish harmony, some are good with <span class="highlight">reasoning to optimize</span> the cart for a certain number of people. But these traits you can only find in <span class="highlight">larger LLMs</span> which have a certain cost and latency. After multiple tries with <span class="highlight">smaller LLMs</span> and hundreds of agentic frameworks, we were not able to balance everything on this ideal product.
                    </div>

                    <div class="paragraph">
                        Good carts needed certain <span class="highlight">latency and cost</span>, and if we compromised on it, then cart quality was not good. Eventually, we had to <span class="highlight">boil down the product requirements</span> (learned it the hard way) 1 week before the launch.
                    </div>

                    <div class="ps-note">PS: I literally searched for color of disappointed while making this portfolio</div>
                </div>
            `;
        } else {
            console.error('Tab10: Could not find tab element');
        }
    }
}

// Create instance
new Tab10(); 