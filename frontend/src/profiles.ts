import { client } from ".";
import { Null } from "../pb/cryptomail_pb";
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

  tbl = await getProfilesList()
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
    }

    btns[i] = btn;
  }
  return makeList("Profiles", profiles, btns);
}