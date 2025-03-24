class Tab4 {
    constructor() {
        this.applyStyles();
        setTimeout(() => this.updateContent(), 100);
    }

    applyStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .tab:nth-child(4) {
                background: linear-gradient(135deg, #CB202D 0%, #8B0000 50%, #CB202D 100%);
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
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                border: 1px solid rgba(255, 255, 255, 0.2);
                transform-origin: center center;
                will-change: transform;
            }
            .tab:nth-child(4) .tab-content {
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
            .tab:nth-child(4) h2 {
                font-size: 14px;
                font-weight: 700;
                text-align: center;
                margin: 0;
                color: #ffffff;
                text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
                width: 100%;
                padding: 2px;
                font-family: 'Courier New', monospace;
                text-transform: uppercase;
            }
            .tab:nth-child(4) .sub-heading {
                font-size: 11px;
                font-weight: 600;
                text-align: center;
                color: #ffffff;
                margin: 0;
                padding: 0 12px;
                font-family: 'Courier New', monospace;
            }
            .tab:nth-child(4) .article-preview {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 12px;
                margin-top: auto;
                margin-bottom: auto;
            }
            .tab:nth-child(4) .zomato-logo {
                width: 120px;
                height: auto;
                margin: 10px 0;
            }
            .tab:nth-child(4) .read-more {
                display: inline-block;
                color: #ffffff;
                text-decoration: none;
                font-family: 'Courier New', monospace;
                font-size: 12px;
                padding: 8px 16px;
                border: 1px solid #ffffff;
                border-radius: 4px;
                margin-top: 10px;
                transition: all 0.3s ease;
                text-align: center;
                background: rgba(255, 255, 255, 0.1);
            }
            .tab:nth-child(4) .read-more:hover {
                background: rgba(255, 255, 255, 0.2);
                box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
                transform: translateY(-2px);
            }
            .tab:nth-child(4):hover {
                transform: scale(1.02);
            }
            .tab:nth-child(4)::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: repeating-linear-gradient(
                    0deg,
                    rgba(0, 255, 0, 0.03) 0px,
                    rgba(0, 255, 0, 0.03) 1px,
                    transparent 1px,
                    transparent 2px
                );
                pointer-events: none;
            }
            .tab:nth-child(4) .article-meta {
                font-size: 8px;
                color: #ffffff;
                text-align: center;
                margin: 0;
                font-family: 'Courier New', monospace;
            }
            .tab:nth-child(4) .article-excerpt {
                font-size: 8.5px;
                line-height: 1.4;
                color: #ffffff;
                text-align: left;
                padding: 0 12px;
                margin: 0;
                font-family: 'Courier New', monospace;
            }
        `;
        document.head.appendChild(style);
    }

    updateContent() {
        const tab = document.querySelector('.tab:nth-child(4)');
        if (tab) {
            let contentDiv = tab.querySelector('.tab-content');
            if (!contentDiv) {
                contentDiv = document.createElement('div');
                contentDiv.className = 'tab-content';
                tab.appendChild(contentDiv);
            }

            contentDiv.innerHTML = `
                <h2>Zomato AI Butler</h2>
                <div class="sub-heading">
                    Developed an agentic framework when agentic frameworks never existed
                </div>
                <div class="article-preview">
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato" class="zomato-logo">
                    <div class="article-meta">September 1, 2023 • 3 min read</div>
                    <div class="article-excerpt">
                        Discover how Zomato's revolutionary AI is transforming food ordering! Using cutting-edge multiple agent framework, 
                        this AI butler understands your cravings, dietary needs, and even your mood. From hangover cures to protein-rich meals, 
                        it's like having a personal chef in your pocket! 🌟
                    </div>
                    <a href="https://blog.zomato.com/introducing-zomato-ai-your-foodie-buddy" class="read-more" target="_blank" rel="noopener noreferrer">
                        > Read Full Story _
                    </a>
                </div>
            `;
        } else {
            console.error('Tab4: Could not find tab element');
        }
    }
}

// Initialize the tab
new Tab4(); 