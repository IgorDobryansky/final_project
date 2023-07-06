// /* eslint-disable no-console */
// import { MongoClient, ServerApiVersion } from "mongodb";
// import { promisify } from "util";

// const uri =
//   "mongodb+srv://ar4er:cfvlehfr312@magazine.opnryzk.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true
//   }
// });

// const connect = promisify(client.connect).bind(client);
// const pingCommand = promisify(client.db("admin").command).bind(
//   client.db("admin")
// );

// // eslint-disable-next-line import/prefer-default-export
// export async function run() {
//   try {
//     await connect();
//     await pingCommand({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     await client.close();
//   }
// }

// run().catch(console.dir);
