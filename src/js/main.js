$(".cross").click(function () {
    event.preventDefault()
    console.log("hello");
    $("nav, .cross,header,main").toggleClass("active");
        // if ($(".cross").hasClass(active)){
        //     $("header,main").removeClass("mainUp")
        // }
});
 $(".arrowDown").click(function () {
     console.log("hello");
     $("header").toggleClass("mainUp");
     $("main").toggleClass("mainUp");
        
 });
 $(".arrowTop").click(function () {
    console.log("hello");
    $("header").toggleClass("mainUp");
    $("main").toggleClass("mainUp");
       
});
$(".arrowRight").click(function () {
    console.log("hello");
    $("header").toggleClass("mainRight");
    $(".aboutMe").toggleClass("active");
       
});

$(".arrowAboutMe").click(function () {
    console.log("hello");
    $("header").toggleClass("mainRight");
    $(".aboutMe").toggleClass("active");
       
});


  $(".slider").click(function () {
    console.log("hello");
    $(".popup").toggleClass("show");
        
});

$(".popup").click(function () {
    console.log("hello");
    $(".popup").toggleClass("show");
        
});

$(".burger").click(function () {
    console.log("hello");
    $(".burger").toggleClass("activeBgr");
    $(".navMob").toggleClass("activeNavMob"); 
});

$("a").click(function () {
    console.log("hello");
    $(".burger").toggleClass("activeBgr");
    $(".navMob").toggleClass("activeNavMob"); 
    if($("nav").hasClass("activeNavMob")){
        $("nav").removeClass("activeNavMob") ;
    }
});


$(".contactMob a").click(function () {
    console.log("hello");
    $("nav").toggleClass("activeNavMob");
     
    
});


