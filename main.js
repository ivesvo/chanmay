// function readMore(name) {
//     let dots = document.querySelector(`.card[data-people="${name}"] .dots`);
//     let moreText = document.querySelector(`.card[data-people="${name}"] .more`); 
//     let btnText = document.querySelector(`.card[data-people="${name}"] .myBtn`);

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more"; 
//         moreText.style.display = "none";
//       } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less"; 
//         moreText.style.display = "inline";
//       }
// }

function readMore(name) {
    var dots = document.getElementById(`dots-${name}`);
    var moreText = document.getElementById(`more-${name}`);
    var btnText = document.getElementById(`myBtn-${name}`);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "More"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Less"; 
      moreText.style.display = "inline";
    }
  }