//
const mercadopago = require("mercadopago");
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
    access_token: "YOUR_ACCESS_TOKEN_HERE",  // Asegúrate de reemplazar con tu token de acceso
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "html-js"))); // La ruta sería: ../../client/html-js
app.use(cors());

app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, "html-js", "index.html")); // Envía el archivo index.html como respuesta
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
        back_urls: { // Corregido de basck_urls a back_urls
            success: "http://localhost:8080/feedback", // URL de éxito corregida
            failure: "http://localhost:8080/feedback", // URL de fallo corregida
            pending: "", // Opcional
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
            res.status(500).send("Internal Server Error"); // Enviar una respuesta en caso de error
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
