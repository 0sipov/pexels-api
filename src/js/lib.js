import template from "../templates/item.hbs";
import { createClient } from "pexels";
import refs from "./refs.js";
const client = createClient(
  "563492ad6f917000010000012eb7a26bec714b6cbbd6f346c10047af",
);
// ================================ random =====================
// client.photos.random().then((obj) => {
//   console.log(obj);
//   img.src = obj.src.original;
// });
// =============================== search ======================
// let query = "car";
// client.photos.search({ query, per_page: 10 }).then((result) => {
//   console.log(result.photos);
//   result.photos.map((el) => {
//     const img = document.createElement("img");
//     img.width = "300";
//     img.src = el.src.original;
//     refs.gallery.append(img);
//   });
// });

// ===========================================
const query = "car";
client.photos.search({ query, per_page: 10 }).then((result) => {
  const items = template(result.photos);
  console.log(result.photos);
  refs.gallery.insertAdjacentHTML("afterbegin", items);
});
