/* Bootstrap */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
/* Bootstrap */

/* gRPC */
import { CryptoMailClient, ServiceError } from '../pb/cryptomail_pb_service';
import { AddRequest, AddResponse } from '../pb/cryptomail_pb';
/* gRPC */

import { handleError } from './util';

/* Testing Code */
let client = new CryptoMailClient("http://localhost:8080");
let msg = new AddRequest();
msg.setA(1);
msg.setB(2);
client.add(msg, (err: ServiceError, resp: AddResponse) => {
  if (err != null) {
    handleError(err);
  }
  console.log(resp.getC());
})
/* Testing Code */

let p = document.createElement("p");
p.innerText = "Hello! This is an example project!";
p.classList.add("lead", "text-center");
document.body.appendChild(p);