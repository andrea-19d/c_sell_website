import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSJ9QcgFzeXLQikExSQcLbqDQf5DNJFc0",
    authDomain: "c-sell-website-db.firebaseapp.com",
    projectId: "c-sell-website-db",
    storageBucket: "c-sell-website-db.firebasestorage.app",
    messagingSenderId: "838867926616",
    appId: "1:838867926616:web:149e2168616175fee6d42d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

// Initialize Google Auth Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Function to create user document in Firestore
export const createUserDocumentFromAuth = async (userAuth, additionalData = {}) => {
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
                ...additionalData, // Additional user data, such as username
            });
            console.log('User document created:', userDocRef.id);
        } catch (error) {
            console.error('Error creating user document:', error.message);
        }
    }

    return userDocRef;
};

// Renaming the function to registerWithEmailPassword
export const registerWithEmailPassword = async (email, password, displayName) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        // After signup, create the user document in Firestore
        await createUserDocumentFromAuth(user, { displayName });
        console.log('User signed up:', user);
        return user; // Return the user object if needed for further use
    } catch (error) {
        console.error('Error during sign-up:', error.message);
        throw error; // Rethrow to handle in the component
    }
};


// Function to handle email/password sign-in
export const signInWithEmailPassword = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in:', user);
        return user; // Return the user object if needed for further use
    } catch (error) {
        console.error('Error during sign-in:', error.message);
        throw error; // Rethrow to handle in the component
    }
};
