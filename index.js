
        // Variables
        const menuToggleButton = document.getElementById("menuToggle");
        const menuElement = document.getElementById("menu");
        const bars = document.getElementsByClassName("bar");
        const navLinks = document.getElementsByClassName("nav__link");
                // Functions
        const menuToggleHandler = () => {
                    if (!menuElement.classList.contains("open")) {
        menuElement.classList.add("open");
                        bars[1].classList.add("open");
                    } else {
        menuElement.classList.remove("open");
                        bars[1].classList.remove("open");
                    }
                };
        const menuCloseHandler = () => {
                    if (menuElement.classList.contains("open")) {
        menuElement.classList.remove("open");
                        bars[1].classList.remove("open");
                    }
                };
        
                // Event Listeners
        menuToggleButton.addEventListener("click", menuToggleHandler);
                for (let i = 0; i<navLinks.length; i++) {
        navLinks[i].addEventListener("click", menuCloseHandler);
                }
        

                // JavaScript to handle opening and closing the mini popup
                const openMiniPopupButton = document.getElementById('open-mini-popup');
                const closeMiniPopupButton = document.getElementById('close-mini-popup');
                const miniPopup = document.getElementById('mini-popup');
        
                openMiniPopupButton.addEventListener('click', () => {
                    miniPopup.style.display = 'block';
                });
        
                closeMiniPopupButton.addEventListener('click', () => {
                    miniPopup.style.display = 'none';
                });
          