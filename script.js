const fontsData = [
    {
        name: "21063.otf",
        textPreview: "Aa"
    }
];

let currentIndex = 0;

const fontPreview = document.getElementById('fontPreview');
const fontName = document.getElementById('fontName');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const applyBtn = document.getElementById('applyBtn');

function updateSlider(index) {
    const currentFont = fontsData[index];
    fontName.textContent = currentFont.name;
    fontPreview.textContent = currentFont.textPreview;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? fontsData.length - 1 : currentIndex - 1;
    updateSlider(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === fontsData.length - 1) ? 0 : currentIndex + 1;
    updateSlider(currentIndex);
});

applyBtn.addEventListener('click', () => {
    console.log(`Выбран шрифт: ${fontsData[currentIndex].name}`);
});

updateSlider(currentIndex);