import { MongoClient } from "mongodb";

function MyMongoDB() {
  const myDB = {};
  const url = process.env.MONGO_URL || "mongodb://localhost:27017";
  const DB_NAME = "CABallotDonations";
  const DON_COL_NAME = "donations";

  myDB.getDonations = async function () {
    let client;
    console.log("getDonations");
    try {
      client = new MongoClient(url);

      // TODO handle errors
      const colDonations = client.db(DB_NAME).collection(DON_COL_NAME);

      const query = {};
      console.log("getDonations running query");
      return await colDonations.find(query).toArray();
    } catch (e) {
      console.log("getDonations error", e);
      throw e;
    } finally {
      console.log("getDonations closing connection");
      await client.close();
    }
  };

  return myDB;
}

export const myDB = MyMongoDB();
