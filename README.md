## IPFS Vuejs Drizzle Demo App

This is a sample application that demonstrates how to upload a file to IPFS and store its resulting CID on a Smart Contract in the Ethereum blockchain using a Vue JS with Drizzle front end! :)

### Packages used

* Drizzle Vue Plugin v0.1.1
* VueJS 2.6.11
* IPFS 0.5.0

### Run the application!

After cloning you need to:

Install dependencies:

```
npm i
```

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
npm i
npm run serve
```

Start a local IPFS Daemon:

```
ipfs daemon
```

### Take the app for a test drive:

So two things left to do! Open the app to upload a file and view the file in IPFS:

* Navigate to [http://localhost:8080](http://localhost:8080) and upload a file and summit it to IPFS!
* Navigate to [http://localhost:5000](http://localhost:5000) and search for the file by its CID!

### Steps to create this project from zero!

These steps below are how I created this app from zero. If you have just cloned this repo then you do not need to do these steps! Just follow the

```
npm i -g truffle@nodeLTS
npm i -g @vue/cli
truffle init
vue create app
truffle create contract SimpleIPFSStore
truffle create migration ipfsstore
truffle compile
ln -s ../../build/contracts app/src/contracts

```

...now in the app (Vue JS) project folder:

```
cd app
npm i @types/node
npm i @drizzle/vue-plugin
npm i ipfs-http-client
touch src/drizzleOptions.ts
touch src/decs.d.ts
```

...some final touches so that certain things are working with TypeScript!

* Open [app/tsconfig.json](./app/tsconfig.json) and add a new compiler option as follows: `"resolveJsonModule": true,`. Check [this article](https://mariusschulz.com/blog/importing-json-modules-in-typescript) for details.
* Open [app/src/decs.d.ts](./app/src/decs.d.ts) and add the following line: `declare module '@drizzle/vue-plugin'`
* Open [truffle-config.js](./truffle-config.js) and uncomment the develpment network settings.