import { ServiceError } from "../pb/cryptomail_pb_service";
import { Modal } from "bootstrap";

export function handleError(err: ServiceError) {
  let mod = document.createElement("div")
  mod.classList.add("modal", "fade");
  let dlg = document.createElement("div");
  dlg.classList.add("modal-dialog");

  let content = document.createElement("div");
  content.classList.add("modal-content");

  let header = document.createElement("div");
  header.classList.add("modal-header");
  let title = document.createElement("h4");
  title.innerText = "Error!";
  header.appendChild(title);
  content.appendChild(header);

  let body = document.createElement("div");
  body.classList.add("modal-body");
  let text = document.createElement("p");
  text.innerText = err.message;
  body.appendChild(text);
  content.appendChild(body);

  let footer = document.createElement("div");
  footer.classList.add("modal-footer");
  let close = document.createElement("button");
  close.classList.add("btn", "btn-secondary");
  close.innerText = "Close";
  close.setAttribute("data-bs-dismiss", "modal");
  footer.appendChild(close);
  content.appendChild(footer);

  mod.appendChild(dlg);
  dlg.appendChild(content);
  document.body.appendChild(mod);

  let modal = new Modal(mod);
  modal.show();
}