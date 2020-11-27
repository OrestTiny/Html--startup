
$(document).ready(function () {
    $('.slider .owl-carousel').owlCarousel({
        loop: false,
        margin: 20,
        nav: true,
        dots: false,
        // autoplay: 5000,
        autoplaySpeed: 1500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});



$(document).ready(function () {
    $('.slider-2 .owl-carousel').owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        dots: true,
        // autoplay: 5000,
        autoplaySpeed: 1500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});




function servicesScroll() {
    document.querySelectorAll('.services .item').forEach(items => {
        let boxTop = items.getBoundingClientRect().top - window.innerHeight - 300;
        let wrap = document.querySelector('.services  .wrapper');
        if (boxTop <= 0) {
            wrap.classList.add('animation');
        }
    });
}
servicesScroll();

function aboutScroll() {
    let aboutBlock = document.querySelector('.about');
    if (aboutBlock.getBoundingClientRect().top - window.innerHeight + 300 <= 0) {
        aboutBlock.classList.add('animation');
    }
}
aboutScroll();

window.addEventListener('scroll', function () {
    let header = document.querySelector('.header');
    let d = window.scrollY / 2;
    header.style.transform = `translateY(${d}px)`;
    let services = document.getElementById('services');

    if (services.getBoundingClientRect().y < 0) {
        header.style.transform = `translateY(${0}px)`;
    }


    aboutScroll();
    servicesScroll();

});



window.addEventListener('mousemove', function (m) {
    let x = (window.innerWidth - m.pageX) / 100;
    let y = (window.innerHeight - m.pageY) / 100;
    let block = document.querySelector('.header-body');

    block.style.transform = `translate(${x}px, ${y}px)`;
    header.style.backgroundPositionX = -x * 2 + 'px';
    header.style.backgroundPositionY = -y * 2 + 'px';
});



// document.querySelectorAll('.tab-pane div').forEach(tabsImg => {
//     tabsImg.addEventListener('hover', function () {
//         window.addEventListener('mousemove', function (es) {
//             let x = (window.innerWidth - es.clientX) / 50;
//             let y = (window.innerHeight - es.clientY) / 50;
//             this.style.transform = `translate(${x}px, ${y}px)`
//         })
//     })
// });



$('.tab-pane .row div div').is(function () {
    let tab = $(this);
    $(tab).hover(function () {
        $('.inner', tab).mousemove(function (e) {
            let x = e.offsetX / 5;
            let y = e.offsetY / 5;
            $('img', tab).css({
                transform: `translate(${x}px, ${y}px) scale(1.4)`,
            })
        })
    },
        function () {
            $('img', tab).css({
                transform: `translate(${0}px, ${0}px) scale(1)`,
            })
        })
})



$(window).scroll(function () {
    var st = $(document).scrollTop() / 4;
    $('#header').css({
        backgroundPosition: 'auto -' + st + 'px',
    });
});






$('.recent .content .item').mouseenter(function () {
    $(this).addClass('active');
}).mouseleave(function () {
    $(this).removeClass('active');
})






document.addEventListener('scroll', function () {
    let offer = document.querySelector('.offer');
    let offerOff = offer.offsetTop;
    let widows = window.scrollY;
    let windwsHeight = window.innerHeight;
    let d = widows - offerOff;


    if (widows >= (offerOff - windwsHeight)) {
        offer.style.backgroundPositionY = `${d / 4}px`;
    }

})

document.addEventListener('scroll', function () {
    let latest = document.querySelector('.latest_work');
    let latestTop = latest.offsetTop;
    let widows = window.scrollY;
    let windwsHeight = window.innerHeight;

    if (widows >= (latestTop - windwsHeight)) {
        document.querySelectorAll('.latest_work .tabs .tab-pane .item img').forEach(items => {
            items.setAttribute('data-speed', Math.random() * 20);
            let random = items.getAttribute('data-speed');


            items.style.transform = `translateY(${random * 2}px) scale(${random / 20 + .9})`;
        })
    }
})

