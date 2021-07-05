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
    res.json(`${weapon.name} was created successfuly!`);
  });
};

exports.create_multiple_weapons = (req, res) => {
  req.body.forEach((element) => {
    try {
      let new_weapon = new Weapon(element);
      new_weapon.save((err, weapon) => {});
    } catch {}
  });
  res.json(` ${weapon.createdCount}weapons were created successfuly!`);
};

exports.list_a_weapon = (req, res) => {
  Weapon.findById(req.params.weaponID, (err, weapon) => {
    if (err) res.send(err);
    res.json(weapon);
  });
};

exports.update_a_weapon = (req, res) => {
  Weapon.findOneAndUpdate(
    { id: req.params.weaponID },
    req.body,
    { new: true },
    (err, task) => {
      if (err) res.send(err);
      res.json(weapon);
    }
  );
};

exports.delete_a_weapon = (req, res) => {
  Weapon.deleteOne(
    {
      id: req.params.weaponID,
    },
    (err, weapon) => {
      if (err) res.send(err);
      res.json({ message: ` ${weapon.name}successfully deleted` });
    }
  );
};

exports.delete_multiple_weapons = (req, res) => {
  Weapon.find &&
    Weapon.deleteMany({}, (err, weapon) => {
      if (err) res.send(err);
      res.json(`${weapon.deletedCount} weapons were deleted`);
    });
};
