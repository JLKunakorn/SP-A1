// หาค่าของ data-scrambled-cell-id ที่น้อยสุด
const scrambledCells = document.querySelectorAll('.scrambled-cell-container');
let minId = Infinity;
let minCell = null;

scrambledCells.forEach(cell => {
    const cellId = parseInt(cell.querySelector('.scrambled-cell').getAttribute('data-scrambled-cell-id').replace('scrambled-cell-', ''));
    if (cellId < minId) {
        minId = cellId;
        minCell = cell;
    }
});

// หาตำแหน่งของ .text ที่อยู่ภายใน .item ตัวแรกสุด
const firstItem = document.querySelector('.exercise-items .item');
const textElement = firstItem.querySelector('.text');

// ย้าย minCell ไปอยู่ข้างบน .text
firstItem.insertBefore(minCell, textElement);

// ลบ scrambled-cell-container อื่น ๆ ที่ไม่ใช่ minCell
scrambledCells.forEach(cell => {
    if (cell !== minCell) {
        cell.remove();
    }
});
