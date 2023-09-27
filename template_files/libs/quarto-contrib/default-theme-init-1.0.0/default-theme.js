console.log("hello");

document.addEventListener("DOMContentLoaded", function () {
  debugger
  var elements = document.querySelectorAll('section.slide');

  elements.forEach((element) => {
    element.classList.add('fall');
  });
} );
