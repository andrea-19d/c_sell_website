import { initializeApp } from 'firebase/app';
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword,} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCSJ9QcgFzeXLQikExSQcLbqDQf5DNJFc0",
    authDomain: "c-sell-website-db.firebaseapp.com",
    projectId: "c-sell-website-db",
    storageBucket: "c-sell-website-db.firebasestorage.app",
    messagingSenderId: "838867926616",
    appId: "1:838867926616:web:149e2168616175fee6d42d"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const createUserDocumentFromAuth = async (userAuth) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
            console.log('User document created:', userDocRef.id);
        } catch (error) {
            console.error('Error creating user document:', error.message);
        }
    }

    return userDocRef;
};

export const registerWithEmailPassword = async (email, password, displayName) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        console.log('Created user:', user);
        const userRef = doc(db, 'users', user.uid);

        await setDoc(userRef, {
            displayName: displayName,
            email: email,
            createdAt: new Date(),
        });

        console.log('User signed up and saved to Firestore:', user);

        return user;
    } catch (error) {
        console.error('Error during sign-up:', error.message);
        throw error;
    }
};


export const signInWithEmailPassword = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);


        const userDocRef = doc(db, 'users', user.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            console.log('User signed in:', user, userData);
            return { user, userData };
        } else {
            console.error('User data not found in Firestore');
            return { user, userData: null };
        }
    } catch (error) {
        console.error('Error during sign-in:', error.message);
        throw error;
    }
};