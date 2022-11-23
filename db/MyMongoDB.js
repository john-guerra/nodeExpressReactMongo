import { MongoClient, ObjectID } from "mongodb";

function MyMongoDB() {
  const myDB = {};
  const url = process.env.MONGO_URL || "mongodb://localhost:27017";
  const DB_NAME = "CABallotDonations";
  const DON_COL_NAME = "donations";
  const PROP_COL_NAME = "propositions";

  myDB.getPropositions = async function () {
    let client;
    console.log("getPropositions");
    try {
      client = new MongoClient(url);

      // TODO handle errors
      const colPropositions = client.db(DB_NAME).collection(PROP_COL_NAME);

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

  myDB.getDonations = async function ({
    query = "",
    page = 0,
    page_size = 20,
  } = {}) {
    let client;
    console.log("getDonations", query, page, page_size);
    try {
      client = new MongoClient(url);

      // TODO handle errors
      const colDonations = client.db(DB_NAME).collection(DON_COL_NAME);

      console.log("getDonations running query");
      return await colDonations
        .find({ "Contributor Name": new RegExp(`.*${query}.*`, "gi") })
        .skip(page * page_size)
        .limit(page_size)
        .toArray();
    } catch (e) {
      console.log("getDonations error", e);
      throw e;
    } finally {
      console.log("getDonations closing connection");
      await client.close();
    }
  };

  myDB.createComment = async function (proposition_id, comment) {
    // TODO check that the data passed is correct

    let client;
    console.log("createComment");
    try {
      client = new MongoClient(url);

      // TODO handle errors
      const colPropositions = client.db(DB_NAME).collection(DON_COL_NAME);

      const query = { _id: new ObjectID(proposition_id) };
      const updateDoc = { $push: { comments: comment } };
      const options = { upsert: true };
      console.log("createComment running query");
      return await colPropositions.updateOne(query, updateDoc, options);
    } catch (e) {
      console.log("createComment error", e);
      throw e;
    } finally {
      console.log("createComment closing connection");
      await client.close();
    }
  };

  return myDB;
}

export const myDB = MyMongoDB();
