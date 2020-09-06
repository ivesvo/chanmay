function readMore(name) {
    let dots = document.querySelector(`.card[data-people="${name}"] .dots`);
    let moreText = document.querySelector(`.card[data-people="${name}"] .more`); 
    let btnText = document.querySelector(`.card[data-people="${name}"] .myBtn`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
      }
}