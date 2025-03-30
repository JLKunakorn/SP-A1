let targetTexts = ['sons', 'daughters','sisters','brothers','fathers','mothers','families','children'];

// ตัวแปรเพื่อเก็บจำนวนที่พิมพ์ไปแล้ว
let typedCount = 0;

// เลือกทุก <div> ที่มีคลาส 'item'
document.querySelectorAll('.item').forEach((item, index) => {
    // หยุดหลังจากพิมพ์ครบ 3 ช่อง
    if (typedCount >= targetTexts.length) return;

    // ค้นหา element ที่มี class 'answer-container form-inline form-group-sm'
    let answerContainer = item.querySelector('.answer-container.form-inline.form-group-sm');
    
    // หากพบช่องให้พิมพ์
    if (answerContainer) {
        // พิมพ์ข้อความจาก targetTexts ตามลำดับที่กำหนด
        let inputElement = answerContainer.querySelector('input');
        
        if (inputElement) {
            inputElement.value = targetTexts[typedCount];  // พิมพ์ข้อความที่กำหนด
            console.log(`✅ พิมพ์ข้อความ "${targetTexts[typedCount]}" ใน Item ${index + 1}`);
            typedCount++;  // เพิ่มจำนวนที่พิมพ์ไปแล้ว
        }
    } else {
        console.log(`❌ ไม่พบช่องให้พิมพ์ใน Item ${index + 1}`);
    }
});

// หน่วงเวลา 0.5 วินาทีแล้วคลิกปุ่ม correct
setTimeout(function() {
    let correctButton = document.querySelector('.action-exercise-button.correct');
    if (correctButton) {
        correctButton.click();  // คลิกปุ่ม correct
        console.log("✅ คลิกปุ่ม Correct แล้ว");

        // หน่วงเวลา 1.5 วินาทีแล้วคลิกปุ่ม Next
        setTimeout(() => {
            let nextButton = document.querySelector('.btn.btn-primary.action-exercise-button.next.nxt-exercise');
            if (nextButton) {
                nextButton.click();  // คลิกปุ่ม next
                console.log("✅ คลิกปุ่ม Next แล้ว");
            } else {
                console.log("❌ ไม่พบปุ่ม Next!");
            }
        }, 1500); // หน่วงเวลา 1.5 วินาทีหลังจากคลิก Correct
    } else {
        console.log("❌ ไม่พบปุ่ม Correct!");
    }
}, 500);  // หน่วงเวลา 0.5 วินาทีหลังจากพิมพ์ข้อความทั้งหมด
