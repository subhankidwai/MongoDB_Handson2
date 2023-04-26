const {MongoClient} = require("mongodb")

const url = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(url)

// Query the collection ""employee"" and list all the documents
let fetchDbData= async ()=>{
    let result=await client.connect()
    let db=result.db("Human_Resource")
    let collection=db.collection("employee")
    let responce= await collection.find({}).toArray()
    console.log(responce)
}
// fetchDbData();

// Query the collection ""employee"" and list the employees who are having salary more than 30000

let filterSalary= async ()=>{
    let result=await client.connect()
    let db=result.db("Human_Resource")
    let collection=db.collection("employee")
    let responce= await collection.find({"salary":{$gt:"30000"}}).toArray()
    console.log(responce)
}
// filterSalary()

// Query the collection ""employee"" and list the employees who are having experience more than 2 years.
let experience= async ()=>{
    let result=await client.connect()
    let db=result.db("Human_Resource")
    let collection=db.collection("employee")
    let responce= await collection.find({"overallExp":{$gt:"1"}}).toArray()
    console.log(responce)
}
// experience()

// Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year 

let graduatedExperience= async ()=>{
    let result=await client.connect()
    let db=result.db("Human_Resource")
    let collection=db.collection("employee")
    let responce= await collection.find({"overallExp":{$gt:"1"},"yearGrad":{$gt:"2015"}}).toArray()
    console.log(responce)
}
// graduatedExperience()

// Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.

let updateSalary= async ()=>{
    let result=await client.connect()
    let db=result.db("Human_Resource")
    let collection=db.collection("employee")
    let responce= await collection.updateMany({"salary":{$gt:"35000"}},{$set:{"salary":"30000"}})
    console.log(responce)
}
// updateSalary()

// Delete all the documents from ""employee"" where last company is Y"

let deleteY= async ()=>{
    let result=await client.connect()
    let db=result.db("Human_Resource")
    let collection=db.collection("employee")
    let responce= await collection.deleteMany({"lastCompany":"Z"})
    console.log(responce)
}
deleteY()



/* 
"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1640781204638-employee.json
Create a database , give it name like ""Human_Resource"". Create a collection inside this named ""employee""
*/


/* 
[{"firstName": "John","lastName": "Doe","salary": "25000","department": "HR","lastCompany": "X","lastSalary": "10000","overallExp": "2","contactInfo": "1234567890","yearGrad": "2016","gradStream": "CSE"},{"firstName": "Rohan","lastName": "Jame","salary": "30000","department": "Technical","lastCompany": "Y","lastSalary": "15000","overallExp": "1","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"},{"firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "20000","overallExp": "1","contactInfo": "123567890","yearGrad": "2019","gradStream": "ECE"},{"firstName": "Sao","lastName": "Avika","salary": "30000","department": "Sales","lastCompany": "Y","lastSalary": "15000","overallExp": "2","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"},{"firstName": "Jame","lastName": "roh","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "15000","overallExp": "2","contactInfo": "123567890","yearGrad": "2019","gradStream": "EEE"},{"firstName": "Rohan","lastName": "Jame","salary": "30000","department": "Technical","lastCompany": "Y","lastSalary": "15000","overallExp": "1","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"},{"firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "20000","overallExp": "1","contactInfo": "123567890","yearGrad": "2019","gradStream": "ECE"},{"firstName": "Sao","lastName": "Avika","salary": "30000","department": "Sales","lastCompany": "Y","lastSalary": "15000","overallExp": "2","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"},{"firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "15000","overallExp": "2","contactInfo": "123567890","yearGrad": "2019","gradStream": "EEE"},{"firstName": "Rohan","lastName": "Jame","salary": "30000","department": "Technical","lastCompany": "Y","lastSalary": "15000","overallExp": "1","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"},{"firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "20000","overallExp": "1","contactInfo": "123567890","yearGrad": "2019","gradStream": "ECE"},{"firstName": "Sao","lastName": "Avika","salary": "30000","department": "Sales","lastCompany": "Y","lastSalary": "15000","overallExp": "2","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"},{"firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "15000","overallExp": "2","contactInfo": "123567890","yearGrad": "2019","gradStream": "EEE"}]
*/