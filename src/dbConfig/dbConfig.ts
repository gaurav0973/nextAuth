import mongoose from 'mongoose';

export async function connect(){
    try {

        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;
        connection.on('conncected', ()=>{
            console.log('Database connected successfully');
        })

        connection.on('error', (err) => {
            console.log('Database connection error:', err);
            process.exit(1); // Exit the process with failure
        })

    } catch (error) {
        console.log('Database connection error:', error);
        process.exit(1);
    }
}