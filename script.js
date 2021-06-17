const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navList = document.getElementsByClassName('nav-links')[0]
const header = document.getElementById('header')
const workNav = document.getElementById('work-nav')
const servicesNav= document.getElementById('services-nav')
const work = document.getElementById('work')
const services = document.getElementById('services')



toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active')
    toggleButton.classList.toggle('active')
    header.classList.toggle('active')
});

workNav.addEventListener('click', () => {
toggleButton.classList.toggle('active')
navList.classList.toggle('active')
header.classList.toggle('active')
work.scrollIntoView({
    behavior: "smooth",
})

});


servicesNav.addEventListener('click', () => {
    navList.classList.toggle('active')
    toggleButton.classList.toggle('active')
    header.classList.toggle('active')
    services.scrollIntoView({
        behavior: "smooth",
    })
    header.classList.add('hide')
    });

 


(function(){if (window.innerWidth > 1200 || (window.innerWidth <= 1200 && !(toggleButton.classList.contains('active'))) ){
    var doc = document.documentElement;
    var w   = window;

    /*
    define four variables: curScroll, prevScroll, curDirection, prevDirection
    */

    var curScroll;
    var prevScroll = w.scrollY || doc.scrollTop;
    var curDirection = 0;
    var prevDirection = 0;

    /*
    how it works:
    -------------
    create a scroll event listener
    create function to check scroll position on each scroll event,
    compare curScroll and prevScroll values to find the scroll direction
    scroll up - 1, scroll down - 2, initial - 0
    then set the direction value to curDirection
    compare curDirection and prevDirection
    if it is different, call a function to show or hide the header
    example:
    step 1: user scrolls down: curDirection 2, prevDirection 0 > hide header
    step 2: user scrolls down again: curDirection 2, prevDirection 2 > already hidden, do nothing
    step 3: user scrolls up: curDirection 1, prevDirection 2 > show header
    */

    var header = document.getElementById('header');
    var toggled;
    var threshold = 200;

    var checkScroll = function() {
        if(window.innerWidth > 1200 || window.innerWidth <= 1200 && !(toggleButton.classList.contains('active'))){
        curScroll = w.scrollY || doc.scrollTop;
        if(curScroll > prevScroll) {
            // scrolled down
            curDirection = 2;
        }
        else {
            //scrolled up
            curDirection = 1;
        }

        if(curDirection !== prevDirection) {
            toggled = toggleHeader();
        }

        prevScroll = curScroll;
        if(toggled) {
            prevDirection = curDirection;
        }}
    };

    var toggleHeader = function() { 
        toggled = true;
        if(curDirection === 2 && curScroll > threshold) {
            header.classList.add('hide');
        }
        else if (curDirection === 1) {
            header.classList.remove('hide');
        }
        else {
            toggled = false;
        }
        return toggled;
    };

    window.addEventListener('scroll', checkScroll);

   
    
}
})();


