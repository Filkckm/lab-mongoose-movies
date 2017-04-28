const mongoose  = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose.connect('mongodb://localhost:27017/mongoose-movies');

const celebrities = [

  {
    name:         "Johnny Bravo",
    occupation:   "Girls, chicks, ladies and women",
    catchphrase:  "Hey mama!"
  },
  {
    name:         "Tarek KIZ",
    occupation:   "Rapper",
    catchphrase:  "Wenn dus magst bist du cool, wenn nicht bist du ein Bastard"
  },
  {
    name:         "Alec Monopoly",
    occupation:   "Graffiti sprayer and artist",
    catchphrase:  "never show your face"
  }
];

Celebrity.create(celebrities,(err, docs) =>{

    if(err){
      throw err;
    }
    docs.forEach((celebrity)=>{
      console.log(celebrity.name);
    });
    mongoose.connection.close();
});
