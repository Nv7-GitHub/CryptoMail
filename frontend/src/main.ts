import { authenticate } from "./auth";
import { friendsMain } from "./friends";
import { profilesMain } from "./profiles";

export var mainPage = document.createElement("div");

let p = document.createElement("p");
p.innerText = "Main Page";
p.classList.add("lead", "text-center");
mainPage.appendChild(p);

export async function main() {
  await authenticate()
  profilesMain();
  friendsMain();
}