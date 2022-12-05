const {client} = require("./dbconfig.js");

const singleData = async()=>{
    try {
        const mydatabase = client.db("school");
        const collection= mydatabase.collection("teacher");

        const myData = [
            {name:"ariyan", age:25},
            {name:"kawser", age:35},
            {name:"yeasir", age:45},
            {name:"arafat", age:15}
        ]

        const result = await collection.insertMany(myData);
        console.log(`${result.insertedCount} documents were inserted`);
        
    } catch (error) {
        console.log(error);
    } finally{
        await client.close();
    }

}

singleData();