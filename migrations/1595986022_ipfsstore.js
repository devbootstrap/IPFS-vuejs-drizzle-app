const SimpleIPFSStore = artifacts.require("SimpleIPFSStore");

module.exports = function(deployer) {
  deployer.deploy(SimpleIPFSStore);
};
