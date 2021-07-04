'use strict';
module.exports = (app) => {
  const artifactList = require('../controllers/artifactListController');
  // characterList Routes
  app
    .route('/artifacts')
    .get(artifactList.list_all_artifacts)
    .post(artifactList.create_an_artifact);
  app
    .route('/artifacts/:artifactID')
    .get(artifactList.list_an_artifact)
    .put(artifactList.update_an_artifact)
    .delete(artifactList.delete_an_artifact);
};
