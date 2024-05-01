import { GeTrackerApi } from "@getracker/api";

const { createClientFromEnv } = require('@getracker/api');

const client: GeTrackerApi = createClientFromEnv();

// client.Items.getItem(1050).then(item => {
//   console.log(`${item.name} has ${item.buyingQuantity} buy offers and is 
//     buying for ~${item.buying}`);
// });

export async function getAllItems() {
  const result = await client.Items.getAllItems();
  return result;
}



