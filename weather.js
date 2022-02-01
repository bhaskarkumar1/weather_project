const express = require("express")
const app = express()
// requiring https module
const https= require("https")

app.get("/", function(req, res){

const url ="https://api.openweathermap.org/data/2.5/weather?q=patna&appid=07edf5dad8ce90aca000dbe229198dfe&units=metric"
// create https reques to URL
https.get(url,function(response){
  console.log(response.statusCode);



  // checking the response ie data we are getting from the get request made


  response.on("data",function(data){
// this will give hexa decimal output so we now to parse with Json to string
    // console.log(data);
  const  WeatherData =JSON.parse(data);
    // console.log(WeatherData);
    const temp =WeatherData.main.temp
    console.log(temp);
  });

})


  res.send("hello world");
});





app.listen(3000,function(req,res){
  console.log("Server started on port 3000");
});
