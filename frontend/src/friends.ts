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

async function getFriends(): Promise<string[]> {
  return new Promise<string[]>((res, _) => {
    client.getFriends(new Null(), (err, profiles) => {
      if (err) {
        handleError(err);
        return res([]);
      }
      res(profiles.getValsList());
    })
  });
}


let freqTbl = document.createElement("div");
let incomingTbl = document.createElement("div");
let friendsTbl = document.createElement("div");

export async function refreshFreqs() {
  freqTbl.removeChild(freqTbl.firstChild);
  incomingTbl.removeChild(incomingTbl.firstChild);
  friendsTbl.removeChild(friendsTbl.firstChild);

  let freqs = await getFreqs(false); // Get outgoing
  freqTbl.appendChild(makeList(freqs, null));

  incomingTbl.appendChild(await getIncomingTable());

  let friends = await getFriends();
  friendsTbl.appendChild(makeList(friends, null));
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

  incomingTbl.appendChild(await getIncomingTable());
  friendsPage.appendChild(incomingTbl); 

  // View Friends
  let friends = await getFriends();

  h1 = document.createElement("h1");
  h1.innerText = "Friends";
  h1.classList.add("mt-3");
  friendsPage.appendChild(h1);

  friendsTbl.appendChild(makeList(friends, null));
  friendsPage.appendChild(friendsTbl); 
}

async function getIncomingTable(): Promise<HTMLElement> {
  let freqs = await getFreqs(true); // Get incoming
  let btns: HTMLElement[] = new Array(freqs.length);
  for (let i = 0; i < freqs.length; i++) {
    let btn = document.createElement("button");
    btn.innerText = "Accept"
    btn.classList.add("btn", "btn-primary");
    btn.addEventListener("click", () => {
      let s = new String();
      s.setValue(freqs[i]);
      client.acceptFriendRequest(s, async (err, _) => {
        await refreshFreqs();
        if (err) {
          handleError(err);
        }
      });
    })

    btns[i] = btn;
  }
  return makeList(freqs, btns)
}