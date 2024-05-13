import { Schema, model, models } from "mongoose";
import { User } from "../types/user";

const UserSchema = new Schema<User>(
  {
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    username: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
    },
    dob: {
      type: Schema.Types.String,
      required: true,
    },
    phone_number: {
      type: Schema.Types.String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = models?.users || model('users', UserSchema);

export default UserModel;
