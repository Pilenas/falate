import express from 'express';
import cors from 'cors';
import cartRoutes from './routes/cart.js';
import menuRouter from './routes/menu.js';
import aboutRouter from "./routes/about.js";

const app = express();
const PORT = 8080;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/cart', cartRoutes);
app.use('/menu', menuRouter);
app.use("/about", aboutRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});

// Middleware för felhantering