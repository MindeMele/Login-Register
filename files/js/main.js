var moveLog = document.getElementById('login');
var moveReg = document.getElementById('register');
var btnLog = document.getElementById('login-btn');
var btnReg = document.getElementById('register-btn');

btnReg.onclick = function () {
    moveReg.style.transform = "translateY(-700px)";
    moveLog.style.transform = "translateY(0px)";
};

btnLog.onclick = function () {
    moveReg.style.transform = "translateY(0px)";
    moveLog.style.transform = "translateY(-700px)";
}; 