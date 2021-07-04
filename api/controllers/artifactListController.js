'use strict';
const mongoose = require('mongoose'),
  Artifact = mongoose.model('Artifacts');
exports.list_all_artifacts = (req, res) => {
  Artifact.find({}, (err, artifact) => {
    if (err) res.send(err);
    res.json(artifact);
  });
};
exports.create_an_artifact = (req, res) => {
  let new_artifact = new Artifact(req.body);
  new_artifact.save((err, artifact) => {
    if (err) res.send(err);
    res.json(artifact);
  });
};
exports.list_an_artifact = (req, res) => {
  Artifact.findById(req.params.artifactID, (err, artifact) => {
    if (err) res.send(err);
    res.json(artifact);
  });
};
exports.update_an_artifact = (req, res) => {
  Artifact.findOneAndUpdate(
    { _id: req.params.artifactID },
    req.body,
    { new: true },
    (err, task) => {
      if (err) res.send(err);
      res.json(artifact);
    }
  );
};
exports.delete_an_artifact = (req, res) => {
  Artifact.remove(
    {
      _id: req.params.artifactID,
    },
    (err, artifact) => {
      if (err) res.send(err);
      res.json({ message: 'Artifact successfully deleted' });
    }
  );
};
