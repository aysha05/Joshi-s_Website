// var myFirstVariable;
// var element = document.getElementById("Hello");
// console.log(element);

// function scrollTop() {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   var scrollToTopBtn = document.getElementById("scrollTop");
//   if (document.body.scrollTop > 20) {
//     scrollToTopBtn.style.display = "block";
//   } else {
//     scrollToTopBtn.style.display = "none";
//   }
// }

function scroolToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function darkButtonClicked() {
  var darkBtnElement = document.getElementById("dark-Btn");
  console.log("Button Clicked");
  alert("Button Clicked");
}
