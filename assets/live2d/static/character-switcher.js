// Character Switcher for Live2D Models
class CharacterSwitcher {
    constructor() {
        this.characters = [
            {
                name: "Unity-chan",
                model: "models/unitychan/unitychan.model.json",
                canvas: { width: 250, height: 430 }
            },
            {
                name: "Haru",
                model: "models/haru/haru01.model.json",
                canvas: { width: 250, height: 430 }
            },
            {
                name: "Shizuku",
                model: "models/shizuku/shizuku.model.json",
                canvas: { width: 250, height: 430 }
            },
            {
                name: "Pio",
                model: "models/pio/model.json",
                canvas: { width: 250, height: 430 }
            }
        ];

        this.currentIndex = parseInt(localStorage.getItem('selectedCharacter')) || 0;
    }

    showCharacterMenu() {
        // Remove existing menu if any
        const existingMenu = document.getElementById('character-menu');
        if (existingMenu) {
            existingMenu.remove();
            return;
        }

        // Create menu
        const menu = document.createElement('div');
        menu.id = 'character-menu';
        menu.style.cssText = `
            position: fixed;
            bottom: 80px;
            right: 20px;
            background: white;
            border-radius: 15px;
            padding: 15px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.2);
            z-index: 99999;
            min-width: 200px;
            animation: slideUp 0.3s ease;
        `;

        const title = document.createElement('div');
        title.textContent = 'Choose Character';
        title.style.cssText = `
            font-weight: bold;
            margin-bottom: 10px;
            color: #667eea;
            font-size: 16px;
            text-align: center;
        `;
        menu.appendChild(title);

        // Create character options
        this.characters.forEach((char, index) => {
            const option = document.createElement('div');
            option.textContent = char.name;
            option.style.cssText = `
                padding: 10px 15px;
                margin: 5px 0;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s;
                background: ${index === this.currentIndex ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#f5f5f5'};
                color: ${index === this.currentIndex ? 'white' : '#333'};
                font-weight: ${index === this.currentIndex ? 'bold' : 'normal'};
            `;

            option.onmouseover = () => {
                if (index !== this.currentIndex) {
                    option.style.background = '#e0e0e0';
                }
            };

            option.onmouseout = () => {
                if (index !== this.currentIndex) {
                    option.style.background = '#f5f5f5';
                }
            };

            option.onclick = () => {
                this.switchCharacter(index);
                menu.remove();
            };

            menu.appendChild(option);
        });

        document.body.appendChild(menu);

        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);

        // Close menu when clicking outside
        setTimeout(() => {
            document.addEventListener('click', function closeMenu(e) {
                if (!menu.contains(e.target) && e.target.id !== 'character-switcher-btn') {
                    menu.remove();
                    document.removeEventListener('click', closeMenu);
                }
            });
        }, 100);
    }

    switchCharacter(index) {
        if (index === this.currentIndex) return;

        this.currentIndex = index;
        localStorage.setItem('selectedCharacter', index);

        const character = this.characters[index];

        // Update canvas size
        const canvas = document.getElementById('pio');
        if (canvas) {
            canvas.width = character.canvas.width;
            canvas.height = character.canvas.height;
        }

        // Reload the model
        try {
            loadlive2d("pio", character.model);

            // Show notification
            this.showNotification(`Switched to ${character.name}!`);
        } catch (e) {
            console.error('Failed to switch character:', e);
            this.showNotification(`Failed to load ${character.name}`, true);
        }
    }

    showNotification(message, isError = false) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${isError ? '#f44336' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 100000;
            animation: slideIn 0.3s ease;
            font-weight: 500;
        `;

        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateX(100px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    init() {
        // Initialize with saved character
        const character = this.characters[this.currentIndex];
        return character;
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.characterSwitcher = new CharacterSwitcher();
    });
} else {
    window.characterSwitcher = new CharacterSwitcher();
}
