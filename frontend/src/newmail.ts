import { Converter } from "showdown";
import { client } from ".";
import { Mail } from "../pb/cryptomail_pb";
import { mainPage, mainSection } from "./main";
import { ServiceError } from "../pb/cryptomail_pb_service";
import { handleError } from "./util";

var conv = new Converter();

export var createSection = document.createElement("form");
createSection.classList.add("container", "text-center", "mt-3");
createSection.action = "#";

let h1 = document.createElement("h1");
h1.innerText = "New Mail";
createSection.appendChild(h1);

let toGroup = document.createElement("div");
toGroup.classList.add("form-floating");

let toInput = document.createElement("input");
toInput.type = "email";
toInput.id = "toInput";
toInput.style.borderBottomLeftRadius = "0px";
toInput.style.borderBottomRightRadius = "0px";
toInput.style.marginBottom = "-1px";
toInput.required = true;
toInput.classList.add("form-control");
toInput.placeholder = "To";
toGroup.appendChild(toInput);

let toLabel = document.createElement("label");
toLabel.setAttribute("for", "toInput");
toLabel.innerText = "To";
toGroup.appendChild(toLabel);

createSection.appendChild(toGroup);

let subjectGroup = document.createElement("div");
subjectGroup.classList.add("form-floating");

let subjectInput = document.createElement("input");
subjectInput.type = "text";
subjectInput.id = "subjectInput";
subjectInput.style.borderRadius = "0px";
subjectInput.style.marginBottom = "-1px";
subjectInput.required = true;
subjectInput.classList.add("form-control");
subjectInput.placeholder = "Subject";
subjectGroup.appendChild(subjectInput);

let subjectLabel = document.createElement("label");
subjectLabel.setAttribute("for", "subjectInput");
subjectLabel.innerText = "Subject";
subjectGroup.appendChild(subjectLabel);

createSection.appendChild(subjectGroup);

let bodyGroup = document.createElement("div");
bodyGroup.classList.add("form-floating");

let bodyInput = document.createElement("textarea");
bodyInput.id = "bodyInput";
bodyInput.style.borderRadius = "0px";
bodyInput.style.marginBottom = "-1px";
bodyInput.required = true;
bodyInput.classList.add("form-control");
bodyInput.placeholder = "Mail";
bodyInput.style.height = "25vh";
bodyInput.spellcheck = true;
bodyGroup.appendChild(bodyInput);

let bodyLabel = document.createElement("label");
bodyLabel.setAttribute("for", "bodyInput");
bodyLabel.innerText = "Mail";
bodyGroup.appendChild(bodyLabel);

createSection.appendChild(bodyGroup);

let actionGroup = document.createElement("div");
actionGroup.classList.add("btn-group");
actionGroup.style.width = "100%";

let backBtn = document.createElement("button");
backBtn.classList.add("btn", "btn-danger", "btn-lg");
backBtn.type = "button";
backBtn.innerText = "Cancel";
backBtn.style.borderTopLeftRadius = "0px";
actionGroup.appendChild(backBtn);

let sendBtn = document.createElement("button");
sendBtn.classList.add("btn", "btn-primary", "btn-lg");
sendBtn.type = "submit";
sendBtn.innerText = "Send";
sendBtn.style.borderTopRightRadius = "0px";
actionGroup.appendChild(sendBtn);

createSection.appendChild(actionGroup);

backBtn.addEventListener("click", () => {
  mainPage.removeChild(createSection);
  mainPage.appendChild(mainSection);
});

sendBtn.addEventListener("click", () => {
  let body = conv.makeHtml(bodyInput.value);
  
  let mail = new Mail();
  mail.setTo(toInput.value);
  mail.setSubject(subjectInput.value);
  mail.setBody(body);

  client.sendMessage(mail, (err: ServiceError, _: any) => {
    if (err) {
      handleError(err); 
      return;
    }

    mainPage.removeChild(createSection);
    mainPage.appendChild(mainSection);
  });
});

export function setTo(val: string) {
  toInput.value = val;
}
