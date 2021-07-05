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
    res.json(`${artifact.name} was created successfuly!`);
  });
};

exports.create_multiple_artifacts = (req, res) => {
  req.body.forEach((element) => {
    try {
      let new_artifact = new Artifact(element);
      new_artifact.save((err, artifact) => {});
    } catch {}
  });
  res.json(` ${artifact.createdCount} artifacts were created successfuly!`);
};

exports.list_an_artifact = (req, res) => {
  Artifact.findById(req.params.artifactID, (err, artifact) => {
    if (err) res.send(err);
    res.json(artifact);
  });
};

exports.update_an_artifact = (req, res) => {
  Artifact.findOneAndUpdate(
    { id: req.params.artifactID },
    req.body,
    { new: true },
    (err, task) => {
      if (err) res.send(err);
      res.json(artifact);
    }
  );
};

exports.delete_an_artifact = (req, res) => {
  Artifact.deleteOne(
    {
      id: req.params.artifactID,
    },
    (err, artifact) => {
      if (err) res.send(err);
      res.json({ message: ` ${artifact.name} successfully deleted` });
    }
  );
};

exports.delete_multiple_artifacts = (req, res) => {
  Artifact.find &&
    Artifact.deleteMany({}, (err, artifact) => {
      if (err) res.send(err);
      res.json(`${artifact.deletedCount} artifacts were deleted`);
    });
};
