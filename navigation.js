const nav = document.querySelector("nav");
const navToggle = nav.querySelector("img");
const navDivs = nav.querySelectorAll(".half-border-container");
const modal = document.querySelector(".mobile-modal");

/*
 * We will add an event listener to the hamburger/x button.
 * When it's clicked, we'll swap it for the other.
 * When it's the hamburger, the other divs are hidden.
 * When it's the X, the other divs appear.
 * When it's the logo, ignore.
 */

navToggle.addEventListener("click", () => {
  const iconType = navToggle.getAttribute("data-icontype");
  if (iconType === "logo") return;

  if (iconType === "hamburger") {
    navToggle.src = "images/icon-close.svg";
    navToggle.alt = "close icon";
    navToggle.setAttribute("data-icontype", "close");
    // unhide all of the hidden divs
    navDivs.forEach((div) => div.classList.remove("hidden"));
    // Bring up the modal background
    modal.classList.remove("hidden");
  } else {
    navToggle.src = "images/icon-hamburger.svg";
    navToggle.alt = "hamburger icon";
    navToggle.setAttribute("data-icontype", "hamburger");
    // unhide all of the hidden divs
    navDivs.forEach((div) => div.classList.add("hidden"));
    // Hide the modal background
    modal.classList.add("hidden");
  }
});
