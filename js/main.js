// Variables
let circlePlus = document.getElementById('circle-plus-toggle');
let circleMinus = document.getElementById('circle-minus-toggle');
let follow = document.getElementById('follow');
let backBtn = document.getElementById('btn--back');
let backArrow = document.getElementById('arrow--back');


// Animation initialize
AOS.init();

// Back button + arrow hover effect (darken)
function darken(){
  console.log("veikia");
  backBtn.style.color = "rgb(207,207,207)";
  backArrow.style.color = "rgb(207,207,207)"
}

// Back button + arrow hover effect (lighten)
function lighten(){
  console.log("irgi veikia");
  backBtn.style.color = "#fff";
  backArrow.style.color = "#fff"
}

// Unfollow button (+)
function toggleOff(){
  circleMinus.style.display = 'none';
  circlePlus.style.display = 'block';
  follow.innerHTML = 'follow';
  event.preventDefault();
}

// Follow button (-)
function toggleOn(){
  if (circleMinus.style.display != 'none') {
    toggleOff();
  } else {
    circlePlus.style.display = 'none';
    circleMinus.style.display = 'block';
    follow.innerHTML = 'unfollow';
    event.preventDefault();
  }
}
