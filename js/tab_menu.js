const btnAt = document.querySelector("#btn1");
const btnMd = document.querySelector("#btn2");
const conAt = document.querySelector(".conAt");
const conMd = document.querySelector(".conMd");

conMd.classList.add("hidden");

function handleShowToggle(hiddenCon,showCon){
    hiddenCon.classList.add("hidden");
    hiddenCon.classList.remove("show");
    showCon.classList.remove("hidden");
    showCon.classList.add("show");
}

function setBtnColor(onBtn,offBtn){
    onBtn.style.backgroundColor = "black";
    onBtn.style.color = "white";
    offBtn.style.backgroundColor = "white";
    offBtn.style.color = "black";
}

function showConAt(event){
    setBtnColor(btnAt,btnMd);
    handleShowToggle(conMd,conAt);
}

function showConMd(event){
    setBtnColor(btnMd,btnAt);
    handleShowToggle(conAt,conMd);
}

btnAt.addEventListener("click", showConAt);
btnMd.addEventListener("click", showConMd);