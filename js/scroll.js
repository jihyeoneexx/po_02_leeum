/*nav var scrolling*/
$(window).scroll(function () {
    if ($(window).scrollTop() >= 800) {
    $('nav').css('background-color','rgba(0, 0, 0, 1)');
    } else {
    $('nav').css('background-color','rgba(0, 0, 0, 0.0)');
    }
    });

/*nav hover menu scrolling*/
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 800) {
        $('div.dropdown-contents').css('background-color','rgba(0, 0, 0, 0.8)');
        $('div.dropdown-contents a').css('color','white');
        $('div.dropdown-contents a').css('font-weight','400');
        } else {
        $('div.dropdown-contents').css('background-color','rgba(255, 255, 255, 0.2)');
        $('div.dropdown-contents a').css('color','black');
        $('div.dropdown-contents a').css('font-weight','600');
        }
        });

/*navbar toggle Btn action*/
        const toggleBtn = document.querySelector('.navbar-toggleBtn'); /*변수 선언*/
        const mainMenu = document.querySelector('.main_menu');
        const loginMenu = document.querySelector('.login_menu');

        toggleBtn.addEventListener("click", ()=> {
            mainMenu.classList.toggle("active");
            loginMenu.classList.toggle("active");
            /*mainMenu와 loginMenu의 클래스 리스트 중, active 요소를 toggling,
            active속성이 없다면 active를 추가, 속성이 있다면 active를 제거 */
        }); 
        /*toggleBtn에 addEventListener API를 사용하여 click이 발생할 때마다 해당 함수를 호출해줘!*/
