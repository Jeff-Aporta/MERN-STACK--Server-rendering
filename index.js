const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const PORT = process.env.PORT || 5000; // Puerto en el que correrá el proxy inverso

const PORT_CLIENT = 3001;
const PORT_SERVER_DB = process.env.PORT_SERVER_DB;

if (!PORT_SERVER_DB) {
  console.error("Error: PORT_SERVER no está establecido.");
  process.exit(1);
}

console.log({ PORT, PORT_CLIENT, PORT_SERVER: PORT_SERVER_DB });

app.use(
  "/api-db",
  createProxyMiddleware({
    target: `http://localhost:${PORT_SERVER_DB}`,
    changeOrigin: true,
  })
);

// Proxy para la aplicación de React (redirige las solicitudes al servidor React en http://localhost:3000)
app.use(
  "/",
  createProxyMiddleware({
    target: `http://localhost:${PORT_CLIENT}`,
    changeOrigin: true,
  })
);

// Inicia el servidor de Node.js
app.listen(PORT, () => {
  console.log(`Proxy inverso corriendo en http://localhost:${PORT}`);
});
