This is a sample Capacitor Android app to reproduce the issue in https://github.com/ionic-team/capacitor/issues/4240

To launch the Android app, you must have Android studio installed.

After cloning the repo, please run `yarn install` or `npm install` to install all dependencies.

Then, you can start the local server by: `yarn start:server`. You should be able to access the page via `http://localhost:3000`.

While keeping the local web server running in the background, you can start the Capacitor Android app in another terminal via: `yarn start:android`.

When you open the Android app, clicking the `redirect to` link will show you a page with a broken image.

#### Before redirect

<img src="https://i.ibb.co/Czysxjs/Screen-Shot-2021-02-24-at-4-31-21-pm.png" width="300px" >

#### After redirection

<img src="https://i.ibb.co/rxCQdWv/Screen-Shot-2021-02-24-at-4-31-30-pm.png" width="300px" >
