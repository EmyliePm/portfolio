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
  body.classList.toggle("light");
  let buttonText = document.querySelector(".lightThemeButton");
  if (body.classList.contains("light")) {
    buttonText.innerHTML = "Dark Theme";
  } else {
    buttonText.innerHTML = "Light Theme";
  }
}
let themeButton = document.querySelector(".lightThemeButton");
themeButton.addEventListener("click", changeTheme);
