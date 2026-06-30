let citates_track = document.querySelector(".reviews_track");
let button_scroll_left = document.querySelector(".left_scroll_button");
let button_scroll_right = document.querySelector(".right_scroll_button");

const cardWidth = 600;
const gap = 40;
const step = cardWidth + gap;

function getBaseShift() {
  return window.innerWidth / 2 - cardWidth / 2 - step;
}

function setBasePosition() {
  citates_track.style.transition = "none";
  citates_track.style.transform = `translateX(${getBaseShift()}px)`;
}

function update_active_card() {
  let all_citates = document.querySelectorAll(".review_card");

  all_citates.forEach((card) => {
    card.classList.remove("active");
  });

  all_citates[1].classList.add("active");
}

button_scroll_right.addEventListener("click", () => {
  citates_track.style.transition = "transform 0.5s ease";
  citates_track.style.transform = `translateX(${getBaseShift() - step}px)`;

  setTimeout(() => {
    citates_track.append(citates_track.firstElementChild);

    setBasePosition();
    update_active_card();
  }, 500);
});

button_scroll_left.addEventListener("click", () => {
  citates_track.style.transition = "none";
  citates_track.prepend(citates_track.lastElementChild);
  citates_track.style.transform = `translateX(${getBaseShift() - step}px)`;

  setTimeout(() => {
    citates_track.style.transition = "transform 0.5s ease";
    citates_track.style.transform = `translateX(${getBaseShift()}px)`;
  }, 50);

  setTimeout(() => {
    update_active_card();
  }, 500);
});

setBasePosition();
update_active_card();

window.addEventListener("resize", () => {
  setBasePosition();
});
