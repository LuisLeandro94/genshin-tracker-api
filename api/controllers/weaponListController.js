'use strict';
const mongoose = require('mongoose'),
  Weapon = mongoose.model('Weapons');
exports.list_all_weapons = (req, res) => {
  Weapon.find({}, (err, weapon) => {
    if (err) res.send(err);
    res.json(weapon);
  });
};
exports.create_a_weapon = (req, res) => {
  let new_weapon = new Weapon(req.body);
  new_weapon.save((err, weapon) => {
    if (err) res.send(err);
    res.json(weapon);
  });
};
exports.list_a_weapon = (req, res) => {
  Weapon.findById(req.params.weaponID, (err, weapon) => {
    if (err) res.send(err);
    res.json(weapon);
  });
};
exports.update_a_weapon = (req, res) => {
  Weapon.findOneAndUpdate(
    { _id: req.params.weaponID },
    req.body,
    { new: true },
    (err, task) => {
      if (err) res.send(err);
      res.json(weapon);
    }
  );
};
exports.delete_a_weapon = (req, res) => {
  Weapon.remove(
    {
      _id: req.params.weaponID,
    },
    (err, weapon) => {
      if (err) res.send(err);
      res.json({ message: 'Weapon successfully deleted' });
    }
  );
};
