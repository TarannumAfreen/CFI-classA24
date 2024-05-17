import mongoose from "mongoose";
async function connectoDB(){
    try {
        await mongoose.connect('mongodb+srv://tarannumafren:8374405563@tarannumcluster.v5pzzqm.mongodb.net/mongodb-a24');
        console.log('DB is Connected Successfully');
    } catch (error) {
        console.error(error);
    }
}
connectoDB();

export default connectoDB;