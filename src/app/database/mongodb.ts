import { MongoClient } from "mongodb";

async function connectToDatabase() {
  const client = new MongoClient("mongodb+srv://zennon-sml:asdf@todolistcluster.zyftt99.mongodb.net/?retryWrites=true&w=majority", {});

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export default connectToDatabase