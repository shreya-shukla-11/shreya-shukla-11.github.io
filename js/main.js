document.addEventListener('DOMContentLoaded', function() {
    const tabsContainer = document.querySelector('.tabs-container');
    const numTabs = 12;
    let currentTab = 0;
    let isScrolling = false;
    let lastScrollTime = 0;
    const scrollCooldown = 1000; // 1 second cooldown between scroll actions
    let lastDirection = null;
    
    // Create and append all tabs
    for (let i = 1; i <= numTabs; i++) {
        createTab(i);
    }
    
    // Initialize all tabs with proper initial position
    setupInitialTabs();
    
    // Handle scrolling with throttling
    window.addEventListener('wheel', throttleScroll);
    window.addEventListener('touchstart', handleTouchStart, false);
    window.addEventListener('touchmove', throttleTouchMove, false);
    
    // Variables for touch events
    let touchStartY = 0;
    
    function setupInitialTabs() {
        const allTabs = document.querySelectorAll('.tab');
        
        // Set initial positions for all tabs
        allTabs.forEach((tab, index) => {
            if (index === 0) {
                tab.classList.add('active');
            } else {
                tab.classList.add('incoming'); // All other tabs start below
                tab.style.opacity = '0';
            }
        });
    }
    
    function handleTouchStart(event) {
        touchStartY = event.touches[0].clientY;
    }
    
    function throttleTouchMove(event) {
        if (isScrolling) return;
        
        const now = Date.now();
        if (now - lastScrollTime < scrollCooldown) return;
        
        handleTouchMove(event);
    }
    
    function handleTouchMove(event) {
        if (isScrolling) return;
        
        const touchEndY = event.touches[0].clientY;
        const diff = touchStartY - touchEndY;
        
        // Threshold to trigger a scroll (50px)
        if (Math.abs(diff) > 50) {
            lastScrollTime = Date.now();
            
            if (diff > 0) {
                // Swiping up -> NEXT tab
                nextTab('up'); // Pass 'up' to keep animation direction consistent
            } else {
                // Swiping down -> PREVIOUS tab
                prevTab('down'); // Pass 'down' to keep animation direction consistent
            }
        }
    }
    
    function throttleScroll(event) {
        if (isScrolling) return;
        
        const now = Date.now();
        if (now - lastScrollTime < scrollCooldown) {
            event.preventDefault();
            return;
        }
        
        lastScrollTime = now;
        handleScroll(event);
    }
    
    function handleScroll(event) {
        // Determine scroll direction - reversed for natural scrolling
        if (event.deltaY > 0) {
            // Scrolling down - next tab (lower tab)
            nextTab('down');
        } else {
            // Scrolling up - previous tab (upper tab)
            prevTab('up');
        }
    }
    
    function nextTab(direction = 'down') {
        // If at the last tab, loop back to the first tab
        if (currentTab === numTabs - 1) {
            changeTab(currentTab, 0, direction);
        } else {
            changeTab(currentTab, currentTab + 1, direction);
        }
    }
    
    function prevTab(direction = 'up') {
        // If at the first tab, loop to the last tab
        if (currentTab === 0) {
            changeTab(currentTab, numTabs - 1, direction);
        } else {
            changeTab(currentTab, currentTab - 1, direction);
        }
    }
    
    function changeTab(from, to, direction) {
        if (isScrolling) return;
        isScrolling = true;
        lastDirection = direction;
        
        const tabs = document.querySelectorAll('.tab');
        const currentTabElement = tabs[from];
        const nextTabElement = tabs[to];
        
        // Remove all animation classes from the elements we're working with
        resetElement(currentTabElement);
        resetElement(nextTabElement);
        
        // Make active tab visible
        currentTabElement.classList.add('active');
        
        // Set next tab's initial position
        if (direction === 'down') {
            nextTabElement.classList.add('incoming');
        } else {
            nextTabElement.classList.add('incoming-reverse');
        }
        
        // Give the browser a moment to render the initial state
        requestAnimationFrame(() => {
            // Start the exit animation for current tab
            currentTabElement.classList.remove('active');
            
            if (direction === 'down') {
                currentTabElement.classList.add('exiting');
            } else {
                currentTabElement.classList.add('exiting-reverse');
            }
            
            // After a short delay, start the entrance animation for the next tab
            setTimeout(() => {
                if (direction === 'down') {
                    nextTabElement.classList.remove('incoming');
                } else {
                    nextTabElement.classList.remove('incoming-reverse');
                }
                
                nextTabElement.classList.add('active');
                
                // Wait for animations to complete
                setTimeout(() => {
                    // Clean up the current (now previous) tab
                    resetElement(currentTabElement);
                    
                    // Set up the tab that will be needed next for smooth transition
                    prepareNextTabInSequence(to);
                    
                    // Update the current tab index
                    currentTab = to;
                    isScrolling = false;
                }, 800);
            }, 50);
        });
    }
    
    function prepareNextTabInSequence(currentIndex) {
        const tabs = document.querySelectorAll('.tab');
        let nextIndex, prevIndex;
        
        // Calculate indices with loop wrapping
        nextIndex = (currentIndex === numTabs - 1) ? 0 : currentIndex + 1;
        prevIndex = (currentIndex === 0) ? numTabs - 1 : currentIndex - 1;
        
        // Set up positions for all tabs that aren't the current one
        tabs.forEach((tab, index) => {
            if (index !== currentIndex) {
                resetElement(tab);
                
                // If this is the next tab in sequence, position it for entrance from below
                if (index === nextIndex) {
                    tab.classList.add('incoming');
                }
                // If this is the prev tab in sequence, position it for entrance from above 
                else if (index === prevIndex) {
                    tab.classList.add('incoming-reverse');
                }
                // All other tabs, move them completely off screen
                else {
                    tab.style.transform = 'translate(-50%, -50%) translateY(200vh)';
                    tab.style.opacity = '0';
                }
            }
        });
    }
    
    function resetElement(element) {
        // Remove all animation classes
        element.classList.remove('active', 'exiting', 'exiting-reverse', 'incoming', 'incoming-reverse');
        
        // Clear any inline styles
        element.style.transform = '';
        element.style.opacity = '';
        
        // Force a reflow to ensure changes take effect
        void element.offsetWidth;
    }
    
    function createTab(index) {
        const tab = document.createElement('div');
        tab.className = 'tab';
        tab.id = `tab-${index}`;
        
        // Add a class for potential side-by-side layout styling
        if (index % 2 === 0) {
            tab.classList.add('layout-right');
        } else {
            tab.classList.add('layout-left');
        }
        
        // Load content from tab file
        fetch(`tabs/tab${index}.html`)
            .then(response => {
                if (!response.ok) {
                    return `<div class="tab-content">
                        <h2>Tab ${index}</h2>
                        <p>Content for tab ${index} will be designed later.</p>
                    </div>`;
                }
                return response.text();
            })
            .then(html => {
                tab.innerHTML = html;
            })
            .catch(() => {
                tab.innerHTML = `<div class="tab-content">
                    <h2>Tab ${index}</h2>
                    <p>Content for tab ${index} will be designed later.</p>
                </div>`;
            });
        
        tabsContainer.appendChild(tab);
    }
}); 