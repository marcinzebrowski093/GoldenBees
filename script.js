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
    if (window.matchMedia('(max-width: 1200px)').matches){
toggleButton.classList.toggle('active')
navList.classList.toggle('active')
header.classList.toggle('active')}
work.scrollIntoView({
    behavior: "smooth",
})

});


servicesNav.addEventListener('click', () => {
    if (window.matchMedia('(max-width: 1200px)').matches){
    navList.classList.toggle('active')
    toggleButton.classList.toggle('active')
    header.classList.toggle('active')}
    services.scrollIntoView({
        behavior: "smooth",
    })

    });

    window.addEventListener("scroll", function(){
        if(window.scrollY==0){
            header.style.backgroundColor ="transparent";
        } else {
            header.style.backgroundColor ="rgba(0,0,0,0.75)";
        }
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


let servicesBoxes = [...document.querySelectorAll('.services-card')]

let titleSection = [...document.querySelectorAll('h1')]

let options = {
    rootMargin: '0px 0px -250px 0px',
    treshold: 2,
}

let options1 = {
    rootMargin: '0px 0px -500px 0px',
    treshold:1,
}


let callback = (entries, observer) => (
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active')
        }
    })
)

let observer = new IntersectionObserver (callback, options);


servicesBoxes.forEach((item) => {
    observer.observe(item)
})

let triangle = document.getElementById('triangle');

let observerTriangle = new IntersectionObserver (callback, options1);

observerTriangle.observe(triangle)

let Text = document.getElementById('project')

let observerText = new IntersectionObserver (callback,options);

observerText.observe(Text)

 