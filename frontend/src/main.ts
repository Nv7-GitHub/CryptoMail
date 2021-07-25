import { Converter } from "showdown";
import { client } from ".";
import { Null } from "../pb/cryptomail_pb";
import { authenticate } from "./auth";
import { friendsMain, refreshFreqs } from "./friends";
import { getNewMails, mailsList } from "./mails";
import { createSection, setTo } from "./newmail";
import { profilesMain } from "./profiles";
import { grpcErrorHandler } from "./util";

export var mainPage = document.createElement("div");

export var mainSection = document.createElement("div");
mainPage.appendChild(mainSection);

mainSection.classList.add("container", "text-center", "mt-3");

let group = document.createElement("form");
group.action = "#";
group.classList.add("input-group", "mb-3");

let input = document.createElement("input");
input.type = "email";
input.placeholder = "New Email To..."
input.classList.add("form-control");
group.appendChild(input);

let btn = document.createElement("button");
btn.innerHTML = `<i class="bi bi-plus-lg"></i>`;
btn.classList.add("btn", "btn-outline-secondary");
btn.type = "submit";
group.appendChild(btn);

btn.addEventListener("click", () => {
  setTo(input.value);
  mainPage.removeChild(mainSection);
  mainPage.appendChild(createSection);
});

mainSection.appendChild(group);
mainSection.appendChild(mailsList);


export async function main() {
  await authenticate();
  await refreshMails();
  profilesMain();
  friendsMain();
}

export async function reload() {
  await authenticate();
  refreshFreqs();
}

export async function refreshMails() {
  client.refreshMails(new Null(), grpcErrorHandler);
  await getNewMails();
}