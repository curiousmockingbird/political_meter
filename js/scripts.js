window.onload = function () {

  const form = document.querySelector("form");

  form.onsubmit = function (event) {
    event.preventDefault();

    let turtles = document.getElementById("turtles");
    let snakes = document.getElementById("snakes");
    let lions = document.getElementById("lions");

    // gather the input value
    const animal = document.querySelector("input#animal").value;

    // check if input is turtles. If so, show content. 
    if (animal == "turtles") {
      turtles.setAttribute("class", "show");
      // else, check if input is snakes. If so, show content.
    } else if (animal == "snakes") {
      snakes.setAttribute("class", "show");
      // else, check if input is lions. If so, show content.
    } else if (animal == "lions") {
      lions.setAttribute("class", "show");
    }
  };
};