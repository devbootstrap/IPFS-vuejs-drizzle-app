<template>
  <form enctype="multipart/form-data">
    <h2>IPFS Form</h2>
    <p>
      <input  type="file"
              @change="handleFileChange"
              accept="image/*"/>
    </p>
    <p>{{ cid }}</p>
    <button id='btnSubmit'
            @click='onSubmit'
            outlined
            color='primary'>
      Submit File to IPFS
    </button>
  </form>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import ipfs from '../store/ipfs'

@Component({
  name: 'IPFSForm',
  computed: {
    ...mapGetters('drizzle', ['drizzleInstance'])
  }
})
export default class IPFSForm extends Vue {
  ipfsService=ipfs;
  cid = 'Please choose a file to send to IPFS!'

  handleFileChange = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.$store.state.buffer = Buffer.from(reader.result)
      console.log('this.$store.state.buffer', this.$store.state.buffer)
    }
  }

  async onSubmit (event) {
    let ipfsResponse
    event.preventDefault()
    if (this.$store.state.buffer) {
      ipfsResponse = await this.ipfsService.add(this.$store.state.buffer)
      this.cid = `The file CID in IPFS is: ${ipfsResponse.cid.string}`
      this.drizzleInstance
        .contracts.SimpleIPFSStore
        .methods.set
        .cacheSend(ipfsResponse.cid.string)
      // reset the store buffer
      this.$store.state.buffer = null
    }
  }
}
</script>

<style>
</style>
