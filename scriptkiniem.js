document.addEventListener("DOMContentLoaded", function () {
    const rootTime = document.querySelector("time");
    const anniElement = document.querySelector("anni");
    const dateElement = document.querySelector("date");
    const yearElement = document.querySelector("year");
    const monthElement = document.querySelector("month");

    // Hàm nhận tham số ngày tháng để kiểm tra
    function updateCountdown(startDate) {
        const now = new Date();
        now.setHours(now.getHours() + 7); // Chuyển về múi giờ GMT+7

        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();
        let days = now.getDate() - startDate.getDate();

        if (days < 0) {
            months -= 1;
            const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0); // Lấy số ngày của tháng trước
            days += previousMonth.getDate();
        }

        if (months < 0) {
            years -= 1;
            months += 12;
        }

        // Cập nhật DOM
        anniElement.textContent = formatDate(startDate);
        yearElement.textContent = years + " NĂM";
        monthElement.textContent = months + " THÁNG";
        dateElement.textContent = days + " NGÀY";

        // Cập nhật thiệp với ngày kỉ niệm
        const anniversaryMessage = `Hôm nay là ngày kỉ niệm ${years} năm, ${months} tháng chúng ta quen nhau. Anh chúc bé luôn luôn xinh đẹp và chúng ta luôn hạnh phúc bên nhau nhé.`;
        displayMessage(anniversaryMessage);
    }

    function formatDate(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    }

    // Display message with dynamic anniversary update
    const displayMessage = (message) => {
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
    };

    // Hàm chạy thử với ngày cụ thể
    function testAnniversary() {
        const startDate = new Date("2022-07-12T00:00:00");
        updateCountdown(startDate);
    }

    testAnniversary(); // Test ngay với ngày cụ thể
});
