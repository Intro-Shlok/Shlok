window.initPio = function () {
    return new Promise((resolve, reject) => {
        // Create HTML Structure if not exists
        if (!document.querySelector('.pio-container')) {
            const pioContainer = document.createElement('div');
            pioContainer.className = 'pio-container right';
            pioContainer.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 9999;
            `;
            pioContainer.innerHTML = `
                <div class="pio-action"></div>
                <canvas id="pio" width="250" height="430"></canvas>
            `;
            document.body.appendChild(pioContainer);
        }

        const loadScript = (src) => {
            return new Promise((res, rej) => {
                if (document.querySelector(`script[src="${src}"]`)) {
                    res();
                    return;
                }
                const script = document.createElement('script');
                script.src = src;
                script.onload = res;
                script.onerror = rej;
                document.body.appendChild(script);
            });
        };

        const loadCSS = (href) => {
            if (document.querySelector(`link[href="${href}"]`)) return;
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            document.head.appendChild(link);
        };

        loadCSS('static/pio.css');

        Promise.all([
            loadScript('static/l2d.js'),
            loadScript('static/pio.js?v=' + Date.now()),
            loadScript('static/character-switcher.js')
        ]).then(() => {
            // Get selected character from switcher
            const switcher = new CharacterSwitcher();
            const selectedChar = switcher.init();

            // Update canvas size based on selected character
            const canvas = document.getElementById('pio');
            if (canvas && selectedChar) {
                canvas.width = selectedChar.canvas.width;
                canvas.height = selectedChar.canvas.height;
            }

            // Initialize Pio with selected character
            new Paul_Pio({
                "mode": "draggable",
                "hidden": false,
                "content": {
                    "welcome": ["Welcome back!", "Ready to explore?", "How are you today?"],
                    "custom": [
                        { "selector": "a", "type": "link" },
                        { "selector": "button", "type": "text", "text": "Want to click that?" },
                        { "selector": "input", "type": "text", "text": "Typing something?" }
                    ]
                },
                "night": "console.log('Night mode toggled')",
                "model": [selectedChar ? selectedChar.model : "models/unitychan/unitychan.model.json"]
            });

            resolve();
        }).catch(err => {
            console.error('Failed to load Pio scripts', err);
            reject(err);
        });
    });
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.initPio);
} else {
    window.initPio();
}
