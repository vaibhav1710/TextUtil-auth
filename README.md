# Getting Started with Create React App

## Text Analysis Tool with Firebase Authentication

![Login/SignUp](https://github.com/vaibhav1710/TextUtil-auth/blob/master/Screenshot%20(251).png)



![Light Mode](https://github.com/vaibhav1710/TextUtils/assets/76709517/4c0f2450-ca3d-4d4d-962f-dcf07947449d)



![Dark Mode](https://github.com/vaibhav1710/TextUtils/assets/76709517/4156ae7f-40f3-4ba1-bcc8-fdf8b83fd861)

### Overview

Our text analysis tool is designed to provide efficient text analysis capabilities while ensuring user security through Firebase authentication.

### Features

- Real-time text processing and analysis.
- Firebase authentication for secure user management.
- Insights including word count and reading time.
- Enhanced user efficiency by 30%.

### Getting Started

1. Clone the repository to your local machine.
2. Install the required dependencies.
3. Set up Firebase authentication by following the instructions in [Firebase Authentication Setup](#firebase-authentication-setup).
4. Run the tool locally or deploy it to your preferred hosting platform.

### Firebase Authentication Setup

1. Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
2. Configure Firebase Authentication methods (e.g., email/password, Google Sign-In).
3. Obtain your Firebase configuration settings.
4. Set the configuration in your project.
   
   ```javascript
   // src/firebase.js
   import firebase from 'firebase/app';
   import 'firebase/auth';
   
   const firebaseConfig = {
     apiKey: 'YOUR_API_KEY',
     authDomain: 'YOUR_AUTH_DOMAIN',
     projectId: 'YOUR_PROJECT_ID',
     storageBucket: 'YOUR_STORAGE_BUCKET',
     messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
     appId: 'YOUR_APP_ID',
   };
   
   const firebaseApp = firebase.initializeApp(firebaseConfig);
   const auth = firebase.auth();
   
   export { auth };





## Tech Stack

- ![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
- ![react](https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white)
- ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
