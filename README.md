### Packages used

* Drizzle Vue Plugin v0.1.1
* VueJS 2.6.11
* IPFS 0.5.0

### Run the application!

After cloning you need to:

Start ganache (the menomic is optional)

```
ganache-cli -m 'theme narrow finger canal enact photo census miss economy hotel often'
```

Start truffle console

```
truffle console
```

Start the VueJS app:

```
cd app
npm run serve
```

Start IPFS Daemon:

```
ipfs daemon
```

Navigate to [http://localhost:8080](http://localhost:8080) and upload a file and summit it to IPFS!

### Steps to create this project from zero!

```
npm i -g @vue/cli
truffle init
vue create app
truffle create contract SimpleIPFSStore
truffle create migration ipfsstore
truffle compile
ln -s ../../build/contracts app/src/contracts
cd app
npm i @types/node
npm i @drizzle/vue-plugin
npm i ipfs-http-client
touch src/drizzleOptions.ts
touch src/decs.d.ts
```

Open [app/tsconfig.json](./app/tsconfig.json) and add a new compiler option as follows: `"resolveJsonModule": true,`. Check [this article](https://mariusschulz.com/blog/importing-json-modules-in-typescript) for details.

Open [app/src/decs.d.ts](./app/src/decs.d.ts) and add the following line: `declare module '@drizzle/vue-plugin'`

Open [truffle-config.js](./truffle-config.js) and uncomment the develpment network settings.