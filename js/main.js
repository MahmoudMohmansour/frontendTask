$(document).ready(function () {
    //show and hide navbar content
    $(".navbar-toggler").click(function () {
        $(".shopping-card").removeClass("shoppingtoggle")
        $(".contact-home").animate({"right":"-100%"},500)
        $(this).toggleClass("close");
        $(".navbar-collapse").toggleClass(" show");
         // $(".collapse navbar-collapse").click(function(){
    //     debugger;
    //     $(this).addClass(" show")
    // }) 
    })
    //search open and close in navbar& change the width of input type search
    $("#searchIcon").click(function(){
        $(".shopping-card").removeClass("shoppingtoggle")
        $(".home-search").css({ "opacity":"1", "visibility":"visible"})
        $(".home-search form").animate({"width" : "70%"},500)
    })
    $("#searchClose").click(function(){
        $(".home-search").css({ "opacity":"0", "visibility":"hidden"})
        $(".home-search form").animate({"width" : "30%"},500)
    })

     //card icon increase and decrese amount
     //I know a variable that holds the value inside it ID of counter one
     var textOne=$("#textCounterOne").text()
     $("#btnPlusOne").click(function(){
        $("#textCounterOne").text(++textOne)
     })
     $("#btnMainsOne").click(function(){
        if(textOne !=1){
            $("#textCounterOne").text(--textOne)
        } 
     })
          //I know a variable that holds the value inside it ID of counter tow
    var textOne=$("#textCounterTwo").text()
        $("#btnPlusTwo").click(function(){
            $("#textCounterTwo").text(++textOne)
    }) 
    $("#btnMainsTwo").click(function(){
            if(textOne !=1){
                $("#textCounterTwo").text(--textOne)
            } 
    }) 
    //show and hide shopping card
    $("#shopping-toggle").click(function(){
        $(".shopping-card").toggleClass("shoppingtoggle")
    })
    //show and hide contact icon in navbar
    $("#contactIcon").click(function(){
        $(".contact-home").animate({"right":"0"},500)
        $(".contact-close").addClass("closeicon")
        $(".shopping-card").removeClass("shoppingtoggle")

    })
    $(".contact-close").click(function(){
        $(".contact-home").animate({"right":"-100%"},500)
        $(".contact-close").removeClass("closeicon");
    })
    //show product in small screen
    $("#btntogllerInSmallScreen").click(function(){
        $(".product-list").toggleClass("navshow")
    })

    //improve scroll in page on navbar
    $(window).scroll(function(){
        let wScroll=$(window).scrollTop()
        if(wScroll > 200){
            $("nav").addClass("navScroll")
            $("#scrollTop").fadeIn(1200)
            $(".shopping-card").removeClass("shoppingtoggle")
            $(".home-search").css({ "opacity":"0", "visibility":"hidden"})
            
        }else{
            $("nav").removeClass("navScroll")
            $("#scrollTop").fadeOut(1200)
        }
    })
    $("#scrollTop").click(function(){
        $("html").animate({scrollTop:"0"},1000)
    })
    $("#loading").fadeOut(5000, function(){
        $("html").css({"overflow-y":"auto"})
    })









    //wow library javascript
    new WOW().init();

    //owl library javascript
    $('#client .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })
    //owl library javascript for our blog section
    $('#our-blog .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

})

//pop-up window
// const modalExit = document.querySelector('.modal-offers-container');
// const html = document.querySelector('html');

// const closeBtn = document.getElementById('dismiss');


// window.onload(setTimeout((html.addEventListener('mouseout', e=>{
//     if(!e.toElement && !e.relatedTarget){
//         modalExit.classList.add('modal-bg');
//          modalExit.style.display = 'block';
//     }
// })) ,300));

// closeBtn.addEventListener('click', ()=>{
//     modalExit.style.display = 'none';
// })
window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});
document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});