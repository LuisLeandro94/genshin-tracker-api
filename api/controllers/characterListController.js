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
    res.json(`${character.name} was created successfuly!`);
  });
};

exports.create_multiple_chars = (req, res) => {
  req.body.forEach((element) => {
    try {
      let new_character = new Character(element);
      new_character.save((err, character) => {});
    } catch {}
  });
  res.json('Characters were created successfuly!');
};

exports.list_a_character = (req, res) => {
  Character.findById(req.params.characterID, (err, character) => {
    if (err) res.send(err);
    res.json(character);
  });
};

exports.update_a_character = (req, res) => {
  Character.findOneAndUpdate(
    { id: req.params.characterID },
    req.body,
    { new: true },
    (err, task) => {
      if (err) res.send(err);
      res.json(character);
    }
  );
};

exports.delete_a_character = (req, res) => {
  Character.deleteOne(
    {
      id: req.params.characterID,
    },
    (err, character) => {
      if (err) res.send(err);
      res.json({ message: ` ${character.name}successfully deleted` });
    }
  );
};

exports.delete_multiple_chars = (req, res) => {
  Character.find &&
    Character.deleteMany({}, (err, character) => {
      if (err) res.send(err);
      res.json(`${character.deletedCount} characters were deleted`);
    });
};
