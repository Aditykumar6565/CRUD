import mongoose from "mongoose";

const connectToMongo = async () => {
    try {
        const res = await mongoose.connect("mongodb://127.0.0.1:27017/crud");
        if (res) {
            console.log("connected successfully");
        }
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
};

export default connectToMongo;

// remember the data created is not crud-mern it is crud 