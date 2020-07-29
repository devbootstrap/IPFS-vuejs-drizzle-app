<template>
  <div v-if="isDrizzleInitialized" id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>Accounts</h2>
    <drizzle-account units="Ether" :precision="2" />
    <IPFSForm />
  </div>
  <div v-else>
    Loading application...
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import IPFSForm from './components/IPFSForm.vue'

@Component({
  name: 'App',
  components: {
    IPFSForm
  },
  computed: {
    ...mapGetters('drizzle', ['isDrizzleInitialized'])
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
