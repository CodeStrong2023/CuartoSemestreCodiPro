import express from "express";
import cors from "cors";
import { config } from './config.js'; // Ajustado para importar desde config.js


//! Agrega credenciales
// const client = new MercadoPagoConfig({
//     accessToken: `${config.Access_Token}`,
// });

// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';
// Agrega credenciales
const client = new MercadoPagoConfig({
     accessToken: 'TEST-457543137110437-091419-a56f162b4f9654b7615444968795a698-749050862',
     });

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server app ;)");
})
 // todo alert
app.post("/create_preference", async (req, res) => {
    try {
        const body = {
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "ARS",
                },
            ],
            back_urls: {
                "success": "http://www.youtube.com/@onthecode",
                "failure": "http://www.youtube.com/@onthecode",
                "pending": "http://www.youtube.com/@onthecode",
            },
            auto_return: "approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({body});
        res.json({
            id: result.id,
        });
    }catch (error){
        console.log(error);
        res.status(500).json({
            error: "Error al crear la preferencia",
        });
    }
});

app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
})
