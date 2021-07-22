import { client } from ".";
import { Null } from "../pb/cryptomail_pb";
import { authenticate } from "./auth";
import { friendsMain, refreshFreqs } from "./friends";
import { profilesMain } from "./profiles";
import { grpcErrorHandler } from "./util";

export var mainPage = document.createElement("div");

let p = document.createElement("p");
p.innerText = "Main Page";
p.classList.add("lead", "text-center");
mainPage.appendChild(p);

export async function main() {
  await authenticate();
  refreshMails();
  profilesMain();
  friendsMain();
}

export async function reload() {
  await authenticate();
  refreshFreqs();
}

export function refreshMails() {
  client.refreshMails(new Null(), grpcErrorHandler);
}