import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(cookieParser());
const corsOptions = {
    origin: 'https//localhost:5173',
    Credentials: true
}
app.use(cors(corsOptions));

const port = 3000;

app.listen(port, () => {
    console.log(`server is running${port}`);

})