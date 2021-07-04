'use strict';
module.exports = (app) => {
  const artifactSetList = require('../controllers/artifactSetListController');
  // characterList Routes
  app
    .route('/artifactSets')
    .get(artifactSetList.list_all_sets)
    .post(artifactSetList.create_a_set);
  app
    .route('/artifactSets/:artifactSetID')
    .get(artifactSetList.list_a_set)
    .put(artifactSetList.update_a_set)
    .delete(artifactSetList.delete_a_set);
};
