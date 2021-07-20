import { client } from ".";
import { Null } from "../pb/cryptomail_pb";
import { handleError } from "./util";

export var mainPage = document.createElement("div");

let p = document.createElement("p");
p.innerText = "Main Page";
p.classList.add("lead", "text-center");
mainPage.appendChild(p);

export function main() {
  client.isLoggedIn(new Null(), (err, res) => {
    if (err) {
      handleError(err);
      return;
    }

    const loggedIn = res.getValue();
    if (!loggedIn) {
      client.authURL(new Null(), (loginErr, loginRes) => {
        if (loginErr) {
          handleError(loginErr);
          return;
        }

        const url = loginRes.getValue();
        location.replace(url);
      })
    } else {
      client.makeService(new Null(), (error, _) => {
        if (error) {
          handleError(error);
          return;
        }

        /*client.getUnread(new Null(), (unreaderr, unread) => {
          if (unreaderr) {
            handleError(unreaderr);
            return;
          }

          let mails = unread.getMailsList();
          for (const mail of mails) {
            console.log(mail.getFrom());
            console.log(mail.getTo());
          }
        })*/
      })
    }
  });
}