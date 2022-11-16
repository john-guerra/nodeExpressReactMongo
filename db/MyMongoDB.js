import { MongoClient } from "mongodb";

function MyMongoDB() {
  const myDB = {};
  const url = process.env.MONGO_URL || "mongodb://localhost:27017";
  const DB_NAME = "CABallotDonations";
  const DON_COL_NAME = "propositions";

  myDB.getPropositions = async function () {
    let client;
    console.log("getPropositions");
    try {
      client = new MongoClient(url);

      // TODO handle errors
      const colPropositions = client.db(DB_NAME).collection(DON_COL_NAME);

      const query = {};
      console.log("getPropositions running query");
      return await colPropositions.find(query).toArray();
    } catch (e) {
      console.log("getPropositions error", e);
      throw e;
    } finally {
      console.log("getPropositions closing connection");
      await client.close();
    }
  };

  return myDB;
}

export const myDB = MyMongoDB();
