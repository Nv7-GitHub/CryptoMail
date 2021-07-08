import { client } from ".";
import { Null } from "../pb/cryptomail_pb";
import { handleError } from "./util";

export var mainPage = document.createElement("div");

let p = document.createElement("p");
p.innerText = "Main Page";
p.classList.add("lead", "text-center");
mainPage.appendChild(p);

export async function main() {
  let loggedIn = await new Promise<boolean>((resolve, _) => {
    client.isLoggedIn(new Null(), (err, res) => {
      if (err) {
        handleError(err);
        resolve(false);
        return;
      }
      resolve(res.getValue());
    });
  })

  console.log(loggedIn);
}