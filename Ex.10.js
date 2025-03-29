// ข้อความที่ต้องการเช็คตามลำดับที่กำหนด
let targetTexts = [
  "Can I help you?",
  "How much is a chocolate bar?",
  "I'd like a bottle of water, please.",
  "Anything else?"
];

// เลือกทุก <div> ที่มีคลาส 'item'
let itemElements = document.querySelectorAll('.item');

// ตัวแปรเพื่อเก็บสถานะว่าไม่มีข้อใดตรง
let noMatchFound = true;

// ลูปผ่านแต่ละ <div> ที่มีคลาส 'item'
itemElements.forEach(function(item, index) {
  // เลือก <div> ที่มีคลาส 'scrambled-cell-container' ภายในแต่ละ 'item'
  let scrambledCellContainer = item.querySelector('.scrambled-cell-container');

  // หากพบ <div> ที่มีคลาส 'scrambled-cell-container' ให้ดึงข้อความจากมัน
  if (scrambledCellContainer) {
    let textContent = scrambledCellContainer.innerText.trim(); // ดึงข้อความจาก <div> ที่มีคลาส 'scrambled-cell-container'

    // ตรวจสอบว่าข้อความตรงกับที่ต้องการหรือไม่
    if (targetTexts[index] === textContent) {
      console.log(`Item ${index + 1}: ตรงกับข้อความที่ต้องการ: "${textContent}"`);
      noMatchFound = false; // หากมีข้อใดตรง, เปลี่ยนสถานะเป็น false
    } else {
      console.log(`Item ${index + 1}: ไม่ตรงกับข้อความที่ต้องการ`);
      // หากไม่ตรง, ลบคลาส 'item' ออกจาก <div> นั้น
      item.classList.remove('item');
    }
  } else {
    console.log(`Item ${index + 1}: ไม่พบข้อความใน scrambled-cell-container`);
    // หากไม่พบ <div> ที่ต้องการ, ลบคลาส 'item'
    item.classList.remove('item');
  }
});

// ถ้าทุกข้อไม่ตรง, หน่วงเวลา 0.5 วินาทีแล้วรีเฟรชหน้าเว็บ
if (noMatchFound) {
  setTimeout(function() {
    location.reload(); // รีเฟรชหน้าเว็บ
  }, 500); // หน่วงเวลา 0.5 วินาที
} else {
  // หน่วงเวลา 0.5 วินาที หลังจากลบคลาส 'item' แล้ว
  setTimeout(function() {
    // เช็คปุ่ม 'correct' ทุก 0.5 วินาที เป็นระยะเวลา 3 วินาที
    let timeLimit = 3000; // 3 วินาที
    let elapsedTime = 0;
    let checkInterval = setInterval(function() {
      let correctButton = document.querySelector('.btn.btn-primary.action-exercise-button.correct');
      
      if (correctButton) {
        console.log("พบปุ่ม correct");
        clearInterval(checkInterval); // หยุดเช็คเมื่อเจอปุ่ม
        correctButton.click(); // คลิกปุ่ม correct
        console.log("คลิกปุ่ม correct แล้ว");

        // เช็คปุ่ม 'next' ทุก 0.5 วินาที เป็นระยะเวลา 3 วินาที
        let nextTimeLimit = 3000; // 3 วินาที
        let nextElapsedTime = 0;
        let nextCheckInterval = setInterval(function() {
          let nextButton = document.querySelector('.btn.btn-primary.action-exercise-button.next.nxt-exercise');
          
          if (nextButton) {
            console.log("พบปุ่ม next");
            clearInterval(nextCheckInterval); // หยุดเช็คเมื่อเจอปุ่ม
            setTimeout(function() {
              nextButton.click(); // คลิกปุ่ม next
              console.log("คลิกปุ่ม next แล้ว");
            }, 1500); // หน่วงเวลา 1.5 วินาทีแล้วคลิกปุ่ม
          }

          nextElapsedTime += 500;
          if (nextElapsedTime >= nextTimeLimit) {
            clearInterval(nextCheckInterval); // หยุดเช็คหลังจาก 3 วินาที
            console.log("ไม่พบปุ่ม next ใน 3 วินาที");
          }
        }, 500); // เช็คทุก 0.5 วินาที
      }

      elapsedTime += 500;
      if (elapsedTime >= timeLimit) {
        clearInterval(checkInterval); // หยุดเช็คหลังจาก 3 วินาที
        console.log("ไม่พบปุ่ม correct ใน 3 วินาที");
      }
    }, 500); // เช็คทุก 0.5 วินาที
  }, 500); // หน่วงเวลา 0.5 วินาที
}
