const leftArrows = document.querySelectorAll(".left-arrow");
const leftImages = document.querySelectorAll(".left-arrow-img");
const rightArrows = document.querySelectorAll(".right-arrow");
const rightImages = document.querySelectorAll(".right-arrow-img");
const articles = document.querySelectorAll(".hero-article");

let articleFocus = 0;

leftImages.forEach((leftImage) =>
  leftImage.addEventListener("click", changeFocusLeft)
);

rightImages.forEach((rightImage) =>
  rightImage.addEventListener("click", changeFocusRight)
);

function changeFocusLeft() {
  // articles[articleFocus].classList.add("hidden");
  let children = articles[articleFocus].querySelectorAll("*");
  children.forEach((child) => child.classList.add("hidden"));
  articleFocus--;
  if (articleFocus < 0) articleFocus = articles.length - 1;
  // articles[articleFocus].classList.remove("hidden");
  children = articles[articleFocus].querySelectorAll("*");
  children.forEach((child) => child.classList.remove("hidden"));
}

function changeFocusRight() {
  // articles[articleFocus].classList.add("hidden");
  let children = articles[articleFocus].querySelectorAll("*");
  children.forEach((child) => child.classList.add("hidden"));
  articleFocus++;
  if (articleFocus >= articles.length) articleFocus = 0;
  // articles[articleFocus].classList.remove("hidden");
  children = articles[articleFocus].querySelectorAll("*");
  children.forEach((child) => child.classList.remove("hidden"));
}

function resizeArrows() {
  const windowWidth = window.innerWidth;
  const arrowBoxes = document.querySelectorAll(".arrow");

  if (windowWidth >= 960) {
    // Get the elements for top and bottom grid items
    const topGridItem = document.querySelector(".hero-image");
    const bottomGridItem = document.querySelector(".about-section--text");

    // Check if both grid items exist
    if (topGridItem && bottomGridItem) {
      const topGridItemEnd = topGridItem.offsetLeft + topGridItem.offsetWidth;
      const bottomGridItemEnd =
        bottomGridItem.offsetLeft + bottomGridItem.offsetWidth;

      const arrowBoxWidth = (bottomGridItemEnd - topGridItemEnd) / 2;

      // Sometimes the arrowBoxWidth is huge, for some strange reason.
      if (arrowBoxWidth > 100) {
        console.log("The arrow box is HUGE!");
        arrowBoxWidth = 100;
      }

      arrowBoxes.forEach((arrowBox) => {
        arrowBox.style.width = `${arrowBoxWidth}px`;
        arrowBox.style.height = `${arrowBoxWidth}px`;
      });
      // Change offsets
      leftArrows.forEach((arrowBox) => {
        arrowBox.style.right = `-${arrowBoxWidth}px`;
      });
      rightArrows.forEach((arrowBox) => {
        arrowBox.style.right = `-${arrowBoxWidth * 2}px`;
      });
      // Change the actual arrow positioning
      const arrowPaddingTopBottom = 0.36 * arrowBoxWidth;
      const arrowPaddingLeftRight = 0.43 * arrowBoxWidth;
      leftImages.forEach((image) =>
        styleImage(
          image,
          `${arrowBoxWidth}px`,
          `${arrowPaddingTopBottom}px`,
          `${arrowPaddingLeftRight}px`
        )
      );
      rightImages.forEach((image) =>
        styleImage(
          image,
          `${arrowBoxWidth}px`,
          `${arrowPaddingTopBottom}px`,
          `${arrowPaddingLeftRight}px`
        )
      );
    }
  } else {
    arrowBoxes.forEach((arrowBox) => {
      arrowBox.style.width = "3.5rem";
      arrowBox.style.height = "3.5rem";
    });
    // Change offsets
    leftArrows.forEach((arrowBox) => {
      arrowBox.style.right = "3.5rem";
    });
    rightArrows.forEach((arrowBox) => {
      arrowBox.style.right = "0";
    });
    leftImages.forEach((image) =>
      styleImage(image, "3.5rem", "1.25rem", "1.5rem")
    );
    rightImages.forEach((image) =>
      styleImage(image, "3.5rem", "1.25rem", "1.5rem")
    );
  }
}

function styleImage(
  image,
  arrowBoxWidth,
  arrowPaddingTopBottom,
  arrowPaddingLeftRight
) {
  image.style.height = arrowBoxWidth;
  image.style.width = arrowBoxWidth;
  image.style.paddingTop = arrowPaddingTopBottom;
  image.style.paddingBottom = arrowPaddingTopBottom;
  image.style.paddingLeft = arrowPaddingLeftRight;
  image.style.paddingRight = arrowPaddingLeftRight;
}

// Initial call on page load
window.addEventListener("load", resizeArrows);

// Call the resizeArrows function on window resize
window.addEventListener("resize", resizeArrows);
