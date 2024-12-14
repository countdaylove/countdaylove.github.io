// test.js

// Test Case cho Giáng Sinh (25/12)
function testChristmas() {
    const testDate = new Date('2025-12-25');
    document.date = testDate;

    // Kiểm tra thông điệp Giáng Sinh
    const christmasMessage = document.getElementById('christmas-message');
    console.assert(christmasMessage.style.display === 'block', 'Thông điệp Giáng Sinh không hiển thị');
}
function testNewYear() {
    const testDate = new Date('2025-1-1');
    document.date = testDate;

    // Kiểm tra thông điệp Giáng Sinh
    const newyearMessage = document.getElementById('christmas-message');
    console.assert(newyearMessage.style.display === 'block', 'Thông điệp Năm Mới không hiển thị');
}

// Test Case cho Sinh Nhật người yêu (12/08)
function testBirthdayem() {
    const testDate = new Date('2025-08-12');
    document.date = testDate;

    // Kiểm tra thông điệp sinh nhật
    const birthdayMessage = document.querySelector(".special-message p");
    console.assert(birthdayMessage.textContent.includes('Chúc mừng sinh nhật'), 'Thông điệp sinh nhật em không hiển thị');
}
function testBirthdayanh() {
    const testDate = new Date('2025-10-27');
    document.date = testDate;

    // Kiểm tra thông điệp sinh nhật
    const birthdayMessage = document.querySelector(".special-message p");
    console.assert(birthdayMessage.textContent.includes('Chúc mừng sinh nhật'), 'Thông điệp sinh nhật anh không hiển thị');
}

// Test Case cho Kỷ Niệm (12/07)
function testAnniversary() {
    const testDate = new Date('2025-07-12');
    document.date = testDate;

    // Kiểm tra thông điệp kỷ niệm
    const anniversaryMessage = document.querySelector(".special-message p");
    console.assert(anniversaryMessage.textContent.includes('ngày kỉ niệm'), 'Thông điệp kỷ niệm không hiển thị');
}

// Gọi các test function để chạy thử
testChristmas();
testNewYear();
testBirthdayanh();
testBirthdayem();
testAnniversary();
