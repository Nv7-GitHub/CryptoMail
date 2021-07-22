import { client } from ".";
import { Null, String } from "../pb/cryptomail_pb";
import { grpcErrorHandler, handleError, makeList } from "./util";

export var friendsPage = document.createElement("div");

async function getFreqs(incoming: boolean): Promise<string[]> {
  return new Promise<string[]>((res, _) => {
    client.getFriendRequests(new Null(), (err, profiles) => {
      if (err) {
        handleError(err);
        return res([]);
      }
      let items = profiles.getRequestsList();
      var out = [];
      for (var item of items) {
        if (item.getFromme() === !incoming) {
          out.push(item.getEmail());
        }
      }
      res(out);
    })
  });
}

var freqTbl = document.createElement("div");
let incomingTbl = document.createElement("div");

export async function refreshFreqs() {
  freqTbl.removeChild(freqTbl.firstChild);
  incomingTbl.removeChild(incomingTbl.firstChild);

  let freqs = await getFreqs(false); // Get outgoing
  freqTbl.appendChild(makeList(freqs, null));

  freqs = await getFreqs(true); // Get incoming
  incomingTbl.appendChild(makeList(freqs, null)); // TODO: Add buttons to accept
}

export async function friendsMain() {
  friendsPage.classList.add("container", "text-center", "mt-3");

  // New Friend Request Section
  let h1 = document.createElement("h1");
  h1.innerText = "Friend Requests Sent";
  friendsPage.appendChild(h1);

  let group = document.createElement("form");
  group.action = "#";
  group.classList.add("input-group", "mb-3");
  
  let input = document.createElement("input");
  input.type = "email";
  input.placeholder = "Email..."
  input.classList.add("form-control");
  group.appendChild(input);

  let btn = document.createElement("button");
  btn.innerHTML = `<i class="bi bi-plus-lg"></i>`;
  btn.classList.add("btn", "btn-outline-secondary");
  btn.type = "submit";
  group.appendChild(btn);

  btn.addEventListener("click", () => {
    let s = new String();
    s.setValue(input.value);
    client.newFriendRequest(s, async (err, _) => {
      await refreshFreqs();
      input.value = "";
      if (err) {
        handleError(err);
      }
    });
  });

  friendsPage.appendChild(group);

  // View Friend Requests
  let freqs = await getFreqs(false); // Get outgoing
  freqTbl.appendChild(makeList(freqs, null));
  friendsPage.appendChild(freqTbl); 

  h1 = document.createElement("h1");
  h1.innerText = "Friend Requests Received"
  h1.classList.add("mt-3");
  friendsPage.appendChild(h1);


  freqs = await getFreqs(true); // Get incoming
  incomingTbl.appendChild(makeList(freqs, null)); // TODO: Add buttons to accept
  
  friendsPage.appendChild(incomingTbl); 
}