const body_container = document.querySelector(".main-card-container");

const collection = ["characters", "weapons", "lands", "magic_items"];

const draw_elements = (data) => {
  data.forEach((key) => {
    const card = document.createElement("div");

    card.className = "adventure-cards";

    card.innerHTML = `<div class="front-adventure-side">
    <div class="adventure-image">
      <img
        class="img adventure-image__image"
        src=${key.img_path}
        alt="content"
      />
    </div>
    <div class="adventure-text-block">
      <span class="adventre-text-block__text">${key.name}</span>
    </div>
  </div>
  <div class="back-adventure-side">
    <div class="adventure-json-block">
      <span class="adventure-json-block__text">${JSON.stringify(key)}</span>
    </div>
  </div>`;

    body_container.appendChild(card);
  });
};

async function RESTful(url) {
  await fetch(`http://localhost:4500/api/${url}`)
    .then((data) => {
      data.json().then((d) => draw_elements(d));
    })
    .catch((e) => {
      console.log(e);
    });
}

const render = () => {
  switch (location.pathname) {
    case "/characters":
      RESTful(collection[0]);
      break;
    case "/weapons":
      RESTful(collection[1]);
      break;
    case "/lands":
      RESTful(collection[2]);
      break;
    case "/magic_items":
      RESTful(collection[3]);
      break;
  }
};

render();
