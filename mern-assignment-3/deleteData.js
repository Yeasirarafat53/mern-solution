const {client} = require("./dbconfig.js");

const deleteData = async()=>{
    try {
        const mydatabase = client.db("school");
        const collection= mydatabase.collection("teacher");

        const query = {name:"ariyan arif"};
        


        const result = await collection.deleteOne(query);
        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
          } else {
            console.log("No documents matched the query. Deleted 0 documents.");
          }
        
    } catch (error) {
        console.log(error);
    } finally{
        await client.close();
    }

}
deleteData();