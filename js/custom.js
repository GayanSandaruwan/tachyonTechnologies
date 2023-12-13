//desable the loader when page loads
// uncomment below section after construction


/*
var responsiveSlider = function () {
    var count = 0;
    var itemList = document.querySelectorAll(".content");
    var items = document.querySelectorAll(".content").length;
    var next = document.getElementById("next");
    var prve = document.getElementById("prev");

    var active_slider = false;

    function next_slide() {
        itemList[count].classList.remove('active');
        if (count + 1 >= items) {
            count = 0;
            itemList[count].classList.add('active');
        } else {
            itemList[count + 1].classList.add('active');
            count++;
        }
    }

    function prev_slide() {
        itemList[count].classList.remove('active');
        if (count - 1 < 0) {
            count = items - 1;
            itemList[count].classList.add('active');
        } else {
            itemList[count - 1].classList.add('active');
            count--;
        }
    }

    // Slider starts when the page loads
    setInterval(next_slide, 5000);

    // Action listener for forward button
    next.addEventListener('click', function () {
        next_slide();

    });

    // Action listener for backward button
    prev.addEventListener('click', function () {
        prev_slide();
    });
}
*/

window.onload = function (e) {
    // $("#loader")[0].style.background = "transparent";
    // $("#loader").addClass("fadeOut");
    // // responsiveSlider();
    // Scroll();

    // document.getElementById('title').style.animation = ;

}

var $animation_elements = $('.animated');
var $window = $(window);

function check_if_in_view() {
    // console.log	("in the animation");
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_height + window_top_position);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_height + element_top_position);

        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
            $element.addClass('in_view');

        } else {
            $element.removeClass('in_view');
        }

    });
}



// if we have three layers to be parallax we need three speeds to move them seperately
/*	var speed_1 = 0.5; 
	var speed_2 = 0.3;
	var speed_3 = 0.1;
	var backgrounds = document.getElementsByClassName('header'); // take the elemets with the header tag	
	//var callout_image = document.getElementsByClassName('callout')[0];
	window.onscroll = function(){ // when page is scrolled move each layer with seperate speeds
		
		var pageOffset = window.pageYOffset;
		
		var front_mountain = backgrounds[0];
		var val = "50%"+(pageYOffset*speed_1)+"px";
		
		front_mountain.style.backgroundPosition = val;
		var green_mountains = backgrounds[1];
		val = "50%"+(pageYOffset*speed_2)+"px";
		green_mountains.style.backgroundPosition = val;
		
		var background = backgrounds[2];
		val = "50%"+(pageYOffset*speed_3)+"px";
		background.style.backgroundPosition = val;
		console.log("scrolling happaing");

		check_if_in_view();

		
	}
*/
// $(document).ready(function(){
//     	$("#main_heading").effect("bounce",{times:3},2000);
//     	$("#main_heading").mouseover(function(){
//     		 $("#main_heading").effect("bounce",{times:2,distance:10,direction:"left"},1000);
//     	});
//     })    ;
// Closes the sidebar menu
$("#menu-close").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});
// Opens the sidebar menu
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});
// Scrolls to the selected menu item on the page
$(function () {
    $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
//#to-top button appears after scrolling
var fixed = false;
$(document).scroll(function () {
    if ($(this).scrollTop() > 250) {
        if (!fixed) {
            fixed = true;
            // $('#to-top').css({position:'fixed', display:'block'});
            $('#to-top').show("slow", function () {
                $('#to-top').css({
                    position: 'fixed',
                    display: 'block'
                });
            });
        }
    } else {
        if (fixed) {
            fixed = false;
            $('#to-top').hide("slow", function () {
                $('#to-top').css({
                    display: 'none'
                });
            });
        }
    }
});


    // // Jquery Slider
    // function move_left() {
    //     // body...
    //     var current_slide = $(".slide.active");
    //     var prev_slide = current_slide.prev();

    //     current_slide.fadeOut(300).removeClass('active');
    //     prev_slide.fadeIn(300).addClass('active');

    //     if (prev_slide.length == 0) {
    //         $('.slide').last().fadeIn(300).addClass('active');
    //     }
    // }

    // function move_right() {
    //     var current_slide = $(".slide.active");
    //     var next_slide = current_slide.next();

    //     current_slide.fadeOut(300).removeClass('active');
    //     next_slide.fadeIn(300).addClass('active');

    //     if (next_slide.length == 0) {
    //         $('.slide').first().fadeIn(300).addClass('active');
    //     }
    // }

    // $("#right_arrow").click(function () {
    //     move_right()
    // });

    // $("#left_arrow").click(function () {
    //     // body...
    //     move_left()
    // });


document.getElementById('container1').addEventListener('click', function () {
    (this).classList.add('out');
    var modals = document.getElementsByClassName('single-blog');
    setTimeout(() => {
        this.classList.remove('active');
        this.classList.remove('out');
        for (var i =0 ;i < modals.length ; i++){
            console.log(i);
            if(modals[i].style.display == "block"){
                modals[i].style.display = "none";
            console.log("found one "+modals[i].getAttribute('id') );
            }
        }
    }, 1300);
})

function showDetails(item) {
    var modal_container = document.getElementById('modal-container'); // take the modal container element
    var id = item.getAttribute('id'); // get the id of the clicked item
    console.log("the ID is : " + id);

    switch (id) {
        case "project_1":
            document.getElementById('p1').style.display = "block";
            break;
        case "project_2":
            document.getElementById('p2').style.display = "block";
            break;
        case "project_3":
            document.getElementById('p3').style.display = "block";
            break;
        case "project_4":
            document.getElementById('p4').style.display = "block";
            break;

    }

    document.getElementById('modal-container').classList.add('active');
}

// Display on scroll function

var  boxs  = document.getElementsByClassName('scrollEffect');

    function Scroll() {  /* this function get executed when page get scrolled and when the page get loaded */
        var window_height = window.pageYOffset+window.innerHeight;

        for (var i = 0; i < boxs.length; i++) {

            var height_to_top = boxs[i].offsetTop;
            var height_to_top_bottom = boxs[i].offsetTop + boxs[i].style.height;

            if(height_to_top < window_height){
                if (window.pageYOffset <= height_to_top_bottom) {

                    boxs[i].style.animation = boxs[i].getAttribute("data-scroll-animation")+" 1s ease-out forwards";
                    console.log(boxs[i].style.animation);

                }

            }else {
                boxs[i].style.animation = "";
            }
        }
       
    }
    
// window.addEventListener('scroll',  Scroll);

//   var quotes = document.querySelector('.blockquote-wrapper');
//         var height = quotes.scrollHeight;
//         // var width = quotes.style.width; 
//         // console.log( height+" "+width );
//         document.querySelector('.slide-show').style.height = height + 'px';
//         // document.querySelector('.slide-show').style.width = width + 'px';

//         var index = 0;
//         var slides = document.getElementsByClassName('slides');   //taking the slides

//         function move() {

//             if (index >= slides.length) {
//                 index = 0;
//             }

//             if (index < 0) {
//                 index = (slides.length - 1);
//             }

//             for (let i = 0; i < slides.length; i++) {
//                 // slides[i].classList.remove('active');
//                 slides[i].style.display = "none";

//             }

//             slides[index].style.display = "block";

//         }

//         function right() {
//             index += 1;
//             move();
//         }

//         function left() {
//             index -= 1;
//             move();
//         }

//         setInterval(function () {
//             right();
//         }
//             , 8000
//         )
