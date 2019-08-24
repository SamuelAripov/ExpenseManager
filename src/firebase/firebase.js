import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBlbpvUG1bw5OVpTESX8I7uO7TiPLIQeN8",
    authDomain: "expensemanager-f013c.firebaseapp.com",
    databaseURL: "https://expensemanager-f013c.firebaseio.com",
    projectId: "expensemanager-f013c",
    storageBucket: "expensemanager-f013c.appspot.com",
    messagingSenderId: "443819429277",
    appId: "1:443819429277:web:65e6a9b1f65b7093"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export { firebase, googleAuthProvider, database as default }



















// // database
// //     .ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = []
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             })
// //         })
// //         console.log(expenses)
// //     })
// //     .catch(e => console.log(e))
// database
//     .ref('expenses')
//     .on('child_changed', (snapshot) => {
//         console.log(`${snapshot.val().description} was changed`)
//     })

// database
//     .ref('expenses')
//     .on('child_removed', (snapshot) => {
//         console.log(`${snapshot.val().description} was removed`)
//     })
// database
//     .ref('expenses')
//     .on('child_added', (snapshot) => {
//         console.log(`${snapshot.val().description} was added`)
//     })
// database
//     .ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     })
// // database.ref().on('value', (snapshot) => {
// //     const data = snapshot.val()
// //     console.log(`${data.name} is ${data.attributes.race} and is ${data.attributes.height} tall`)
// // })

// setTimeout(() => {
//     database.ref('name').set('Sam')
// }, 3000)
// database.ref()
//     .once('value')
//     .then((snapshot)=>{
//         const data = snapshot.val()
//         console.log(data)
//     })
//     .catch((error)=>console.log(error))

// database
//     .ref()
//     .set({
//         name: 'Sam Aripov',
//         attributes: {
//             race: 'Asian',
//             height: '5.11ft',
//             favoriteColors:['red','blue','green']
//         }
//     })
//     .then(() => console.log(`Data saved`))
//     .catch((error) => console.log(error))

// database
//     .ref()
//     .update({
//         name: 'Sirojiddin Aripov',
//         'attributes/height': '6ft',
//         'attributes/favoriteColors/green': false
//     })
//     .then(() => console.log('Data removed'))
//     .catch((error) => console.log(error))
