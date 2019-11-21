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

//build navigation bar and give each 'li' element a new Id (listId)
function buildmenu() {
  let count = 1;
  for (let i = 0; i < sections.length; i++) {
    let datanav = document.getElementsByTagName("section")[i].getAttribute("data-nav");
    let listId = "newid" + [count];
    const newli = document.createElement('li');
    newli.innerHTML="<a href=''>" + datanav + "</a>";
    newli.setAttribute("id", listId);
    newli.setAttribute("class", "menu__link");
    count +=1;
    const list = document.querySelector('#navbar__list');
    list.appendChild(newli);
  }
}


// set section to active
function active() {
  window.addEventListener('scroll', () => {
    for (let x = 1; x <= sections.length; x++) {
      let currentSection = document.querySelector("#section" + x);
      let isInViewport = inView(currentSection);
      if (isInViewport) {
        let activeElem = document.getElementsByClassName('active-class');
        activeElem[0].classList.remove('active-class');
        currentSection.classList.add("active-class");
      }
    }
  });
}


// scroll to ID and prevent page reload
function scroll() {
  for (let i = 1; i <= sections.length; i++) {
    let liElement = document.getElementById("newid" + i);
    liElement.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector("#section" + i).scrollIntoView({behavior: "smooth"});
    });
  }
}


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
