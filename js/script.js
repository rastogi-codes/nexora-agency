// ==========================================
// ANIMATED STAT COUNTERS
// ==========================================


// Select all normal number counters

const counters = document.querySelectorAll(".counter");


// Select decimal counter

const decimalCounters =
    document.querySelectorAll(".decimal-counter");


// Counter animation function

function startCounter(counter) {

    const target =
        Number(counter.dataset.target);

    const duration = 1800;

    const startingTime =
        performance.now();


    function updateCounter(currentTime) {

        const passedTime =
            currentTime - startingTime;


        const progress = Math.min(

            passedTime / duration,

            1

        );


        // Smooth animation effect

        const smoothProgress =

            1 - Math.pow(

                1 - progress,

                3

            );


        const currentNumber =

            Math.floor(

                smoothProgress * target

            );


        counter.textContent =
            currentNumber;


        if (progress < 1) {

            requestAnimationFrame(
                updateCounter
            );

        }

        else {

            counter.textContent =
                target;

        }

    }


    requestAnimationFrame(
        updateCounter
    );

}



// Decimal counter animation

function startDecimalCounter(
    counter
) {

    const target =
        Number(counter.dataset.target);

    const duration = 1800;

    const startingTime =
        performance.now();


    function updateCounter(
        currentTime
    ) {

        const passedTime =
            currentTime - startingTime;


        const progress = Math.min(

            passedTime / duration,

            1

        );


        const smoothProgress =

            1 - Math.pow(

                1 - progress,

                3

            );


        const currentNumber =

            smoothProgress * target;


        counter.textContent =

            currentNumber.toFixed(1);


        if (progress < 1) {

            requestAnimationFrame(
                updateCounter
            );

        }

        else {

            counter.textContent =
                target.toFixed(1);

        }

    }


    requestAnimationFrame(
        updateCounter
    );

}



// ==========================================
// START COUNTERS WHEN SECTION IS VISIBLE
// ==========================================

const statsSection =

    document.querySelector(
        ".stats-section"
    );


let counterStarted = false;


if (statsSection) {


    const statsObserver =

        new IntersectionObserver(

            function(entries) {


                entries.forEach(

                    function(entry) {


                        if (

                            entry.isIntersecting

                            &&

                            !counterStarted

                        ) {


                            counters.forEach(

                                function(counter) {

                                    startCounter(
                                        counter
                                    );

                                }

                            );


                            decimalCounters.forEach(

                                function(counter) {

                                    startDecimalCounter(
                                        counter
                                    );

                                }

                            );


                            counterStarted = true;

                        }

                    }

                );

            },


            {

                threshold: 0.35

            }

        );


    statsObserver.observe(
        statsSection
    );

} 

// ==========================================
// TESTIMONIAL SLIDER
// ==========================================

const testimonialCards =
    document.querySelectorAll(
        ".testimonial-card"
    );


const testimonialDots =
    document.querySelectorAll(
        ".testimonial-dot"
    );


const previousTestimonial =
    document.getElementById(
        "previousTestimonial"
    );


const nextTestimonial =
    document.getElementById(
        "nextTestimonial"
    );


let currentTestimonial = 0;



function showTestimonial(index) {


    testimonialCards.forEach(

        function(card) {

            card.classList.remove(
                "active"
            );

        }

    );


    testimonialDots.forEach(

        function(dot) {

            dot.classList.remove(
                "active"
            );

        }

    );


    testimonialCards[index]
        .classList.add(
            "active"
        );


    testimonialDots[index]
        .classList.add(
            "active"
        );


    currentTestimonial =
        index;

}



if (
    previousTestimonial
    &&
    nextTestimonial
) {


    previousTestimonial
        .addEventListener(

            "click",

            function() {


                let previousIndex =

                    currentTestimonial
                    - 1;


                if (
                    previousIndex < 0
                ) {

                    previousIndex =

                        testimonialCards
                        .length - 1;

                }


                showTestimonial(
                    previousIndex
                );

            }

        );



    nextTestimonial
        .addEventListener(

            "click",

            function() {


                let nextIndex =

                    currentTestimonial
                    + 1;


                if (

                    nextIndex
                    >=
                    testimonialCards
                    .length

                ) {

                    nextIndex = 0;

                }


                showTestimonial(
                    nextIndex
                );

            }

        );

}



/* Slider Dots */

testimonialDots.forEach(

    function(dot) {


        dot.addEventListener(

            "click",

            function() {


                const slideNumber =

                    Number(

                        dot.dataset.slide

                    );


                showTestimonial(
                    slideNumber
                );

            }

        );

    }

);



// Automatically change testimonial

if (
    testimonialCards.length > 0
) {


    setInterval(

        function() {


            let nextIndex =

                currentTestimonial
                + 1;


            if (

                nextIndex
                >=
                testimonialCards.length

            ) {

                nextIndex = 0;

            }


            showTestimonial(
                nextIndex
            );

        },

        6000

    );

}



// ==========================================
// NEWSLETTER FORM
// ==========================================

const newsletterForm =

    document.getElementById(
        "newsletterForm"
    );


const newsletterMessage =

    document.getElementById(
        "newsletterMessage"
    );


if (newsletterForm) {


    newsletterForm
        .addEventListener(

            "submit",

            function(event) {


                event.preventDefault();


                newsletterMessage
                    .textContent =

                    "Thanks! You’re on the list.";


                newsletterForm
                    .reset();


                setTimeout(

                    function() {


                        newsletterMessage
                            .textContent = "";

                    },

                    4000

                );

            }

        );

}



// ==========================================
// AUTOMATIC COPYRIGHT YEAR
// ==========================================

const currentYear =

    document.getElementById(
        "currentYear"
    );


if (currentYear) {


    currentYear.textContent =

        new Date()
        .getFullYear();

}



// ==========================================
// BACK TO TOP BUTTON
// ==========================================

const backToTop =

    document.getElementById(
        "backToTop"
    );


if (backToTop) {


    window.addEventListener(

        "scroll",

        function() {


            if (
                window.scrollY > 700
            ) {


                backToTop
                    .classList.add(
                        "show"
                    );

            }

            else {


                backToTop
                    .classList.remove(
                        "show"
                    );

            }

        }

    );



    backToTop
        .addEventListener(

            "click",

            function() {


                window.scrollTo({

                    top: 0,

                    behavior:
                        "smooth"

                });

            }

        );

}

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll(){

    revealElements.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll(); 


// MOBILE NAVIGATION


const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

} 