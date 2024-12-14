document.addEventListener("DOMContentLoaded", function () {
            const createEffect = (type) => {
                const element = document.createElement("div");

                if (type === "snow") {
                    element.className = "snowflake";
                    element.textContent = "❄";
                    element.style.color = "white";
                } else if (type === "flower") {
                    element.className = "flower";
                    element.textContent = "❀";
                    element.style.color = "pink"; // Hoa đào
                } else if (type === "mai") {
                    element.className = "flower";
                    element.textContent = "❀";
                    element.style.color = "yellow"; // Hoa mai
                }

                element.style.left = Math.random() * 100 + "vw";
                element.style.animationDuration = Math.random() * 5 + 5 + "s";
                document.body.appendChild(element);

                setTimeout(() => {
                    element.remove();
                }, 10000);
            };

            const now = new Date();
            // const month = 12;
            const month = now.getMonth() + 1;
            if (month === 12) {
                setInterval(() => createEffect("snow"), 300);
                const message = document.getElementById("christmas-message");
                if (message) {
                    message.style.display = "block";
                }
            } else if (month === 1) {
                setInterval(() => createEffect("flower"), 300); // Hoa đào
                setInterval(() => createEffect("mai"), 400);    // Hoa mai
                const message = document.getElementById("new-year-message");
                if (message) {
                    message.style.display = "block";
                }
            }
        });