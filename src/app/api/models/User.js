import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (!pass?.length || pass?.length < 5) {
          new Error("password must be at least five characters");
        }
      },
    },
  },
  { timestamps: true }
);

UserSchema.post("validate", function (user) {
  const pass = user.password;
  const salt = bcrypt.genSaltSync(12);
  user.password = bcrypt.hashSync(pass, salt);
});
export const User = models?.User || model("User", UserSchema);
