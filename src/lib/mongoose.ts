'use server';
import mongoose from 'mongoose';
// singleton connection
let isConnected: boolean = false;
export const connectDB = async () => {
	if (!process.env.MONGODB_URL) {
		throw new Error('MONGODB_URL is not defined');
	}
	if (isConnected) {
		console.log('Already connected to database');
		return;
	}
	try {
		await mongoose.connect(process.env.MONGODB_URL, {
			dbName: 'Academy',
		});
		isConnected = true;
		console.log('Connected to database successfully');
	} catch (error) {
		console.error('Failed to connect to database', error);
	}
};
