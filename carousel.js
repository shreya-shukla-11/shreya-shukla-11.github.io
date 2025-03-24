class Carousel {
    constructor() {
        this.container = document.getElementById('carousel-container');
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.tabs = [];
        this.radius = window.innerWidth < 768 ? 300 : 600;
        this.numTabs = 12;
        this.currentRotation = 0;
        this.targetRotation = 0;
        this.isAnimating = false;
        this.rotationSpeed = 0.01;
        this.isMobile = window.innerWidth < 768;
        this.isHovering = false;
        this.hasInitialized = false;

        this.init();
    }

    init() {
        // Setup renderer
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000, 1);
        this.container.appendChild(this.renderer.domElement);

        // Setup camera
        this.camera.position.z = this.isMobile ? 800 : 1500;
        this.camera.position.y = this.isMobile ? 50 : 100;
        this.camera.lookAt(0, 0, 0);

        // Clear existing tabs
        while (this.container.firstChild) {
            this.container.removeChild(this.container.firstChild);
        }

        // Create tabs
        for (let i = 0; i < this.numTabs; i++) {
            const tab = document.createElement('div');
            tab.className = 'tab';
            tab.innerHTML = `<div class="tab-content">Tab ${i + 1}</div>`;
            this.container.appendChild(tab);
            this.tabs.push(tab);
        }

        // Position tabs in a circle
        this.updateTabPositions();

        // Add event listeners
        window.addEventListener('resize', () => this.onWindowResize());
        
        // Mouse events
        document.addEventListener('mousedown', (e) => this.onMouseDown(e));
        document.addEventListener('mousemove', (e) => this.onMouseMove(e));
        document.addEventListener('mouseup', () => this.onMouseUp());
        
        // Touch events
        document.addEventListener('touchstart', (e) => this.onTouchStart(e));
        document.addEventListener('touchmove', (e) => this.onTouchMove(e));
        document.addEventListener('touchend', () => this.onTouchEnd());

        // Hover events for carousel container
        this.container.addEventListener('mouseenter', () => this.isHovering = true);
        this.container.addEventListener('mouseleave', () => this.isHovering = false);
        
        // Wheel event for tab rotation
        document.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (!this.hasInitialized) {
                // Initial wheel animation to tab1
                this.targetRotation = 0;
                this.hasInitialized = true;
            } else {
                // Slow tab rotation
                const delta = e.deltaY > 0 ? -1 : 1;
                this.targetRotation += (2 * Math.PI / this.numTabs) * delta * 0.1;
            }
        }, { passive: false });

        // Start animation loop
        this.animate();
    }

    updateTabPositions() {
        const angleStep = (2 * Math.PI) / this.numTabs;
        this.tabs.forEach((tab, index) => {
            const angle = index * angleStep + this.currentRotation;
            
            // Calculate 3D position
            const x = Math.sin(angle) * this.radius;
            const z = Math.cos(angle) * this.radius;
            const y = 0;
            
            // Calculate rotation to face outward
            const rotationY = angle;
            
            // Calculate scale based on z position for perspective effect
            const scale = this.calculateScale(z);
            
            // Calculate opacity based on position
            const opacity = this.calculateOpacity(z);
            
            // Apply transforms with adjusted rotation
            tab.style.transform = `translate3d(${x}px, ${y}px, ${z}px) 
                                 rotateY(${rotationY}rad) 
                                 scale(${scale})`;
            tab.style.opacity = opacity;
            
            // Update z-index based on position
            tab.style.zIndex = Math.round(z);
        });
    }

    calculateScale(z) {
        // Scale between 0.6 and 1 based on z position
        const normalizedZ = (z + this.radius) / (2 * this.radius);
        return 0.6 + (normalizedZ * 0.4);
    }

    calculateOpacity(z) {
        // Opacity between 0.4 and 1 based on z position
        const normalizedZ = (z + this.radius) / (2 * this.radius);
        return 0.4 + (normalizedZ * 0.6);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Smooth rotation
        if (this.currentRotation !== this.targetRotation) {
            const diff = this.targetRotation - this.currentRotation;
            this.currentRotation += diff * 0.05;
            this.updateTabPositions();
        }

        this.renderer.render(this.scene, this.camera);
    }

    onTouchStart(e) {
        e.preventDefault();
        this.isAnimating = true;
        this.startX = e.touches[0].clientX;
        this.startRotation = this.currentRotation;
    }

    onTouchMove(e) {
        e.preventDefault();
        if (!this.isAnimating) return;
        const deltaX = e.touches[0].clientX - this.startX;
        this.targetRotation = this.startRotation + (deltaX / this.radius) * 2;
    }

    onTouchEnd() {
        this.isAnimating = false;
    }

    onWindowResize() {
        this.isMobile = window.innerWidth < 768;
        this.radius = this.isMobile ? 300 : 600;
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.position.z = this.isMobile ? 800 : 1500;
        this.camera.position.y = this.isMobile ? 50 : 100;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.updateTabPositions();
    }

    onMouseDown(e) {
        this.isAnimating = true;
        this.startX = e.clientX;
        this.startRotation = this.currentRotation;
    }

    onMouseMove(e) {
        if (!this.isAnimating) return;
        const deltaX = e.clientX - this.startX;
        this.targetRotation = this.startRotation + (deltaX / this.radius) * 2;
    }

    onMouseUp() {
        this.isAnimating = false;
    }
}

// Make carousel initialization available globally
window.initializeCarousel = function() {
    new Carousel();
};