let rightbox = document.getElementById('right');
        let leftbox = document.getElementById('left');

        let lists = document.getElementsByClassName("list");

        let selected = null;

        for (const list of lists) {
            list.addEventListener('dragstart', (event) => {
                selected = event.target;
            });
        }

        function addDragAndDropEvents(box) {
            box.addEventListener('dragover', (event) => {
                event.preventDefault();
            });

            box.addEventListener('drop', (event) => {
                if (selected) {
                    box.appendChild(selected);
                    selected = null; 
                }
            });
        }

        addDragAndDropEvents(leftbox);
        addDragAndDropEvents(rightbox);

//image slider

let slides = document.querySelectorAll('.slide img');
let slideIndex = 0;
let intervalId = null;
initializeSlider();
function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add('displaySlide');
        intervalId = setInterval(nextSlide,5000);
    }
}

function showSlide(){
    if(slideIndex >= slides.length){
        slideIndex = 0;
    }
    if(slideIndex < 0){
        slideIndex = slides.length-1;
    }
    slides.forEach(slide =>{
       slide.classList.remove('displaySlide');
    })
    slides[slideIndex].classList.add("displaySlide");


}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

document.getElementById('prev').addEventListener('click',prevSlide);
document.getElementById('next').addEventListener('click',nextSlide);

//spin wheel

document.querySelector('.spinBtn').addEventListener('click', spinWheel);

function spinWheel() {
    const wheel = document.querySelector('.wheel');
    const spinBtn = document.querySelector('.spinBtn');
    const degree = Math.floor(5000 + Math.random() * 5000); // Spin for a random amount of degrees

    // Disable the button while spinning
    spinBtn.style.pointerEvents = 'none';

    wheel.style.transition = 'transform 5s ease-out';
    wheel.style.transform = `rotate(${degree}deg)`;
    spinBtn.style.pointerEvents = 'auto';
}


