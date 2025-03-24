class Tab2 {
    constructor() {
        // Create and apply styles
        this.applyStyles();
        // Update content with a slight delay to ensure DOM is ready
        setTimeout(() => this.updateContent(), 100);
    }

    applyStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .tab:nth-child(2) {
                background: linear-gradient(135deg, #E8E8E8 0%, #F5F5F5 100%);
                color: #333;
                font-family: 'Courier New', monospace;
                padding: 12px;
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
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                transform-origin: center center;
                will-change: transform;
            }
            .tab:nth-child(2) .tab-content {
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
            .tab:nth-child(2) h2 {
                font-size: 14px;
                font-weight: 700;
                text-align: center;
                margin: 0;
                color: #2C3E50;
                text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
                width: 100%;
                padding: 2px;
                font-family: 'Courier New', monospace;
            }
            .tab:nth-child(2) .content-text {
                font-size: 8.5px;
                line-height: 1.4;
                color: #34495E;
                margin: 0;
                text-align: left;
                padding: 0 8px;
                font-family: 'Courier New', monospace;
            }
            .tab:nth-child(2) .content-text strong {
                color: #2C3E50;
                font-weight: 700;
            }
            .tab:nth-child(2) .image-container {
                display: flex;
                flex-direction: row;
                gap: 8px;
                width: 100%;
                padding: 0 8px;
                justify-content: center;
                margin-top: auto;
                position: relative;
            }
            .tab:nth-child(2) .image-container::before {
                content: "Before";
                position: absolute;
                top: -13px;
                left: 28%;
                transform: translateX(-50%);
                font-size: 8px;
                font-weight: 600;
                color: #2C3E50;
                font-family: 'Courier New', monospace;
            }
            .tab:nth-child(2) .image-container::after {
                content: "After";
                position: absolute;
                top: -13px;
                left: 72%;
                transform: translateX(-50%);
                font-size: 8px;
                font-weight: 600;
                color: #2C3E50;
                font-family: 'Courier New', monospace;
            }
            .tab:nth-child(2) .image-container img {
                width: 110px;
                height: 110px;
                object-fit: cover;
                border-radius: 6px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
            .tab:nth-child(2):hover {
                transform: scale(1.02);
            }
        `;
        document.head.appendChild(style);
    }

    updateContent() {
        const tab = document.querySelector('.tab:nth-child(2)');
        if (tab) {
            let contentDiv = tab.querySelector('.tab-content');
            if (!contentDiv) {
                contentDiv = document.createElement('div');
                contentDiv.className = 'tab-content';
                tab.appendChild(contentDiv);
            }

            contentDiv.innerHTML = `
                <h2>ACCIDENTAL USE OF DIFFUSION</h2>
                <div class="content-text">
                    While developing <strong>fine-tuned diffusion models</strong> specifically for generating <strong>Indian food images</strong> based on text prompts, I discovered <strong>image in-painting and outpainting</strong> techniques, these methods allowed for <strong>targeted editing</strong> (modifying only specific areas). I applied these techniques to enhance <strong>restaurant menu photos</strong> that didn't meet quality standards. This approach is now used in production to improve approximately <strong>40%</strong> of the previously rejected images submitted by restaurants.
                </div>
                <div class="image-container">
                    <img src="images/image1.png" alt="Diffusion Model Example 1">
                    <img src="images/image2.png" alt="Diffusion Model Example 2">
                </div>
            `;
        } else {
            console.error('Tab2: Could not find tab element');
        }
    }
}

// Create instance
new Tab2(); 