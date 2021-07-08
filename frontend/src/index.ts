/* Bootstrap */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
/* Bootstrap */

/* gRPC */
import { CryptoMailClient, ServiceError } from '../pb/cryptomail_pb_service';
import { AddRequest, AddResponse } from '../pb/cryptomail_pb';
/* gRPC */

export let client = new CryptoMailClient("http://localhost:8080");

import { handleError } from './util';

let p = document.createElement("p");
p.innerText = "Loading 1+1...";
p.classList.add("lead", "text-center");
document.body.appendChild(p);

/* Testing Code */
let msg = new AddRequest();
msg.setA(1);
msg.setB(2);
client.add(msg, (err: ServiceError, resp: AddResponse) => {
  if (err != null) {
    handleError(err);
  }
  p.innerText = `1+1 is ${resp.getC()}`;
})
/* Testing Code */