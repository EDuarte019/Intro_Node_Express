const express = require('express');
const app = express();
const path = require("path")
const fetch = require("node-fetch")

fetch("https://swapi.co/api/people")
  .then(res => res.json())
  .then(json => {
    name = json.results[0].name;
     height = json.results[0].height;
    mass = json.results[0].mass;
    gender = json.results[0].gender;

    name1 = json.results[1].name;
    height1 = json.results[1].height;
   mass1 = json.results[1].mass;
   gender1 = json.results[1].gender;

   name2 = json.results[2].name;
   height2 = json.results[2].height;
  mass2 = json.results[2].mass;
  gender2 = json.results[2].gender;

  name3 = json.results[3].name;
  height3 = json.results[3].height;
 mass3 = json.results[3].mass;
 gender3 = json.results[3].gender;

 name4 = json.results[4].name;
 height4 = json.results[4].height;
mass4 = json.results[4].mass;
gender4 = json.results[4].gender;
  });

  app.use(express.static(__dirname + "/public"))
  app.set('views',path.join(__dirname,"views"))
  app.set("view engine", "hbs")

  app.get('/', (req, res) => {
    res.render('index', {
      "username" : name,
      "height" : height,
      "mass" : mass,
      "gender" : gender,
    })
  })

  app.get('/luke', (req, res) => {
    res.render('luke', {
      "username1" : name1,
      "height1" : height1,
      "mass1" : mass1,
      "gender1" : gender1,
    })
  })
  
  app.get('/people', (req, res) => {
    res.render('people', {
      "username2" : name2,
      "height2" : height2,
      "mass2" : mass2,
      "gender2" : gender2,
    })
  })

  app.get('/about', (req, res) => {
    res.render('about', {
      "username3" : name3,
      "height3" : height3,
      "mass3" : mass3,
      "gender3" : gender3,
    })
  })

  app.get('/person', (req, res) => {
    res.render('person', {
      "username4" : name4,
      "height4" : height4,
      "mass4" : mass4,
      "gender4" : gender4,
    })
  })
  // app.get('/people', async (req, res) => {
  //   const fetchPeople = await fetch("https://swapi.co/api/people");
  //   const peopleData = await fetchPeople.json();
    
  //   const [luke,C3PO,R2D2,DarthVader,Leia] = peopleData.results;

  //   console.log(luke);

  //   res.render('index', {
  //     people : peopleData.results,
  //   })
  
  // })

  // app.get('/luke', async (req, res) => {
  //   const fetchPeople = await fetch("https://swapi.co/api/people");
  //   const peopleData = await fetchPeople.json();
    
  //   const [luke,C3PO,R2D2,DarthVader,Leia] = peopleData.results;

  //   console.log(luke);
    
  //   res.render('luke', {
  //     person : luke,
  //   })
  
  // })

  app.listen(8080);