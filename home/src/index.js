var introductionSkills = document.getElementById("introductionSkills");

var typewriter = new Typewriter(introductionSkills, {
  loop: true,
  delay: 25,
  deleteSpeed: 10,
});

typewriter
  .pauseFor(2500)
  .typeString("I am a full-stack developer")
  .pauseFor(1000)
  .deleteChars(27)
  .typeString("My main skills include:")
  .pauseFor(1000)
  .deleteChars(23)
  .typeString("JS, HTML, CSS")
  .pauseFor(1000)
  .deleteChars(13)
  .typeString("Python, C languages, Perl")
  .pauseFor(1000)
  .deleteChars(25)
  .typeString("Hello there!")
  .pauseFor(1000)
  .deleteChars(12)
  .pauseFor(1000)
  .start();

function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
  let buttonText = document.querySelector(".darkThemeButton");
  if (body.classList.contains("dark")) {
    buttonText.innerHTML = "Light Theme";
  } else {
    buttonText.innerHTML = "Dark Theme";
  }
}
let themeButton = document.querySelector(".darkThemeButton");
themeButton.addEventListener("click", changeTheme);
