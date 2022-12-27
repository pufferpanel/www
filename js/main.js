/**
 * @param {HTMLElement} el
 * @param {Event} event
 */
const perspective = (el, event) => {
  var elrect = el.getBoundingClientRect();
  var inY = event.clientY - elrect.top;
  var inX = event.clientX - elrect.left;
  var percentY = inY / el.clientHeight;
  var percentX = inX / el.clientWidth;
  var odchylka = 6;
  el.style.transition = "transform 0s";
  el.style.transform =
    "perspective(900px) rotateX(" +
    -(percentY * odchylka - odchylka / 2) +
    "deg) rotateY(" +
    (percentX * odchylka - odchylka / 2) +
    "deg)";
  // const diff = 6;
  // const rect = el.getBoundingClientRect();

  // const rotateX = -(
  //   (event.clientY - rect.top / el.clientHeight) * diff -
  //   diff / 2
  // );
  // const rotateY =
  //   (event.clientX - rect.left / el.clientWidth) * diff - diff / 2;

  // el.style.transition = "transform 0s";
  // el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

const perspectiveOut = (el) => {
  el.style.transition = "transform .3s";
  el.style.transform = "perspective(900px) rotateX(-4deg) rotateY(-4deg)";
};

const init = () => {
  document.querySelectorAll(".js-perspective-card").forEach((el) => {
    el.addEventListener("mousemove", (e) => perspective(el, e));
    el.addEventListener("mouseout", () => perspectiveOut(el));

    // Turn the card in it's default state.
    perspectiveOut(el);
  });

  AOS.init({});
};
