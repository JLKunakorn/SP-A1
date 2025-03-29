// ลำดับคำตอบที่ต้องการให้คลิก (1 = True, 0 = False)
let choices = [1, 1, 0,];

// เลือกทุก <div> ที่มีคลาส 'item choice-item' และหยุดหลังจากคลิก 3 ข้อ
document.querySelectorAll('.item.choice-item').forEach((item, index) => {
  if (index >= choices.length) return;  // หยุดหลังจากคลิกครบ 3 ข้อ

  // หาตัวเลือกที่ตรงกับคำตอบ (1 = true, 0 = false)
  let choiceOption = Array.from(item.querySelectorAll('.choice-option .text'))
                           .find(option => option.textContent.trim().toLowerCase() === (choices[index] === 1 ? 'true' : 'false'));

  // คลิกตัวเลือกที่ตรงกับคำตอบ
  if (choiceOption) {
    choiceOption.closest('label').querySelector('input[type="radio"]').click();
  }
});

// หน่วงเวลา 0.5 วินาทีแล้วคลิกปุ่ม correct
setTimeout(function() {
  let correctButton = document.querySelector('.btn.btn-primary.action-exercise-button.correct');
  if (correctButton) {
    correctButton.click(); // คลิกปุ่ม correct
    console.log("คลิกปุ่ม correct แล้ว");

    // เช็คปุ่ม next ทุก 0.5 วินาที เป็นระยะเวลา 3 วินาที
    let timeLimit = 3000; // 3 วินาที
    let elapsedTime = 0;
    let checkInterval = setInterval(function() {
      let nextButton = document.querySelector('.btn.btn-primary.action-exercise-button.next.nxt-exercise');
      
      // ตรวจสอบว่า nextButton มีอยู่และแสดงผลอยู่
      if (nextButton && nextButton.offsetHeight > 0 && nextButton.offsetWidth > 0) {
        clearInterval(checkInterval); // หยุดเช็คเมื่อเจอปุ่ม next
        console.log("พบปุ่ม next");

        // หน่วงเวลา 0.8 วินาทีแล้วคลิกปุ่ม next
        setTimeout(function() {
          nextButton.click(); // คลิกปุ่ม next
          console.log("คลิกปุ่ม next แล้ว");
        }, 800); // หน่วงเวลา 0.8 วินาที
      }

      elapsedTime += 500; // เช็คทุก 0.5 วินาที
      if (elapsedTime >= timeLimit) {
        clearInterval(checkInterval); // หยุดเช็คหลังจาก 3 วินาที
        console.log("ไม่พบปุ่ม next ใน 3 วินาที");
      }
    }, 500); // เช็คทุก 0.5 วินาที
  }
}, 500); // หน่วงเวลา 0.5 วินาที
