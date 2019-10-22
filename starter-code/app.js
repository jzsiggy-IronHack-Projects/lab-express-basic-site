const express = require("express");
const {home, about, gallery} = require("./routes/routes")
const app = express();

app.use(express.static('../starter-code/assets'));

app.get("/", home);
app.get("/about", about);
app.get("/gallery", gallery);


app.listen(3000, () => {
    console.log("SALVE! Estou ouvindo na porta 3000")
});