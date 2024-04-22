import mongoose from "mongoose";
import { User } from "../models/User";

export async function POST(req) {
  const body = await req.json();
  console.log(body);
  const { email, password } = body;
  console.log(email, password);
  //   console.log(body);
  mongoose.connect(process.env.MONGO_URL);
  const createdUser = await User.create(body);
  return Response.json(createdUser);
}
