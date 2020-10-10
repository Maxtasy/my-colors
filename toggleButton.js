const darkThemeToggleButton = document.querySelector("#dark-theme-toggle");
const darkThemeToggleContainer = document.querySelector(".dark-theme-toggle-container");
const darkThemeToggleLabel = document.querySelector("#dark-theme-toggle-label");

darkThemeToggleButton.addEventListener("click", (e) => {
  // console.log(e.target.checked);
  if (e.target.checked) {
    darkThemeToggleButton.classList.add("enabled");
    setDarkTheme(true);
  } else {
    darkThemeToggleButton.classList.remove("enabled");
    setDarkTheme(false);
  }
});

function setDarkTheme(value) {
  if (value) {
    darkThemeToggleContainer.classList.add("dark");
    darkThemeToggleLabel.textContent = "Dark Theme";
  } else {
    darkThemeToggleContainer.classList.remove("dark");
    darkThemeToggleLabel.textContent = "Light Theme";
  }
}