const btn = document.getElementById("hamburger");
const nav = document.getElementById("mobile-navigation");

function setIcon(iconLink) {
  const icon = document.createElement("img");
  icon.alt = "menu-icon";
  icon.src = iconLink;
  btn.innerHTML = "";
  btn.appendChild(icon);
}

function handleClick(e) {
  if (nav.classList.contains("close")) {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  } else {
    document.getElementsByTagName("body")[0].style.overflow = "visible";
  }
  nav.classList.toggle("close");

  nav.classList.contains("close")
    ? setIcon("./images/icon-menu.svg")
    : setIcon("./images/icon-menu-close.svg");
  e.preventDefault();
}

btn.addEventListener("click", handleClick);
