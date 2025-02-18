const cards = document.querySelectorAll(".card");
let selectedCard = cards[0];

cards.forEach((c) => {
  c.addEventListener("click", (e) => {
    if (selectedCard !== c) {
      selectedCard.classList.add("not-selected");
      selectedCard = c;
    }
    c.classList.remove('not-selected');
  });
});
