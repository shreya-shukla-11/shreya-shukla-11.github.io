class Tab11 {
    constructor() {
        this.applyStyles();
        setTimeout(() => {
            this.updateContent();
            this.createFireworks();
        }, 100);
    }

    applyStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .tab:nth-child(11) {
                background: linear-gradient(135deg, 
                    #040348 0%, 
                    #060566 50%,
                    #040348 100%);
                color: #fff;
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
                box-shadow: 0 4px 15px rgba(4, 3, 72, 0.4),
                           inset 0 0 20px rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                transform-origin: center center;
                will-change: transform;
            }
            .tab:nth-child(11) .tab-content {
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
                z-index: 1;
            }
            .tab:nth-child(11) h2 {
                font-size: 10px;
                font-weight: 800;
                text-align: center;
                margin: 0;
                background: linear-gradient(45deg, #FFD700, #FFA500, #FF6347, #FFD700);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-size: 300% 300%;
                animation: shine 3s infinite;
                width: 100%;
                padding: 2px;
                text-transform: uppercase;
                margin-top: 4px;
                letter-spacing: 1px;
                position: relative;
            }
            @keyframes shine {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            .tab:nth-child(11) .content-text {
                font-size: 7px;
                line-height: 1.4;
                color: #fff;
                margin: 0;
                text-align: left;
                padding: 8px;
                font-weight: 600;
                position: relative;
                background: rgba(255, 255, 255, 0.03);
                border-radius: 12px;
                border: 1px solid rgba(255, 255, 255, 0.05);
                backdrop-filter: blur(5px);
            }
            .tab:nth-child(11) .paragraph {
                margin-bottom: 6px;
                position: relative;
                z-index: 2;
            }
            .tab:nth-child(11) .highlight {
                color: #FFD700;
                font-weight: 800;
                position: relative;
                display: inline-block;
            }
            .tab:nth-child(11) .highlight::after {
                content: '✨';
                position: absolute;
                top: -8px;
                right: -8px;
                font-size: 8px;
                animation: twinkle 1.5s infinite;
                opacity: 0.8;
            }
            @keyframes twinkle {
                0%, 100% { transform: scale(1); opacity: 0.8; }
                50% { transform: scale(1.2); opacity: 1; }
            }
            .tab:nth-child(11) .image-container {
                width: 100%;
                height: 180px;
                position: relative;
                margin-top: auto;
                overflow: hidden;
                display: flex;
                gap: 2px;
                padding: 0;
                background: transparent;
            }
            .tab:nth-child(11) .image-wrapper {
                flex: 1;
                height: 100%;
                overflow: hidden;
                position: relative;
                transition: transform 0.3s ease;
            }
            .tab:nth-child(11) .image-wrapper:hover {
                transform: scale(1.05);
                z-index: 3;
            }
            .tab:nth-child(11) .image-container img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                filter: brightness(1.1) contrast(1.1);
                transition: transform 0.3s ease;
            }
            .tab:nth-child(11) .image-wrapper::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(45deg, 
                    rgba(255, 215, 0, 0.1),
                    transparent 40%,
                    transparent 60%,
                    rgba(255, 215, 0, 0.1));
                pointer-events: none;
            }
            .tab:nth-child(11) .firework {
                position: absolute;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                animation: explode 1.5s ease-out infinite;
                opacity: 0;
            }
            @keyframes explode {
                0% { transform: scale(0); opacity: 0; }
                20% { opacity: 1; }
                50% { transform: scale(15); opacity: 0.5; }
                100% { transform: scale(30); opacity: 0; }
            }
            .tab:nth-child(11):hover {
                transform: scale(1.02);
            }
            .tab:nth-child(11)::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: radial-gradient(circle at 50% 50%,
                    rgba(255, 215, 0, 0.1) 0%,
                    transparent 70%);
                pointer-events: none;
                animation: pulse 4s infinite;
            }
            @keyframes pulse {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 0.6; }
            }
        `;
        document.head.appendChild(style);
    }

    createFireworks() {
        const tab = document.querySelector('.tab:nth-child(11)');
        const colors = ['#FFD700', '#FFA500', '#FF6347', '#FF69B4', '#00CED1'];
        
        setInterval(() => {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = Math.random() * 100 + '%';
            firework.style.top = Math.random() * 100 + '%';
            firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            firework.style.animationDelay = Math.random() * 2 + 's';
            
            tab.appendChild(firework);
            setTimeout(() => firework.remove(), 1500);
        }, 500);
    }

    updateContent() {
        const tab = document.querySelector('.tab:nth-child(11)');
        if (tab) {
            let contentDiv = tab.querySelector('.tab-content');
            if (!contentDiv) {
                contentDiv = document.createElement('div');
                contentDiv.className = 'tab-content';
                tab.appendChild(contentDiv);
            }

            contentDiv.innerHTML = `
                <h2>I Will Call This an Ideal Product</h2>
                <div class="content-text">
                    <div class="paragraph">
                        We removed some parts of the product requirements and changed the product a little bit - eliminating the <span class="highlight">special requirements</span> section and removing the <span class="highlight">cart adjustment</span> for optimal offers. This immediately transformed the problem into a <span class="highlight">multi-variate optimization</span> challenge that didn't require AI.
                    </div>

                    <div class="paragraph">
                        We still used AI to estimate the <span class="highlight">serving size</span> of each individual menu item, but that was a <span class="highlight">one-time preprocessing</span> step. As a result, we could generate carts in <span class="highlight">200ms</span> with <span class="highlight">₹0 real-time cost</span>, aside from the initial preprocessing expense.
                    </div>
                </div>
                <div class="image-container">
                    <div class="image-wrapper">
                        <img src="images/image10.png" alt="Success Visualization 1">
                    </div>
                    <div class="image-wrapper">
                        <img src="images/image11.png" alt="Success Visualization 2">
                    </div>
                </div>
            `;
        } else {
            console.error('Tab11: Could not find tab element');
        }
    }
}

// Create instance
new Tab11(); 