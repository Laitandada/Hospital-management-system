import { expressjwt } from "express-jwt";
import User from "../model/user/Register";

require("dotenv").config();

export const requireLogin = expressjwt({
  secret: process.env.JWTPRIVATEKEY,
  algorithms: ["HS256"],
  userProperty: "auth",
}).unless({
  path: ["/api/doctorsignin", "/api/doctorregister"],
});
