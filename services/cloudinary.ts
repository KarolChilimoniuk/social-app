import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

const cloud = cloudinary.v2;

cloud.config({
  cloud_name: `${process.env.CLOUDINARY_NAME}`,
  api_key: `${process.env.CLOUDINARY_APIKEY}`,
  api_secret: `${process.env.CLOUDINARY_SECRET}`,
});

export default cloud;
