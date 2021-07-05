'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CharacterSchema = new Schema({
  id: {
    type: String,
    required: 'Enter character id',
  },
  name: {
    type: String,
    required: 'Enter character name',
  },
  tier: {
    type: String,
    required: 'Enter character tier',
  },
  rarity: {
    type: Number,
    required: 'Enter character rarity',
  },
  weapon: {
    type: String,
    required: 'Enter character weapon type',
  },
  element: {
    type: String,
    enum: ['Pyro', 'Cryo', 'Hydro', 'Anemo', 'Electro', 'Geo', 'Dendro'],
  },
  description: {
    type: String,
    required: 'Enter character description',
  },
  region: {
    type: String,
    enum: [
      'Mondstadt',
      'Liyue',
      'Inazuma',
      'Sumero',
      'Fontaine',
      'Natlan',
      'Snezhnaya',
      'Khaenri’ah',
      'Celestia',
    ],
  },
  faction: {
    type: [
      {
        type: String,
        enum: [
          'Illuminated Beast',
          'Inazuma Bakufu',
          'Abyss Order',
          'Adepti',
          "Adventurers' Guild",
          'Kanjobugyo',
          'Kamisato House',
          'Knights of Favonius',
          'Benny’s Adventure Team',
          'Liyue Qixing',
          'Church of Favonius',
          'Court of Fontaine',
          'Millelith',
          'Ministry of Civil Affairs',
          'Mondstadt Aristocracy',
          'Shenglu Hall',
          'Sumeru Academia',
          'Eclipse Dinasty',
          'Eight Trades',
          'Eleven Fatui Harbingers',
          'Teapot Spirits',
          'Tenryou Comission',
          'The Crux',
          'The Four Winds',
          'The Seven',
          'Thousand Winds',
          'Treasure Hoarders',
          'Tri-Commission',
          'Fatui',
          'Feiyun Commerce Guild',
          'Four Drunkards',
          'Guhua Clan',
          'Hexenzirkel',
          'Huishan Hall',
          'Wanderer’s Troupe',
          'Wangsheng Funeral Parlor',
          'Yaksha',
          'Yinyuan Hall',
        ],
      },
    ],
  },
  image: {
    type: String,
    required: 'Enter character’s Image URL',
  },
  quote: {
    type: String,
    required: "Enter character's quote",
  },
  icon: {
    type: String,
    required: 'Enter character’s Icon URL',
  },
  squareCard: {
    type: String,
    required: 'Enter character’s SquareCard URL',
  },
  birthday: {
    type: String,
    required: 'Enter character’s Birth Date',
  },
  constellation: {
    type: String,
    required: 'Enter character’s constellation',
  },
});
module.exports = mongoose.model('Characters', CharacterSchema);
