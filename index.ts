import express, { Express, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mainRouter from "./routes/main";
import authRouter from "./routes/auth";
import userActivitiesRouter from "./routes/userActivities";

dotenv.config({ path: "./.env" });

const app: Express = express();
const port = process.env.PORT || 4000;
const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  next();
});

const main = async (): Promise<void> => {
  await mongoose.connect(
    `mongodb+srv://${mongoUser}:${mongoPassword}@social-app.sms06pi.mongodb.net/?retryWrites=true&w=majority`
  );
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/", mainRouter);
app.use("/auth", authRouter);
app.use("/logged", userActivitiesRouter);

main()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server works on port ${port}`);
    });
    console.log("Database connected");
  })
  .catch((err) => console.log(err));
