'use strict';
const mongoose = require('mongoose'),
  Character = mongoose.model('Characters');
exports.list_all_characters = (req, res) => {
  Character.find({}, (err, character) => {
    if (err) res.send(err);
    res.json(character);
  });
};
exports.create_a_character = (req, res) => {
  let new_character = new Character(req.body);
  new_character.save((err, character) => {
    if (err) res.send(err);
    res.json(character);
  });
};
exports.list_a_character = (req, res) => {
  Character.findById(req.params.characterID, (err, character) => {
    if (err) res.send(err);
    res.json(character);
  });
};
exports.update_a_character = (req, res) => {
  Character.findOneAndUpdate(
    { _id: req.params.characterID },
    req.body,
    { new: true },
    (err, task) => {
      if (err) res.send(err);
      res.json(character);
    }
  );
};
exports.delete_a_character = (req, res) => {
  Character.remove(
    {
      _id: req.params.characterID,
    },
    (err, character) => {
      if (err) res.send(err);
      res.json({ message: 'Character successfully deleted' });
    }
  );
};
