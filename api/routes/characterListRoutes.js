'use strict';
module.exports = (app) => {
  const characterList = require('../controllers/characterListController');
  // characterList Routes
  app
    .route('/characters')
    .get(characterList.list_all_characters)
    .post(characterList.create_a_character);
  app
    .route('/characters/:characterID')
    .get(characterList.list_a_character)
    .put(characterList.update_a_character)
    .delete(characterList.delete_a_character);
  app
    .route('/processCharacterList')
    .post(characterList.create_multiple_chars)
    .delete(characterList.delete_multiple_chars);
};
