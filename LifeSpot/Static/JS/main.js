window.sessionStorage = {};
handleSession();

function logSession() {
    console.log('Начало сессии: ' + window.sessionStorage.getItem("startDate"))
    console.log('Данные клиента: ' + window.sessionStorage.getItem("userAgent"))
    console.log('Возраст пользователя: ' + window.sessionStorage.getItem("userAge"))
}

function checkUser (isFirstVisit) {
    if (window.sessionStorage.getItem("userAge") >= 18) {
        if (isFirstVisit)
            alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    } else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
};

function handleSession() {
    if (window.sessionStorage.getItem("startDate") == null) 
        window.sessionStorage.setItem("startDate", new Date().toLocaleString())
    
    if (window.sessionStorage.getItem("userAgent") == null) 
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent)
    
    if (window.sessionStorage.getItem("userAge") == null) {
        let input = prompt("Пожалуйста, введите ваш возраст");
        sessionStorage.setItem("userAge", input)
        checkUser(true);
    } else {
        checkUser(false);
    }
    logSession();
}

function filterContent() {
    let elements = document.getElementsByClassName('video-container');
    var text = document.getElementById('searchInput').value.toLowerCase();
    for (var i = 0; i < elements.length; i++) {
        let videoText = elements[i].querySelector(".video-title").innerText.toLowerCase();
        elements[i].style.display = videoText.includes(text)
            ? 'inline-block'
            : 'none';
    }
}

function clearSession(){
    window.sessionStorage.clear();
}
