const express = require('express');
const app = express();
const serieRoutes = express.Router();

let Serie = require('../model/Serie');

// api to add serie
serieRoutes.route('/add').post(function (req, res) {
  let serie = new Serie(req.body);
  serie.save()
    .then(serie => {
        res.status(200).json({'status': 'success','mssg': 'serie added successfully'});
    })
    .catch(err => {
        res.status(409).send({'status': 'failure','mssg': 'unable to save to database'});
    });
});

// api to get series
serieRoutes.route('/').get(function (req, res) {
  Serie.find(function (err, series){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','series': series});
    }
  });
});

// api to get serie
serieRoutes.route('/serie/:name').get(function (req, res) {
  let name = req.params.name;
  Serie.findById(name, function (err, serie){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','serie': serie});
    }
  });
});

// api to update route
serieRoutes.route('/update/:name').put(function (req, res) {
    Serie.findById(req.params.name, function(err, serie) {
    if (!serie){
      res.status(400).send({'status': 'failure','mssg': 'Unable to find data'});
    } else {
        serie.name = req.body.name;
        serie.genero = req.body.genero;
        serie.temporadas = req.body.temporadas;
        serie.classificacao = req.body.classificacao;

        serie.save().then(business => {
          res.status(200).json({'status': 'success','mssg': 'Update complete'});
      })
    }
  });
});

// api for delete
serieRoutes.route('/delete/:name').delete(function (req, res) {
  Serie.findByIdAndRemove({_id: req.params.name}, function(err,){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','mssg': 'Delete successfully'});
    }
  });
});

module.exports = serieRoutes;