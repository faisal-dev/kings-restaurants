console.log("'Allo 'Allo!");var king={init:function(){{var a=$("#welcome"),b=$("#loading"),c=($(".cover"),$(".btn-menu")),d=$(".side-menu"),e=$(".content"),f=$(".icon");$(".item")}a.on("click",function(c){c.preventDefault(),$(this).addClass("bounce-out"),setTimeout(function(){a.addClass("hidden"),b.removeClass("hidden").addClass("bounce-in")},500),setTimeout(function(){window.location.replace("home.html")},2e3)}),window.innerWidth>=768&&d.toggleClass("on"),c.on("click",function(a){a.preventDefault(),d.toggleClass("on"),e.toggleClass("slide-to-r")}),f.hover(function(){$(this).addClass("animated bounce")},function(){$(this).removeClass("animated bounce")}),$(".card").on("click",function(a){a.preventDefault(),$(this).find(".detail").toggleClass("hidden")}),$(".btn-book").on("click",function(a){a.stopPropagation()}),$(".btn-comment").on("click",function(a){a.preventDefault(),a.stopPropagation(),$($(this).closest(".card")).next().toggleClass("visible"),$(".owl-wrapper-outer").toggleClass("overflow-visible"),$(".comments-box").css("height",$(".card").height()),window.innerWidth>=980&&($(this).closest(".owl-item").toggleClass("move-left"),$(this).closest(".owl-wrapper").toggleClass("full-vh"),$($(this).closest(".owl-item")).toggleClass("extended"),$(".comments-box").css("height",$(".extended .card").height()))})}};$(document).ready(function(){$("#promotion-galleries").owlCarousel({items:4,itemsTablet:[768,2],itemsMobile:[479,1]}),$("#foods-galleries").owlCarousel({items:4,itemsTablet:[768,2],itemsMobile:[479,1]}),$("#drinks-galleries").owlCarousel({items:4,itemsTablet:[768,2],itemsMobile:[479,1]}),$("#bbq-galleries").owlCarousel({items:4,itemsTablet:[768,2],itemsMobile:[479,1]}),$("#fast-foods-galleries").owlCarousel({items:4,itemsTablet:[768,2],itemsMobile:[479,1]}),king.init()});