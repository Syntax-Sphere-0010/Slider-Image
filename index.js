let nextDon = document.getElementById('next');
let prevDon = document.getElementById('prev');
let carouselDon = document.querySelector('.slider');
let listItemDon = document.querySelector('.slider .list');
let thumbnailDon = document.querySelector('.slider .tumbnails');

nextDon.onclick = () => {
    showSlider('next');
}
prevDon.onclick = () => {
    showSlider('prev');

}
let timeRunning = 3500;
let timeAutoNext = 7000;
let runTimeOut;
let  runAutoRun = setTimeout(() => {
       nextDon.click();
    }, timeAutoNext);


function showSlider(type){
    let itemSlider = document.querySelectorAll('.slider .list .items');
    let itemThunmbnail = document.querySelectorAll('.slider .tumbnails .items');

    if(type === 'next'){
        listItemDon.appendChild(itemSlider[0]);
        thumbnailDon.appendChild(itemThunmbnail[0]);
        carouselDon.classList.add('next');

        
    }else{
        let poisitionLastitem = itemSlider.length - 1;
        listItemDon.prepend(itemSlider[poisitionLastitem]);
        thumbnailDon.prepend(itemThunmbnail[poisitionLastitem]);
        carouselDon.classList.add('prev');

    }


    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => { 
        carouselDon.classList.remove('next');
        carouselDon.classList.remove('prev');

    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
       nextDon.click();
    }, timeAutoNext);

}
