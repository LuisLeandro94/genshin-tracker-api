'use strict';
const mongoose = require('mongoose'),
  ArtifactSet = mongoose.model('ArtifactSet');
exports.list_all_sets = (req, res) => {
  ArtifactSet.find({}, (err, artifactSet) => {
    if (err) res.send(err);
    res.json(artifactSet);
  });
};
exports.create_a_set = (req, res) => {
  let new_artifactSet = new ArtifactSet(req.body);
  new_artifactSet.save((err, artifactSet) => {
    if (err) res.send(err);
    res.json(artifactSet);
  });
};
exports.list_a_set = (req, res) => {
  ArtifactSet.findById(req.params.artifactSetID, (err, artifactSet) => {
    if (err) res.send(err);
    res.json(artifactSet);
  });
};
exports.update_a_set = (req, res) => {
  ArtifactSet.findOneAndUpdate(
    { _id: req.params.artifactSetID },
    req.body,
    { new: true },
    (err, task) => {
      if (err) res.send(err);
      res.json(artifactSet);
    }
  );
};
exports.delete_a_set = (req, res) => {
  ArtifactSet.remove(
    {
      _id: req.params.artifactSetID,
    },
    (err, artifactSet) => {
      if (err) res.send(err);
      res.json({ message: 'artifactSet successfully deleted' });
    }
  );
};
