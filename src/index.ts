import express from "express";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import { signupEndpoint } from "./endpoints/signupEndpoint";
import { loginEndpoint } from "./endpoints/loginEndpoint";
import { getUserByIDEndpoint, getUserByTokenEndpoint} from "./endpoints/getUserEndpoint";
import { createRecipeEndpoint } from "./endpoints/createRecipeEndpoint";
import { getRecipeEndpoint } from "./endpoints/getRecipeEndpoint";

dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.post("/signup", signupEndpoint);
app.post("/login", loginEndpoint);
app.get("/user", getUserByTokenEndpoint);
app.get("/user/:id", getUserByIDEndpoint);
app.post("/recipe", createRecipeEndpoint);
app.get("/recipe/:id", getRecipeEndpoint)
