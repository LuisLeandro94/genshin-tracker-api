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
    res.json(`${artifactSet.name} was created successfuly!`);
  });
};

exports.create_multiple_sets = (req, res) => {
  req.body.forEach((element) => {
    try {
      let new_artifactSet = new ArtifactSet(element);
      new_artifactSet.save((err, artifactSet) => {});
    } catch {}
  });
  res.json(`All artifactSets were created successfuly!`);
};

exports.list_a_set = (req, res) => {
  ArtifactSet.findById(req.params.artifactSetID, (err, artifactSet) => {
    if (err) res.send(err);
    res.json(artifactSet);
  });
};

exports.update_a_set = (req, res) => {
  ArtifactSet.findOneAndUpdate(
    { id: req.params.artifactSetID },
    req.body,
    { new: true },
    (err, task) => {
      if (err) res.send(err);
      res.json(artifactSet);
    }
  );
};

exports.delete_a_set = (req, res) => {
  ArtifactSet.deleteOne(
    {
      id: req.params.artifactSetID,
    },
    (err, artifactSet) => {
      if (err) res.send(err);
      res.json({ message: ` ${artifactSet.name} successfully deleted` });
    }
  );
};

exports.delete_multiple_sets = (req, res) => {
  ArtifactSet.find &&
    ArtifactSet.deleteMany({}, (err, artifactSet) => {
      if (err) res.send(err);
      res.json(`${artifactSet.deletedCount} artifactSets were deleted`);
    });
};
