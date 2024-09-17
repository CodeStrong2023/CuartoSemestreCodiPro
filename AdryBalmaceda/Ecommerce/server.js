const mercadopago = require("mercadopago");
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

//REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel  verificar
mercadopago.configure({
    access_token: "",
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, "html-js")));   //la ruta sería: ../../client/html-js
app.use(cors());

app.get("/", function (req, res) {
    path.resolve(__dirname, "..", "html-js", "index.html");  //la ruta sería "client" como el anterior comentario
});

app.post("/create_preference", (req, res) => {
    let preference = {
        items: [
            {
                title: req.body.description,
                unit_price: Number(req.body.price),
                quantity: Number(req.body.quantity),
            },
        ],
        basck_urls: {
            success: "http://localhost:8080",
            failure: "http://localhost:8080",
            pending: "",
        },
        auto_return: "approved",
    };

    mercadopago.preferences
        .create(preference)
        .then(function (response) {
            res.json({
                id: response.body.id,
            });
        })
        .catch(function (error) {
            console.log(error);
        });
});

app.get("/feedback", function (req, res) {
    res.json({
        Payment: req.query.payment_id,
        Status: req.query.status,
        MerchantOrder: req.query.merchant_order_id,
    });
});

app.listen(8080, () => {
    console.log("The server is now running on Port 8080");
});