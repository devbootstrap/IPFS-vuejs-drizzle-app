pragma solidity >= 0.5.0 < 0.7.0;

contract SimpleIPFSStore {
  string cid;
  constructor() public {
  }

  function set(string memory _cid) public {
    cid = _cid;
  }

  function get() public view returns (string memory) {
    return cid;
  }
}
