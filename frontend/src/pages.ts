import { friendsPage } from "./friends";
import { mainPage } from "./main";
import { profilesPage } from "./profiles";

export function makePages() {
  // Navbar
  let navbar = document.createElement("div");
  navbar.classList.add("navbar", "navbar-expand-lg", "navbar-dark", "bg-dark");

  // Opening Container
  let container = document.createElement("div");
  container.classList.add("container-fluid");

  // Title
  let title = document.createElement("a");
  title.href = "#";
  title.innerText = "CryptoMail";
  title.classList.add("navbar-brand");
  container.appendChild(title);

  // Main Content
  let cont = document.createElement("div");
  cont.id = "navbar-cont";
  cont.classList.add("collapse", "navbar-collapse");

  // Toggler
  let toggler = document.createElement("button");
  toggler.classList.add("navbar-toggler");
  toggler.setAttribute("data-bs-toggle", "collapse");
  toggler.setAttribute("data-bs-target", "#navbar-cont");

  let txt = document.createElement("span");
  txt.classList.add("navbar-toggler-icon");
  toggler.appendChild(txt);

  container.appendChild(toggler);
  container.appendChild(cont);

  // List of items
  let items = document.createElement("ul");
  items.classList.add("navbar-nav", "me-auto", "mb-2", "mb-lg-0");

  // Home Button
  let home = document.createElement("li");
  home.classList.add("navbar-item");
  let homeBtn = document.createElement("a");
  homeBtn.href = "#";
  homeBtn.innerText = "Home";
  homeBtn.classList.add("nav-link");
  home.appendChild(homeBtn);
  items.appendChild(home);

  // Friends Button
  let friends = document.createElement("li");
  friends.classList.add("navbar-item");
  let friendsBtn = document.createElement("a");
  friendsBtn.href = "#";
  friendsBtn.innerText = "Friends";
  friendsBtn.classList.add("nav-link");
  friends.appendChild(friendsBtn);
  items.appendChild(friends);

  // Profiles Button
  let profiles = document.createElement("li");
  profiles.classList.add("navbar-item");
  let profilesBtn = document.createElement("a");
  profilesBtn.href = "#";
  profilesBtn.innerText = "Profiles";
  profilesBtn.classList.add("nav-link");
  profiles.appendChild(profilesBtn);
  items.appendChild(profiles);

  // Finish navbar up
  cont.appendChild(items);
  navbar.appendChild(container);
  document.body.appendChild(navbar);

  // Body
  let body = document.createElement("div");
  document.body.appendChild(body);
  body.appendChild(mainPage);
  homeBtn.classList.add("active");

  // Handlers
  homeBtn.onclick = () => {
    body.removeChild(body.firstChild);
    friendsBtn.classList.remove("active");
    profilesBtn.classList.remove("active");
    homeBtn.classList.add("active");
    body.appendChild(mainPage);
  }

  friendsBtn.onclick = () => {
    body.removeChild(body.firstChild);
    homeBtn.classList.remove("active");
    profilesBtn.classList.remove("active");
    friendsBtn.classList.add("active");
    body.appendChild(friendsPage);
  }

  profilesBtn.onclick = () => {
    body.removeChild(body.firstChild);
    homeBtn.classList.remove("active");
    friendsBtn.classList.remove("active");
    profilesBtn.classList.add("active");
    body.appendChild(profilesPage);
  }
}