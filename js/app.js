/**
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = document.getElementsByClassName('landing__container');
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
// check if section is in viewport
function inView(currentSection) {
  let bounding = currentSection.getBoundingClientRect();
    return (
    bounding.top <= (window.innerHeight || document.documentElement.clientHeight));
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
