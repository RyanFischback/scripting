const {createClientFromEnv} = require('@getracker/api');

const client = createClientFromEnv();

client.Items.getItem(1050).then(item => {
  console.log(`${item.name} has ${item.buyingQuantity} buy offers and is 
    buying for ~${item.buying}`);
});