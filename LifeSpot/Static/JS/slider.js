var currentSlide = 0; // начинаем с первого
var slideContainer = document.getElementById("slide-container"); // контейнер со всеми слайдами
var slides = slideContainer.getElementsByTagName("img"); // список со слайдами
var countSlides = slideContainer.childElementCount; // общее количество слайдов

function prevSlide(){ // обработчик кнопки для предыдущего слайда
    slides[currentSlide].style["display"] = 'none'; // скрываем текущий слайд
    currentSlide = currentSlide <= 0 // проверка перехода границы
        ? countSlides - 1  // если перешли за границу диапазона, ставим последний слайд
        : currentSlide - 1; // иначе перелистываем на предыдущий слайд
    slides[currentSlide].style["display"] = ''; // отобаржаем слайд
    console.log("prev", currentSlide + 1, "of", countSlides);
}

function nextSlide(){ // обработчик кнопки для следующего слайда
    slides[currentSlide].style["display"] = 'none'; // скрываем текущий слайд
    currentSlide = currentSlide >= countSlides - 1 // проверка перехода границы
        ? 0 // если перешли за границу диапазона, ставим первый из списка слайд
        : currentSlide + 1; // иначе перелистываем на следующий слайд
    slides[currentSlide].style["display"] = ''; // отображаем слайд
    console.log("next", currentSlide + 1, "of", countSlides);
}