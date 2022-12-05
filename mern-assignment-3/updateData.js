const {client} = require("./dbconfig.js");

const updateData = async()=>{
    try {
        const mydatabase = client.db("school");
        const collection= mydatabase.collection("teacher");

        const query = {name:"ariyan"};
        const update = {$set:{name:"ariyan arif"}};


        const result = await collection.updateOne(query, update);
        console.log(
            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
          );
        
    } catch (error) {
        console.log(error);
    } finally{
        await client.close();
    }

}

updateData();