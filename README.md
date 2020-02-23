# Get Currency App

This is a dummy app against which the tests are written.  
App UI calls an api `/api/currency/{country}` which is considered as a third party API

## Run the app
```
npm install .  
npm start
```
App starts on port :3000. Access app using `http://localhost:3000`

## Run cypress tests from UI
```
./node_modules/.bin/cypress open
```

This would open the cypress UI. Click on `get_currency.spec.js` to run the tests.  
There are 2 tests  
1. Fetches currency for a valid country
2. Mocks a 404 for the api can checks the message

## Run cypress tests from commandline
```
./node_modules/.bin/cypress run
```
