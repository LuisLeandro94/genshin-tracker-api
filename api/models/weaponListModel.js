'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const WeaponSchema = new Schema({
  id: {
    type: String,
    required: 'Enter weapon id',
  },
  name: {
    type: String,
    required: 'Enter weapon name',
  },
  type: {
    type: String,
    required: 'Enter weapon type',
  },
  rarity: {
    type: Number,
    required: 'Enter weapon rarity',
  },
  baseAtk: {
    type: Number,
    required: 'Enter weapon Base Attack',
  },
  subStatType: {
    type: String,
    required: 'Enter weapon substat type',
  },
  subStat: {
    type: Number,
    required: 'Enter weapon substat',
  },
  abilityName: {
    type: String,
    required: 'Enter weapon’s ability name',
  },
  abilityDescription: {
    type: String,
    required: 'Enter weapon’s ability description',
  },
  description: {
    type: String,
    required: 'Enter weapon’s description',
  },
  lore: {
    type: String,
    required: 'Enter weapon’s lore',
  },
  image: {
    type: String,
    required: 'Enter weapon’s Image URL',
  },
  location: {
    type: String,
    default: 'Enter weapon’s location',
  },
  stats: {
    type: String,
    default: null,
  },
});
module.exports = mongoose.model('Weapons', WeaponSchema);
