import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const app: Express = express();
const port = process.env.PORT || 4000;
const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;

const main = async (): Promise<void> => {
  await mongoose.connect(
    `mongodb+srv://${mongoUser}:${mongoPassword}@social-app.sms06pi.mongodb.net/?retryWrites=true&w=majority`
  );
};

app.get("/", (req: Request, res: Response) => {
  res.send("Server works :]");
});

main()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server works on port ${port}`);
    });
    console.log("Database connected");
  })
  .catch((err) => console.log(err));
