//  This code converts the propositions into donations

import { MongoClient } from "mongodb";
import { group } from "d3-array";

const url = process.env.MONGO_URL || "mongodb://localhost:27017";
const DB_NAME = "CABallotDonations";
const DON_COL_NAME = "donations";

async function getDonations() {
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
}

async function insertPropositions(propositions) {
  let client;

  try {
    client = new MongoClient(url);

    // TODO handle errors
    const colDonations = client.db(DB_NAME).collection("propositions");

    return await colDonations.insertMany(propositions);
  } catch (e) {
    console.log("insertPropositions error", e);
    throw e;
  } finally {
    console.log("insertPropositions closing connection");
    await client.close();
  }
}

function getPropositionsFromDonations(donations) {
  const pMap = group(
    donations.filter((d) => d["Ballot Measure(s)"]),
    (d) => {
      const [position, proposition] = d["Ballot Measure(s)"].split(": ");
      d.position = position;
      return proposition;
    }
  );

  return Array.from(pMap.entries()).map(([name, donations]) => ({
    name,
    donations,
  }));
}
async function runIt() {
  const donations = await getDonations();
  console.log("got donations", donations);
  const propositions = getPropositionsFromDonations(donations);
  const res = await insertPropositions(propositions);
  console.log("Inserting propositions", propositions.length, res);
}

runIt();
