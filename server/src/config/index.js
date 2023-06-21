import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT || 5000,
  MONGODB_URL:
    process.env.MONGODB_URL ||
    "mongodb+srv://shonbwd:YI33MaSJFniqAr3j@cluster0.j8lwo1s.mongodb.net/socialMediaApp",
};
export default config;
