const express = require('express');
const router = express.Router();
var Celebrity = require('../models/celebrity');

/*get celebrities listing*/

router.get('/celebrities',(req, res, next)=> {

  Celebrity.find({},(err, celebrities)=>{
    if(err){
      next(err);
    } else {
      res.render('celebrities/index', {celebrities: celebrities});
    }
  });
});

router.get('/celebrities/new', (req, res, next)=>{
  res.render('celebrities/new');
});

router.post('/celebrities', (req, res, next)=>{
  const celebrityInfo = {
    name:         req.body.name,
    occupation:   req.body.occupation,
    catchphrase:  req.body.catchphrase
  };
  const newCelebrity = new Celebrity(celebrityInfo);

  newCelebrity.save((err)=>{
    if(err){
      next(err);
    }else{
      res.redirect('/celebrities');
    }
  });
});


router.get('/celebrities/:id/show', (req, res, next) => {
  Celebrity.findById(req.params.id, (err, celebrity) => {
    if(err) {next(err);}
    res.render('celebrities/show', { celebrity: celebrity} );
  });
});


router.get('/celebrities/:id/edit', (req, res, next)=>{
  Celebrity.findById(req.params.id, (err, celebrity)=>{
      if (err) { next(err); }
      res.render('celebrities/edit', {celebrity: celebrity});
  });
});

router.post('/celebrities/:id', (req, res, next)=>{
   const updateCelebrity = {
     name:        req.body.name,
     occupation:  req.body.occupation,
     catchphrase: req.body.catchphrase
   };
   Celebrity.findByIdAndUpdate(req.params.id, updateCelebrity,(err, celebrity)=>{
     if (err) { next(err); }
  res.redirect('/celebrities');
   });

});

router.get('/celebrities/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Celebrity.deleteOne({ _id: id }, (err) => {
    if (err) { next(err); }
    res.redirect('/celebrities');
  });
});

module.exports = router;
