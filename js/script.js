let scrollContainer = document.querySelector('.gallery');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');

scrollContainer.addEventListener('scroll', () => {
    scrollContainer.style.scrollBehavior = 'auto'; 
});

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = 'smooth'; 
});

nextBtn.addEventListener('click', () => {
    scrollContainer.scrollLeft += 900;
    scrollContainer.style.scrollBehavior = 'smooth'; 
});

backBtn.addEventListener('click', () => {
    scrollContainer.scrollLeft -= 900;
});