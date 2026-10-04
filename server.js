import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";



const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");

/*рег*/

app.get("/register", (req, res) => {
  res.render("register", { title: "регистраця" });
});

app.get("/register", (req, res) => {
  res.render("register", { title: "регистраця" });
});

app.get("/auth", (req, res) => {
  res.render("auth", { title: "регистраця" });
});

app.post("/register", (req, res) => {
  res.send(`имэил ${req.body.email} записанЪ у кнежку летописную <br>
окоянный ${req.body.fio} записанЪ у кнежку летописную<br>
труба ${req.body.phone} записана у кнежку летописную<br>
погремуха ${req.body.login} записана у кнежку летописную<br>
пароль ${req.body.password} записанЪ у кнежку летописную`);
});

/*логин*/

app.get("/login", (req, res) => {
  res.render("login", { title: "авторизаця" });
});

app.post("/login", (req, res) => {
  res.send(`погремуха ${req.body.login} записана у кнежку летописную<br>
пароль ${req.body.password} записанЪ у кнежку летописную</br>`);
});

/*дэшфакинборд*/

app.get("/dashboard", (req, res) => {
  res.render("dashboard", {
    title: "Мои заявки",
    user: { fio: "Иванов Иван" },
    requests: [
      { room_name: "Аудитория №1", status: "Новая" },
      { room_name: "Коворкинг", status: "Завершено" },
    ],
  });
});

/*индекс епт*/

app.get("/", (req, res) => {
  res.render("index", { title: "авторизаця" });
});

/*эбаут*/

app.get("/about", (req, res) => {
  res.render("about", { title: "Обо мне" });
});

app.get("/contacts", (req, res) => {
  res.send("контакты");
});

app.listen(PORT, () => {
  console.log(`сервер: http://localhost:${PORT}`);
});


