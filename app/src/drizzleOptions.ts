import SimpleIPFSStore from '@/contracts/SimpleIPFSStore.json'

const options = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  },
  contracts: [SimpleIPFSStore],
  polls: {
    // check accounts every 15 seconds
    accounts: 15000
  }
}

export default options
