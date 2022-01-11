
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (darkThemeMq) {
    // change background-image of .bgimg1 to the dark theme
    document.querySelector(".bgimg1").style.backgroundImage = "url('wallpaper-dark.jpg')";
} 
else {
    document.querySelector(".bgimg1").style.backgroundImage = "url('wallpaper.jpg')";
}