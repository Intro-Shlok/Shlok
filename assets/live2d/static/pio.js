/* ----

# Pio Plugin
# By: Dreamer-Paul
# Last Update: 2019.8.18 - Fixed for v2.4.1

一个支持更换 Live2D 模型的 Typecho 插件。

本代码为奇趣保罗原创，并遵守 GPL 2.0 开源协议。欢迎访问我的博客：https://paugram.com

---- */

var Paul_Pio = function (prop) {
    var current = {
        idol: 0,
        menu: document.querySelector(".pio-container .pio-action"),
        canvas: document.getElementById("pio"),
        body: document.getElementsByClassName("pio-container")[0],
        root: document.location.protocol + '//' + document.location.hostname + '/'
    };

    /* - Methods */
    var modules = {
        // Change Model
        idol: function () {
            current.idol < (prop.model.length - 1) ? current.idol++ : current.idol = 0;
            return current.idol;
        },
        // Create Content
        create: function (tag, prop) {
            var e = document.createElement(tag);
            if (prop.class) e.className = prop.class;
            return e;
        },
        // Random Content
        rand: function (arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        },
        // Render Dialog
        render: function (text) {
            if (text.constructor === Array) {
                dialog.innerText = modules.rand(text);
            }
            else if (text.constructor === String) {
                dialog.innerText = text;
            }
            else {
                dialog.innerText = "Input error X_X";
            }

            dialog.classList.add("active");

            clearTimeout(this.t);
            this.t = setTimeout(function () {
                dialog.classList.remove("active");
            }, 3000);
        },
        // Destroy
        destroy: function () {
            current.body.parentNode.removeChild(current.body);
            document.cookie = "posterGirl=false; path=/; max-age=" + (30 * 24 * 60 * 60);
        }
    };

    var elements = {
        skin: modules.create("span", { class: "pio-skin" })
    };

    var dialog = modules.create("div", { class: "pio-dialog" });
    current.body.appendChild(dialog);

    var begin = {
        static: function () {
            current.body.classList.add("static");
        },
        fixed: function () {
            current.body.classList.add("fixed");
        },
        draggable: function () {
            current.body.classList.add("draggable");

            // Mouse Drag
            current.body.onmousedown = function (downEvent) {
                var location = {
                    x: downEvent.clientX - this.offsetLeft,
                    y: downEvent.clientY - this.offsetTop
                };

                function move(moveEvent) {
                    current.body.classList.add("active");
                    current.body.style.left = (moveEvent.clientX - location.x) + 'px';
                    current.body.style.top = (moveEvent.clientY - location.y) + 'px';
                    current.body.style.bottom = "auto";
                }

                function up(upEvent) {
                    current.body.classList.remove("active");
                    document.removeEventListener("mousemove", move);
                    document.removeEventListener("mouseup", up);
                }

                document.addEventListener("mousemove", move);
                document.addEventListener("mouseup", up);
            };

            // Touch Drag (Mobile)
            current.body.ontouchstart = function (downEvent) {
                var touch = downEvent.touches[0];
                var location = {
                    x: touch.clientX - this.offsetLeft,
                    y: touch.clientY - this.offsetTop
                };

                function move(moveEvent) {
                    if (moveEvent.cancelable) moveEvent.preventDefault(); // Prevent scrolling
                    var touch = moveEvent.touches[0];
                    current.body.classList.add("active");
                    current.body.style.left = (touch.clientX - location.x) + 'px';
                    current.body.style.top = (touch.clientY - location.y) + 'px';
                    current.body.style.bottom = "auto";
                }

                function end(endEvent) {
                    current.body.classList.remove("active");
                    document.removeEventListener("touchmove", move);
                    document.removeEventListener("touchend", end);
                }

                document.addEventListener("touchmove", move, { passive: false });
                document.addEventListener("touchend", end);
            };
        }
    };

    /* - Interactions */
    var action = {
        // Welcome
        welcome: function () {
            if (document.referrer !== "" && document.referrer.indexOf(current.root) === -1) {
                var referrer = document.createElement('a');
                referrer.href = document.referrer;
                prop.content.referer ? modules.render(prop.content.referer.replace(/%t/, "“" + referrer.hostname + "”")) : modules.render("Welcome friend from " + referrer.hostname + "!");
            }
            else if (prop.tips) {
                var text, hour = new Date().getHours();

                if (hour > 22 || hour <= 5) {
                    text = 'Are you a night owl? Staying up this late... will you wake up tomorrow?';
                }
                else if (hour > 5 && hour <= 8) {
                    text = 'Good morning!';
                }
                else if (hour > 8 && hour <= 11) {
                    text = 'Good morning! Hope work is going well. Don\'t forget to move around!';
                }
                else if (hour > 11 && hour <= 14) {
                    text = 'It\'s lunch time! You\'ve worked hard all morning.';
                }
                else if (hour > 14 && hour <= 17) {
                    text = 'Afternoons can be sleepy. Have you stretched today?';
                }
                else if (hour > 17 && hour <= 19) {
                    text = 'It\'s evening! Look at the beautiful sunset.';
                }
                else if (hour > 19 && hour <= 21) {
                    text = 'Good evening! How was your day?';
                }
                else if (hour > 21 && hour <= 23) {
                    text = 'It\'s getting late. Time to wind down. Goodnight~';
                }
                else {
                    text = "Hello there!";
                }

                modules.render(text);
            }
            else {
                modules.render(prop.content.welcome || "Welcome to the site!");
            }
        },
        // Touch
        touch: function () {
            current.canvas.onclick = function () {
                modules.render(prop.content.touch || ["What are you doing?", "Hey, that tickles!", "Stop that! >_<", "Don't bully me!"]);
            };
        },
        // Buttons
        buttons: function () {
            // Character Switcher
            elements.skin.onclick = function () {
                if (window.characterSwitcher) {
                    window.characterSwitcher.showCharacterMenu();
                } else {
                    loadlive2d("pio", prop.model[modules.idol()]);
                    prop.content.skin && prop.content.skin[1] ? modules.render(prop.content.skin[1]) : modules.render("My new outfit looks great~");
                }
            };
            elements.skin.onmouseover = function () {
                modules.render("Want to switch characters?");
            };
            current.menu.appendChild(elements.skin);
        },
        custom: function () {
            prop.content.custom.forEach(function (t) {
                if (!t.type) t.type = "default";
                var e = document.querySelectorAll(t.selector);

                if (e.length) {
                    for (var j = 0; j < e.length; j++) {
                        if (t.type === "read") {
                            e[j].onmouseover = function () {
                                modules.render("Want to read %t?".replace(/%t/, "“" + this.innerText + "”"));
                            }
                        }
                        else if (t.type === "link") {
                            e[j].onmouseover = function () {
                                modules.render("Want to learn about %t?".replace(/%t/, "“" + this.innerText + "”"));
                            }
                        }
                        else if (t.text) {
                            e[j].onmouseover = function () {
                                modules.render(t.text);
                            }
                        }
                    }
                }
            });
        }
    };

    this.init = function () {
        if (prop.hidden === true && window.innerWidth < 768) {
            current.body.classList.add("hidden");
        }
        else {
            action.welcome();

            switch (prop.mode) {
                case "static": begin.static(); break;
                case "fixed": begin.fixed(); break;
                case "draggable": begin.draggable(); break;
            }

            if (prop.content.custom) action.custom();

            if (prop.model && prop.model[0]) {
                try {
                    loadlive2d("pio", prop.model[0]);
                    action.touch();
                    action.buttons();
                } catch (e) {
                    console.error('Failed to load Live2D model:', e);
                    modules.render("Failed to load model, please refresh.");
                }
            } else {
                console.error('No model specified');
                modules.render("No model specified.");
            }
        }
    };
    this.init();
};

// 请保留版权说明
if (window.console && window.console.log) {
    console.log("%c Pio %c https://paugram.com ", "color: #fff; margin: 1em 0; padding: 5px 0; background: #673ab7;", "margin: 1em 0; padding: 5px 0; background: #efefef;");
}

