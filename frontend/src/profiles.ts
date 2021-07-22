import { client } from ".";
import { String, Null } from "../pb/cryptomail_pb";
import { reload } from "./main";
import { handleError, makeList } from "./util";

async function getProfiles(): Promise<string[]> {
  return new Promise<string[]>((res, _) => {
    client.getProfiles(new Null(), (err, profiles) => {
      if (err) {
        handleError(err);
        return res([]);
      }
      res(profiles.getValsList());
    })
  });
}

async function getCurrProfile(): Promise<string> {
  return new Promise<string>((res, _) => {
    client.getCurrentProfile(new Null(), (err, profile) => {
      if (err) {
        handleError(err);
        return res("");
      }
      res(profile.getValue());
    })
  });
}

export var profilesPage = document.createElement("div");
var tbl: HTMLElement;

export async function profilesMain() {
  profilesPage.classList.add("container", "text-center", "mt-3");

  let h1 = document.createElement("h1");
  h1.innerText = "Profiles";
  profilesPage.appendChild(h1);

  let group = document.createElement("div");
  group.classList.add("input-group", "mb-3");
  
  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = "New profile name..."
  input.classList.add("form-control");
  group.appendChild(input);

  let btn = document.createElement("button");
  btn.innerHTML = `<i class="bi bi-plus-lg"></i>`;
  btn.classList.add("btn", "btn-outline-secondary");
  group.appendChild(btn);
  btn.addEventListener("click", () => {
    let v = new String();
    v.setValue(input.value);
    client.newProfile(v, async (err, _) => {
      if (err) {
        handleError(err);
      } else {
        await reloadProfilesList();
      }
    });
  });

  profilesPage.appendChild(group);

  tbl = await getProfilesList()
  profilesPage.appendChild(tbl);
}

async function reloadProfilesList() {
  profilesPage.removeChild(tbl);
  tbl = await getProfilesList();
  profilesPage.appendChild(tbl);
}

async function getProfilesList(): Promise<HTMLElement> {
  let profiles = await getProfiles();
  let curr = await getCurrProfile();

  let btns: HTMLElement[] = new Array(profiles.length);
  for (let i = 0; i < profiles.length; i++) {
    let btn = document.createElement("button");
    btn.innerText = "Select";
    btn.classList.add("btn", "btn-primary");

    if (profiles[i] === curr) {
      btn.disabled = true;
      btn.innerText = "Selected"
    } else {
      btn.addEventListener("click", () => {
        let v = new String();
        v.setValue(profiles[i]);
        client.loadProfile(v, async (err, _) => {
          if (err) {
            handleError(err);
          } else {
            await reloadProfilesList();
            await reload();
          }
        });
      })
    }

    btns[i] = btn;
  }
  return makeList(profiles, btns);
}