import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
    apiKey: "AIzaSyCGv5qevyd_xf3MKV-NSeuG0E1FuKHxWzg",
    authDomain: "minhas-roupas.firebaseapp.com",
    databaseURL: "https://minhas-roupas.firebaseio.com",
    projectId: "minhas-roupas",
    storageBucket: "",
    messagingSenderId: "788015849980",
    appId: "1:788015849980:web:bf4cdbd8c85584ccccd279"
}
firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth){
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`); //referencia

    const snapShot = await userRef.get(); //data

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            });
        }catch(error){
            console.log('error creating user ', error.message);
        }
    }
    
    return userRef;
}