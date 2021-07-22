export var friendsPage = document.createElement("div");

export async function friendsMain() {
  friendsPage.classList.add("container", "text-center", "mt-3");

  let h1 = document.createElement("h1");
  h1.innerText = "Friend Requests";
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

  friendsPage.appendChild(group);
}