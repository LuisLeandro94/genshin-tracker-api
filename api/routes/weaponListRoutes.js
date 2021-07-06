'use strict';
module.exports = (app) => {
  const weaponList = require('../controllers/weaponListController');
  // characterList Routes
  app
    .route('/weapons')
    .get(weaponList.list_all_weapons)
    .post(weaponList.create_a_weapon);
  app
    .route('/weapons/:weaponID')
    .get(weaponList.list_a_weapon)
    .put(weaponList.update_a_weapon)
    .delete(weaponList.delete_a_weapon);
  app
    .route('/processWeaponsList')
    .post(weaponList.create_multiple_weapons)
    .delete(weaponList.delete_multiple_weapons);
};
