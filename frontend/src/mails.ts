import { client } from ".";
import { Mail, Time } from "../pb/cryptomail_pb";
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

  let mailNames: string[] = new Array(mails.length);
  for (let i = 0; i < mails.length; i++) {
    mailNames[i] = mails[i].getSubject();
  }

  mailsList.appendChild(makeList(mailNames, null));
}