import { client } from ".";
import { Mail, Time } from "../pb/cryptomail_pb";
import { mainPage, mainSection } from "./main";
import { handleError, makeList } from "./util";

let lastUpdated = 0;
export let mails: Mail[] = [];

export var mailsList = document.createElement("div");

let span = document.createElement("span");
mailsList.appendChild(span);

export async function getNewMails(): Promise<void> {
  let tm = new Time();
  tm.setValue(lastUpdated);

  return new Promise<void>((res, _) => {
    client.getMessages(tm, (err, messages) => {
      if (err) {
        handleError(err);
        return res();
      }

      let newMsgs = messages.getMailsList();
      mails = mails.concat(newMsgs);
      if (mails.length > 0) {
        lastUpdated = mails[mails.length-1].getDate();
      }

      updateMailList();
      res();
    });
  });
}

function updateMailList() {
  mailsList.removeChild(mailsList.firstChild);

  let btns: HTMLElement[] = new Array(mails.length);
  let mailNames: string[] = new Array(mails.length);
  for (let i = 0; i < mails.length; i++) {
    mailNames[i] = mails[i].getSubject();

    let btn = document.createElement("button");
    btn.classList.add("btn", "btn-primary");
    btn.innerText = "Open";
    btns[i] = btn;

    btn.addEventListener("click", () => {
      let mail = mails[i];

      let section = document.createElement("div");
      section.classList.add("container", "text-center", "mt-3");

      let h1 = document.createElement("h1");
      h1.innerText = mail.getSubject();
      section.appendChild(h1);

      let body = document.createElement("div");
      body.style.textAlign = "left";
      body.innerHTML = mail.getBody();
      section.appendChild(body);

      let backBtn = document.createElement("button");
      backBtn.classList.add("btn", "btn-primary", "position-absolute", "bottom-0", "start-0");
      backBtn.style.borderBottomLeftRadius = "0px";
      backBtn.style.borderBottomRightRadius = "0px";
      backBtn.style.borderTopLeftRadius = "0px";
      backBtn.innerText = "Back";

      let icon = document.createElement("i");
      icon.classList.add("bi", "bi-caret-left-fill", "mr-1");
      backBtn.prepend(icon);

      section.appendChild(backBtn);

      backBtn.addEventListener("click", () => {
        mainPage.removeChild(section);
        mainPage.appendChild(mainSection);
      });

      mainPage.removeChild(mainSection);
      mainPage.appendChild(section);
    })
  }

  mailsList.appendChild(makeList(mailNames, btns));
}