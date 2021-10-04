import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: { type: String, unique: true, required: true},
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true},
})

// Lånat lite härifrån: https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1
// Hashar och saltar lösenord ifall passwordfältet modifieras
UserSchema.pre("save", async function(next){
    const user = this; 
    if (!user.isModified("password")){
        return next();
    }
    
    // salt o hash med bcrypt
    // https://www.npmjs.com/package/bcryptjs
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(user.password,salt);
    
    user.password = hash;

    next();
});

UserSchema.pre("findOneAndUpdate", async function(next){
    if (!this._update.$set.password){
        return next();
    }
    
    // salt o hash med bcrypt
    // https://www.npmjs.com/package/bcryptjs
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(this._update.$set.password,salt);
    
    this._update.$set.password = hash;

    next();
});

export default mongoose.model("User",UserSchema,"users");