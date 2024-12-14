document.addEventListener("DOMContentLoaded", function () {
    const displayMessage = (message, effects = false) => {
        const messageBox = document.createElement("div");
        messageBox.className = "special-message";
        messageBox.innerHTML = `
            <div class="message-content">
                <p>${message}</p>
                <button class="close-btn">Close</button>
            </div>
        `;
        document.body.appendChild(messageBox);

        const closeBtn = messageBox.querySelector(".close-btn");
        closeBtn.addEventListener("click", () => {
            messageBox.remove();
        });

        if (effects) {
            createBirthdayEffects();
        }
    };

    const createBirthdayEffects = () => {
        const createConfetti = () => {
            const confetti = document.createElement("div");
            confetti.className = "confetti";
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 5000);
        };

        const createCake = () => {
            const cake = document.createElement("div");
            cake.className = "cake";
            cake.innerHTML = `<div class='candle'></div><div class='layers'></div>`;
            document.body.appendChild(cake);
        };

        createCake();
        for (let i = 0; i < 100; i++) {
            createConfetti();
        }
    };

    const checkSpecialDay = (date, month) => {
        if (month === 8 && date === 12) {
            displayMessage("Chúc mừng sinh nhật Cục Dàng của anh", true);
        } else if (month === 10 && date === 27) {
            displayMessage("Chúc mừng sinh nhật Anh iu", true);
        }
    };

    // Test với ngày cụ thể
    function testBirthday() {
        const date = 12; // Ví dụ: ngày 12
        const month = 8; // Ví dụ: tháng 8
        checkSpecialDay(date, month);
    }

    testBirthday(); // Test sinh nhật
});
