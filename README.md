# SOliver

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  <!-- Web -->
  <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
</p>

This project was bootstrapped with (https://github.com/expo/examples/tree/master/with-typescript). I have used these packages:

Please follow the given link for expo command line setup (https://docs.expo.dev/get-started/installation/)

Please follow the given link to setup Expo Go (https://docs.expo.dev/get-started/expo-go/)

The project works with NodeJS 18 and above. Please make sure through your node versioning system you are using NodeJS 18 and above. Please use simulator as we are using a simple JSON server. Currently JSON server running cannot communicate with Android virtual device.

Android virutal device not connecting to json-server is a known issue. Tried this solution (https://dsinecos.github.io/blog/How-to-call-a-locally-hosted-server-from-expo-app) but it fails to work with Expo SDK 50.

## 🚀 How to use

### Change Directory

`cd soliver`

### Install Dependencies

Install all the dependencies listed within package.json in the local node_modules folder.

`yarn install`


### Start the development server

To start the development server, run the following command:

`npx expo start`

### Start the Json server (MUST)

Open a new Terminal and run the following command to start the JSON server.

`npx json-server src/mockDatabase/db.json`

### Run tests and coverage report

Open a new Terminal and run the following command to start tests

`yarn test`
`yarn coverage`
