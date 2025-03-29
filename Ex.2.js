// ตั้งค่าคำตอบสำหรับแต่ละข้อ (หมายเลขตัวเลือก: 1 = ตัวเลือกแรก, 2 = ตัวเลือกที่สอง, ...)
let choices = [1,2,1,1,2,2];  // ตัวอย่าง: ข้อที่ 1 เลือกตัวเลือกที่ 1, ข้อที่ 2 เลือกตัวเลือกที่ 1, ข้อที่ 3 เลือกตัวเลือกที่ 2

// คลิกตัวเลือกตามที่กำหนดในแต่ละข้อ
document.querySelectorAll('.item.choice-item').forEach((item, index) => {
  if (index >= choices.length) return;  // ทำงานแค่ตามจำนวนใน choices

  // เลือกตัวเลือกที่ตรงกับหมายเลขที่กำหนด (ลด index ลง 1 เพราะ index เริ่มที่ 0)
  let option = item.querySelectorAll('.choice-option')[choices[index] - 1];
  
  if (option) {
    option.querySelector('input[type="radio"]').click();
    console.log(`คลิกที่ Item ${index + 1}: ตัวเลือกที่ ${choices[index]}`);
  }
});

// หน่วงเวลา 0.5 วินาทีแล้วคลิกปุ่ม correct
setTimeout(function() {
  let correctButton = document.querySelector('.btn.btn-primary.action-exercise-button.correct');
  if (correctButton) {
    correctButton.click();
    console.log("คลิกปุ่ม correct แล้ว");

    // เช็คปุ่ม next ทุก 0.25 วินาที เป็นระยะเวลา 3 วินาที
    let timeLimit = 3000; // 3 วินาที
    let elapsedTime = 0;
    let checkInterval = setInterval(function() {
      let nextButton = document.querySelector('.btn.btn-primary.action-exercise-button.next.nxt-exercise');
      
      // ตรวจสอบว่า nextButton มีอยู่และแสดงผล (ไม่ถูกซ่อน)
      if (nextButton && nextButton.offsetHeight > 0 && nextButton.offsetWidth > 0) {
        clearInterval(checkInterval); // หยุดเช็คเมื่อเจอปุ่ม next
        console.log("พบปุ่ม next");
        
        // หน่วงเวลา 0.8 วินาทีแล้วคลิกปุ่ม next
        setTimeout(function() {
          nextButton.click();
          console.log("คลิกปุ่ม next แล้ว");
        }, 800);
      }
      
      elapsedTime += 250; // เช็คทุก 0.25 วินาที
      if (elapsedTime >= timeLimit) {
        clearInterval(checkInterval);
        console.log("ไม่พบปุ่ม next ใน 3 วินาที");
      }
    }, 250);
  } else {
    console.log("ไม่พบปุ่ม correct");
  }
}, 500);
