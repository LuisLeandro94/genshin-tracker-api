'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArtifactSetSchema = new Schema({
  id: {
    type: String,
    required: 'Enter artifact set id',
  },
  name: {
    type: String,
    required: 'Enter artifact set name',
  },
  maxRarity: {
    type: Number,
    required: 'Enter artifact set max rarity',
  },
  twoPieceBonus: {
    type: String,
    required: 'Enter artifact set two piece bonus',
  },
  fourPieceBonus: {
    type: String,
    required: 'Enter artifact set four piece bonus',
  },
});
module.exports = mongoose.model('ArtifactSet', ArtifactSetSchema);
