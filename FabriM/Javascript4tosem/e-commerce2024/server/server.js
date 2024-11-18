import express from "express";
import cors from "cors";

import { MercadoPagoConfig, Preference } from "mercadopago";
const client = new MercadoPagoConfig({
  accessToken: "TEST-674230169914655-092320-a72ee5cdf7b39675843980c5154f6325-436564188", //agregar el token
});

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Soy el server");
});

app.post("/create_preference", async (req, res) => {
  try {
    const body = {
      items: [
        {
          title: req.body.title,
          unit_price: Number(req.body.price),
          quantity: Number(req.body.quantity),
          currency_id: "ARS",
        },
      ],
      back_urls: {
        success: "https://www.youtube.com/watch?v=Gykudr8IAfc&t=1333s&ab_channel=onthecode",
        failure: "https://www.youtube.com/watch?v=Gykudr8IAfc&t=1333s&ab_channel=onthecode",
        pending: "https://www.youtube.com/watch?v=Gykudr8IAfc&t=1333s&ab_channel=onthecode",
      },
      auto_return: "approved",
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });
    res.json({
      id: result.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error al crear la preferencia",
    });
  }
});

app.listen(port, () => {
	console.log(`The server is now running on Port ${port}`);
});
