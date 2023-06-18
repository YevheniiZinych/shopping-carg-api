const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

const app = express();

const restaurantRouter = require("./routes/api/restaurants");
const orderRouter = require("./routes/api/orders");
const keyRouter = require("./routes/api/key");

const swaggerDocument = require("./swagger.json");

require("dotenv").config();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/restaurant", restaurantRouter);
app.use("/api/order", orderRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/key", keyRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
