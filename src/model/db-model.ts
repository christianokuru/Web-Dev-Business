import mongoose,{Schema,models} from 'mongoose';

interface IUser{
  user_name:string,
  full_name:string,
  email: string,
  password:string,
  confirm:string,
  createdAt:string,
  updatedAt:string,
}

const userSchema = new mongoose.Schema({
  user_name :{
    type:String,
  },
  full_name:{
    type:String
  },
   email :{
    type:String,
  },
   password :{
    type:String,
  },
   confirm :{
    type:String,
  },
  createdAt:{
    type:Date,
  },
  updatedAt:{
    type:Date
  }
});

const User = mongoose.models.User||mongoose.model<IUser>('User', userSchema);

export default User;