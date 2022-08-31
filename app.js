const down = document.querySelector(".fa-caret-down");
const header = document.querySelector("header");
const brand = header.querySelector(".brand");
const body = document.querySelector("body");
let factor = 0;
const scrollDown = [...document.querySelectorAll(".scrollDown")];
down.addEventListener("click", (e) => {
  if (body.clientWidth < 1250) {
    let height = 0;
    if (factor == 0) {
      scrollDown[0].style.transform = `translateY(${height}px)`;
      scrollDown[1].style.transform = `translateY(${
        height + scrollDown[0].clientHeight
      }px)`;
      scrollDown[2].style.transform = `translateY(${
        height + scrollDown[0].clientHeight + scrollDown[1].clientHeight
      }px)`;
      brand.style.color = "white";
      header.style.backgroundColor = "blue";
      factor++;
    } else {
      scrollDown.forEach((el) => {
        el.style.transform = "translateY(-1000px)";
        brand.style.color = "black";
        header.style.backgroundColor = "white";
        factor = 0;
      });
    }
  } else {
    return;
  }
});

const dropDown = document.querySelector(".orange");
const moreOn = document.querySelector(".moreOn");
const moreFrom = document.querySelector(".moreFrom");
const change = document.querySelector(".change");
let drop = 0;
dropDown.addEventListener("click", () => {
  if (drop == 0) {
    moreFrom.style.display = "initial";
    moreOn.style.display = "initial";
    change.classList.replace("fa-plus", "fa-minus");
    drop++;
  } else {
    moreFrom.style.display = "none";
    moreOn.style.display = "none";
    change.classList.replace("fa-minus", "fa-plus");

    drop--;
  }
});
const sticky = document.querySelector(".sticky");
document.addEventListener("scroll", () => {
  if (this.oldScroll > this.scrollY) {
    sticky.classList.add("topper");
  } else {
    sticky.classList.remove("topper");
  }
  this.oldScroll = this.scrollY;
});
