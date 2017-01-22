function vernut(){
    window.location = 'victorina.html'
}
function yes(){
    document.getElementById('1q').innerHTML = "<div class='container'>Верно</div><button type='button' class='btn btn-primary btn-lg' onclick ='vernut()'>Вернуться</button>";
}
function not(){
    document.getElementById('1q').innerHTML = "<div class='container'>Неверно</div><button type='button' class='btn btn-primary btn-lg' onclick ='vernut()'>Вернуться</button>";
}
