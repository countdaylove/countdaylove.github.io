window.onload = function () {
    const rootTime = document.querySelector("time");
    const anniElement = document.querySelector("anni");
    const dateElement = document.querySelector("date");
    const yearElement = document.querySelector("year");
    const monthElement = document.querySelector("month");

    // Ngày cố định bắt đầu
    const startDate = new Date("2022-07-12T00:00:00");

    function updateCountdown() {
        const now = new Date();
        now.setHours(now.getHours() + 7); // Chuyển về múi giờ GMT+7

        // Tính toán khoảng cách
        let totalMilliseconds = now - startDate;

        // Tính số ngày, tháng, năm chính xác
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
    }

    function formatDate(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1; // Tháng bắt đầu từ 0
        const year = date.getFullYear();
        return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    }

    function updateClock() {
        const now = new Date();
        now.setHours(now.getHours() + 7); // Chuyển về múi giờ GMT+7
        const hrs = now.getHours().toString().padStart(2, '0');
        const mins = now.getMinutes().toString().padStart(2, '0');
        const secs = now.getSeconds().toString().padStart(2, '0');

        rootTime.textContent = `${hrs}:${mins}:${secs}`;
    }

    // Cập nhật lần đầu
    updateCountdown();
    updateClock();

    // Thiết lập timer
    setInterval(updateClock, 1000); // Đồng hồ thời gian thực
    setInterval(updateCountdown, 60000); // Cập nhật khoảng cách thời gian mỗi phút
};
