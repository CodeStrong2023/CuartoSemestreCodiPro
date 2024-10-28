Los archivos en edición estarán mezclados provisoriamente en el directorio Ecommerce.
ORGANIZACIÓN DE LOS ARCHIVOS DE LA ECOMMERCE: (en repaso y probando los scripts)
<link href="styles.css" rel="stylesheet">

 <script src="/client/js/products.js"></script>
    <script src="/client/js/index.js"></script>
    <script src="/client/js/cart.js"></script>

NOTAS: 
En el archivo package.json hay unos valores del video explicativo que no coinciden
con el valor por defecto, en el repaso de la práctica se prueban valores de otros ejemplos para ver que sucede. 
Los valores del video de la clase son éstos:
    "author": "",
    "license": "ISC",
    "dependencies": {
        "cors": "2.8.5",
        "express": "4.18.2",   
        "mercadopago": "1.5.16",
        "nodemon": "2.0.22"

En el caso del checkout se prueban con varios ejemplos para ver que sucede.
checkout-payment-sample mercadopago:
https://github.com/mercadopago/checkout-payment-sample/