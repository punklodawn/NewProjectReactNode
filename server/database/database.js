//Connection to our database
import mongoose from 'mongoose';


const mongoConnect = async () => {
    console.log(process.env.MONGO_URI);
try{
    const connect = await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    console.log(`db is connected : ${connect.connection.host}`);
    }catch(error){
    console.log(`Error: ${error.message}`);
}}

export default mongoConnect;
