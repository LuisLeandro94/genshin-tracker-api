'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Set = require('./artifactSetListModel');
const ArtifactSchema = new Schema({
  id: {
    type: Number,
    required: 'Enter artifact id',
  },
  name: {
    type: String,
    required: 'Enter artifact name',
  },
  type: {
    type: String,
    required: 'Enter artifact type',
  },
  rarity: {
    type: Number,
    required: 'Enter artifact rarity',
  },
  description: {
    type: String,
    required: 'Enter artifact description',
  },
  lore: {
    type: String,
    required: 'Enter artifact lore',
  },
  location: {
    type: String,
    required: 'Enter artifact location',
  },
  image: {
    type: String,
    required: 'Enter artifact’s Image URL',
  },
  artifactSet: {
    type: Schema.Types.ObjectId,
    ref: 'Artifact Set',
  },
});
module.exports = mongoose.model('Artifacts', ArtifactSchema);
