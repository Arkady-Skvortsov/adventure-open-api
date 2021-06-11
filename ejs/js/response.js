const cards_name = document.querySelector(
  "adventure-cards adventure-text-block__text"
);
const cards_details = document.querySelector(
  "adventure-cards adventure-json-block__text"
);

async function RESTful(url) {
  fetch(`http://localhost:5500/api/${url}`)
    .then((data) => {
      data.json().then((d) => d);
    })
    .catch((e) => {
      console.log(e);
    });
}

const collection = ["characters", "weapons", "lands", "magic_items"];

collection.forEach((arg) => {
  RESTful(arg);
});
