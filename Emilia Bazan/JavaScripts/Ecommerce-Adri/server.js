const express = NodeRequire("express"); //reemplazo require por NodeRequire para probar
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");
const path = require("path");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token:"TEST-1634454575192444-091223-c20ef602c2497325612943683f7cec7f-158012802", 
});
// codigo extra agregago 
app.use("/Ecommerce-v8", express.static(path.join(__dirname, "../Ecommerce-v8"), {
	setHeaders: (res) => {
	  res.setHeader("Content-Type", "text/javascript");
	},
  }));



app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname,"../Ecommerce-v8")))
app.use("/Ecommerce-v8", express.static(path.join(__dirname, "../Ecommerce-v8")));
app.use(cors());

app.get("/", function () {
	(path.resolve(__dirname,"..","/Ecommerce-v8","index.html"));
	es.sendFile(filePath);
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

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
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