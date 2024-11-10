const express = require("express"); //reemplazo require por NodeRequire para probar
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");
const path = require("path");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token:"APP_USR-3401231501576667-102317-27fafd3581296f35727f84e23aee9acf-2052968273", 
});
/* codigo extra agregago para probar 
app.use("../Ecommerce-v10", express.static(path.join(__dirname, "../Ecommerce-v10"), {
	setHeaders: (res) => {
	  res.setHeader("Content-Type", "text/javascript");
	},
  }));
fin codigo extra*/


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname,"../Ecommerce-v10")))
//app.use("../Ecommerce-v10", express.static(path.join(__dirname, "../Ecommerce-v10")));
app.use(cors());

app.get("/", function () {
	(path.resolve(__dirname,"..","../Ecommerce-v10","index.html"));
	//es.sendFile(filePath);
});

app.post("/create_preference", (req, res) => {

	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:8080",
			"failure": "http://localhost:8080",
			"pending": "",
		},
		auto_return: "approved",
	};

	mercadopago.preferences
		.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		})
		.catch(function (error) {
			console.log(error);
		});
});

app.get('/feedback', function (req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

app.listen(8080, () => {
	console.log("The server is now running on Port 8080");
});