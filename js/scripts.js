document.addEventListener("DOMContentLoaded", startScript);

function startScript() {
  console.log("Hello world");
  document.body.style.backgroundImage = "url(img/bg.jpg)";

  // Adding a new DIV and its styling
  let newDiv = document.createElement("div");
  newDiv.id = "title-wrapper";
  document.body.appendChild(newDiv);

  document.getElementById("title-wrapper").style =
    "top: 50%; width: 100%; text-align: center; font-family: impact; position: absolute; text-transform: uppercase;";

  // adding a new Heading and its styling
  let newHeading = document.createElement("H1");
  newHeading.id = "title";
  newHeading.innerText = "Work in progress...";
  document.getElementById("title-wrapper").appendChild(newHeading);

  document.getElementById("title").style =
    "width: fit-content; margin: auto; background: black; color: white;";

  // code I did before
  let listContent = [
    { id: "home", textContent: "Home", href: "home.asp" },
    { id: "news", textContent: "News", href: "news.asp" },
    { id: "contact", textContent: "Contact", href: "contact.asp" },
    { id: "about", textContent: "About", href: "about.asp" },
  ];

  let list = document.createElement("ul");

  listContent.forEach(function (listContent) {
    let li = createListItem(
      listContent.id,
      listContent.href,
      listContent.textContent
    );
    list.appendChild(li);
  });
  console.log(list);
  document.querySelector("body").appendChild(list);
}

function createListItem(id, href, textContent) {
  let li = document.createElement("li");
  let a = document.createElement("a");

  a.id = id;
  a.href = href;
  a.textContent = textContent;
  li.appendChild(a);
  return li;
}

/*let ul = document.createElement("ul");
ul.setAttribute("ID", "home");
document.body.appendChild(ul);

let li1 = document.createElement("li");
let home = document.createElement("Home");
li1.appendChild(home);
document.getElementById("home").appendChild(li1);*/
