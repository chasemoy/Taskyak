# taskyak
This application is designed to use emberjs and a firebase database to create and manage various tasks 

## Our other Repo's for Taskyak!
![David's Repo](https://github.com/dmoreno757/project2-473-testing2)
![Raza's Repo](https://github.com/Razat94/CPSC473P2)


## Dependencies
![npm](https://img.shields.io/npm/v/npm.svg)
![node (scoped with tag, custom registry)](https://img.shields.io/node/v/@stdlib/stdlib/latest.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com)
![Bower](https://img.shields.io/bower/v/bootstrap.svg)
```
        bootstrap": "^4.1.1
        bootstrap-sass": "^3.3.7
        broccoli-asset-rev": "^2.4.5
        broccoli-merge-trees": "^3.0.0
        ember-ajax": "^3.0.0
        ember-bootstrap": "^1.2.2
        ember-cli": "^3.1.4",
        ember-cli-app-version": "^3.0.0
        ember-cli-babel": "^6.6.0
        ember-cli-bootstrap-4": "^0.5.9
        ember-cli-bootstrap-sassy": "^0.5.8
        ember-cli-dependency-checker": "^2.0.0
        ember-cli-eslint": "^4.2.1
        ember-cli-htmlbars": "^2.0.1
        ember-cli-htmlbars-inline-precompile": "^1.0.0
        ember-cli-inject-live-reload": "^1.4.1
        ember-cli-qunit": "^4.1.1
        ember-cli-sass": "^7.1.7
        ember-cli-shims": "^1.2.0
        ember-cli-sri": "^2.1.0
        ember-cli-uglify": "^2.0.0
        ember-data": "~3.1.0
        ember-export-application-global": "^2.0.0
        ember-load-initializers": "^1.0.0
        ember-maybe-import-regenerator": "^0.1.6
        ember-resolver": "^4.0.0
        ember-source": "~3.1.0
        ember-welcome-page": "^3.0.0
        emberfire": "^2.0.10
        eslint-plugin-ember": "^5.0.0
        loader.js": "^4.2.3
        popper.js": "^1.14.3
        torii": "^0.10.1
```
## Prerequisites
You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation..
* `git clone https://github.com/milesjmccloskey/Project-2-CPSC-473.git`
* `cd Project-2-CPSC-473`

## Running EmberFire and Torii..
* `ember install emberfire`
* `ember install torii`

Change the firebase environment variables within the app/config whereby the user
### Make sure these you have these dependencies
* `ember install ember-cli-bootstrap-4`
* `ember install ember-cli-babel@6.6`
* `npm i ember-easy-dropdown`

### If you have the wrong dependency installed...
you can run the command..
* `ember uninstall"dependency@version"`
then run...
* `ember install"dependency@version"`

### Once the correct dependecies are installed, run...
* `npm install`

## Setting up Firebase....
#### 1) Go to: https://console.firebase.google.com/
#### 2) Add a new project
#### 3) Pick a project name
#### 4) Create it the new Firebase instantiation by clicking 'Create'
#### 5) Click on the new Firebase project
#### 6) On the left.. Go to 'Authentication'
#### 7) Cick "SIGN-IN-METHOD"
#### 8) Set the Email/Password to Enabled
#### 9) Enable users to sign up using their email addresses
#### 10) Enable passwordless authentication with email link
#### Then on the left select Database make sure the rules are set to...
```
    {
    "rules": {
    ".read": true,
    ".write": true
       }
    }
```
### Configure the Database to start up in Test Mode, then once
### the first data has been populated it shouldn't need rule changes

## Running / Development..
* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

## Running Tests..
* `ember test`
* `ember test --server`

## Linting..
* `npm run lint:js`
* `npm run lint:js -- --fix`

## Building..
* `ember build` (development)
* `ember build --environment production` (production)

## Code Generators..
Make use of the many generators for code, try `ember help generate/g` for more details
#### Routes:
```
* `ember g route about`
* `ember g rout application`
* `ember g route index`
* `ember g route messages`
* `ember g route navbar`
* `ember g route register`
* `ember g route signin`
* `ember g route task-listing`
* `ember g route taskforminput`
* `ember g route welcome`
```
#### Models:
```
* `ember g model user`
* `ember g model tasktaskforminput`
* `ember g model messageinput`
```
#### Controllers:
```
* `ember g controller application`
* `ember g controller index`
* `ember g controller messages`
* `ember g controller navbar`
* `ember g controller register`
* `ember g controller signin`
* `ember g controller taskforminput`
```

## Additional Git Commands
### How to add access and add from a remote branch
### Creates a new branch miles and switches to it...
* `git checkout -b <branch name>`
### Verify you're on the new branch
* `git status`
### Add any changes from the new remote branch to the master
* `git add .`
* `git commit -m "initiating changes from remote branch to master`
* `git remote add origin git@github.com:Razat94/Project-2-CPSC-473.git`
* `git push -u origin <remotebranchName>`
### Switch back to the master
* `git checkout master`
* `git merge <remotebranchName>`
* `git push -u origin master`

### Clone the new repo
* `git clone https://github.com/milesjmccloskey/Project-2-CPSC-473.git`
* `cd Project-2-CPSC-473`
* `npm install`
* `ember install emberfire && install torii`
* `ember test`
### If it doesn't have any compilation errors then..
* `ember serve`
### Also, if you want to clone from the remote branch you can
* `git clone -b <branch_name> git@github.com:Razat94/Project-2-CPSC-473.git`


```
* `module.exports = function(environment) {`
* `     let ENV = {`
* `     modulePrefix: 'p1',`
* `     environment,`
* `     rootURL: '/',`
* `     locationType: 'auto',`
* `     firebase: {`
* `         apiKey: "AIzaSyDVT8TDcFDZaf8oSWYVI8hbXXQeZbdup3I",`
* `         authDomain: "taskmanager-8f72.firebaseapp.com",`
* `         databaseURL: "https://taskmanager-8****.firebaseio.com",`
* `         projectId: "taskmanager-8****",`
* `         storageBucket: "taskmanager-8**02.appspot.com",`
* `         messagingSenderId: "***********"`
* ` },`
```
### If you accidently pushed the wrong repo, and need to revert to an old repository
### state or in other words to the previous commit...

### Enter the command...
* `git log`
### This will display a log of all the recent git commits with their
### corresponding commit SHA-1 ID's, which git uses as its version control
Choose the corresponding commit, and instead of using..
* `git fetch`
We can simply click on commits on the repository bar above the branch names..
Then click the commit  SHA-1 ID, and then click browse files...
Then simply download a zip, or..
* `git clone` from the correct corresponding commit repo

## Deploying the taskyak ember/firebase application
```       1) Create a heroku account
        2) Create a new repo, and import the code from the github repository
        3) Publish the heroku project instantiation...
        4) Go to: https://<projectName>.herokuapp.com/
```

# LIVE DEMO:[taskyak](https://taskyak.herokuapp.com/)

## Further Reading / Useful Links
* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
  
  
  # Created By:
  ## [Miles McCloskey](https://github.com/milesjmccloskey)
  ## [Raza Tahir](  https://github.com/razat94)
   ## [Chase Moyniham](  https://github.com/chasemoy)
    ## [David Moreno](  https://github.com/dmoreno757)
    
    # Contribute to Taskyak!
    ## Any donations make a huge difference, and are greatly appreciated!
    
    [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)]( https://PayPal.Me/MilesMcCloskey/10000)
    
    [![Donate](https://img.shields.io/badge/Donate-BTC-yellow.svg)]( https://commerce.coinbase.com/checkout/c163eaa2-70c2-479c-ae13-89f60d7fa0ff)
    
    [![Donate](https://img.shields.io/badge/Donate-ETH-blue.svg)]( https://commerce.coinbase.com/checkout/77bb2799-d3f8-4b75-a579-9f1c4ddf974a)
    
  

    
    
   
   

  

