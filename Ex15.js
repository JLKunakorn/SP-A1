let targetChoices = [
    [1,4,5]
];

function selectChoices() {
    let items = document.querySelectorAll('.exercise-items .item.choice-item');

    items.forEach((item, index) => {
        let choiceOptions = item.querySelectorAll('.choice-option');

        if (choiceOptions.length >= targetChoices[index].length) {
            // เลือกตัวเลือกที่กำหนดใน targetChoices
            targetChoices[index].forEach(choiceIndex => {
                if (choiceOptions[choiceIndex - 1]) {
                    choiceOptions[choiceIndex - 1].click();
                    console.log(`✅ ข้อที่ ${index + 1}: คลิกตัวเลือก ${choiceIndex}`);
                }
            });

            // หลังจากคลิกทุกตัวเลือกเสร็จแล้ว, หน่วงเวลา 0.8 วินาทีแล้วคลิก Correct
            setTimeout(() => {
                let correctButton = document.querySelector('.action-exercise-button.correct');
                if (correctButton) {
                    correctButton.click();
                    console.log("✅ กดปุ่ม Correct");

                    // หน่วงเวลา 1.5 วินาที แล้วคลิก Next
                    setTimeout(() => {
                        let nextButton = document.querySelector('.btn.btn-primary.action-exercise-button.next.nxt-exercise');
                        if (nextButton) {
                            nextButton.click();
                            console.log("✅ กดปุ่ม Next");
                        } else {
                            console.log("❌ ไม่พบปุ่ม Next");
                        }
                    }, 1500);  // หน่วงเวลา 1.5 วินาที
                } else {
                    console.log("❌ ไม่พบปุ่ม Correct");
                }
            }, 800);  // หน่วงเวลา 0.8 วินาทีหลังจากการคลิกตัวเลือก
        } else {
            console.log(`❌ ข้อที่ ${index + 1}: ตัวเลือกไม่พอ.`);
        }
    });
}

selectChoices();
