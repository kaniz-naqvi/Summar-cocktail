import express from "express";
import cocktailRoutes from "./routes/cocktail.routes.js";
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());
app.use("/api/cocktails", cocktailRoutes);
// get on '/'
app.get("/", (req, res) => {
  res.json({ message: "Cocktail API backend is running" });
});
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
