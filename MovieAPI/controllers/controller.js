const PI = require('../models/model.js');

exports.create = function (req, res) {
  PI.create(req.body).then(function(pi){
  res.send(pi);
  });
};

exports.delete = function (req, res, next) {
  PI.findByIdAndRemove({_id: req.params.id}).then(function(pi){
    res.send(pi);
  }).catch(next);
};

exports.details = function (req, res) {
  PI.find({}).then(function(pi){
  res.send(pi);
  });
};

exports.update = function (req, res, next) {
  PI.findByIdAndUpdate({_id: req.params.id},
                   req.body).then(function(){
    PI.findOne({_id: req.params.id}).then(function(pi){
      res.send(pi);
    });
  }).catch(next);
};

exports.listAllPIs = function (req, res, next) {
  PI.find({}).then(function(pi){
    res.render('listPIs', {pis: pi});
  }).catch(next);
};

exports.create = function (req, res, next) {
  PI.create(data).then(function(pi){    
     res.redirect('/api/listall');
  }).catch(next);
};

exports.test = function (req, res) {
  res.render('PI');
};