/* var target = $('#navbar-container');
var targetHeight = target.outerHeight();

$(document).scroll(function(e){
    var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
    if(scrollPercent >= 0){
        target.css('background-color', 'rgba(0, 0, 0, 0.5)');
    }
    else  target.css('background-color', 'rgba(0, 0, 0, 1)');
}); //이 친구는 왜 작동을 안 할까? 공부하고 뜯어보기 */

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


/*tab menu*/
/* const btn =".main-tab-button>button";

$(btn).click(function(){
    let index = $(this).index();
    $('.main-tab-container>div').hide();
    $('.main-tab-container>div').eq(index).show();
}
)

/*btn color toggle*/
/*$('SELECTOR').css('속성','값');*/
// document.getElementById("id"); = 특정 id값을 가진 요소를 호출
// let btn2 = 'div>button#btn2' 라고 지정시 ''안의 값을 문자열로 인식, 명확한 id값을 불러올 수 없음
// 특정 id값을 가진 요소, 특정 id값 요소의 value를 불러오고 싶다면 document.getElementById("id").value;를 사용
// DOM 접근 메소드에 대해 더 공부하자!

/* let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

$(btn1).click(function(){
    if(btn1.value === "btn-on"){
        $(btn1).css({"backgroundColor":"white","color":"black"});
        $(btn1).attr("value","btn-off");
    }
    else{
        $(btn1).css({"backgroundColor":"black","color":"white"});
        $(btn1).attr("value","btn-on");
    }
})
$(btn2).click(function(){
    if(btn2.value === "btn-on"){
        $(btn2).css({"backgroundColor":"white","color":"black"});
        $(btn2).attr("value","btn-off");
    }
    else{
        $(btn2).css({"backgroundColor":"black","color":"white"});
        $(btn2).attr("value","btn-on");
    }
}) 
*/