import * as bcrypt from 'bcrypt';
import { model,Schema } from 'mongoose';
const SALT_WORK_FACTOR = 10;

export interface UserInterface {
  name: string;
  email: string;
  password: string;
  token: string;
}

const schema = new Schema<UserInterface>();

schema.pre('save', function (next) {
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
      if (err) {
        return next(err);
      }
      bcrypt.hash(this.password, salt, (hashErr, hash) => {
        if (hashErr) {
          return next(hashErr);
        }
        this.password = hash;
        next();
      });
    });
  }
});

schema.methods.comparePassword = async function (candidatePassword: string) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) {
        reject(err);
      } else {
        resolve(isMatch);
      }
    });
  });
};

export const User = model<UserInterface>('User', schema);
