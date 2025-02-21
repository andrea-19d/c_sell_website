import { initializeApp } from 'firebase/app';
import {
    User,
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
    appId: "1:838867926616:web:149e2168616175fee6d42d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Firestore and Auth references
export const db = getFirestore(firebaseApp);
export const auth = getAuth();

// Google Authentication Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

/**
 * Creates or retrieves a user document in Firestore.
 * @param userAuth Firebase user object
 * @param additionalData Additional user data to be stored
 */
export const createUserDocumentFromAuth = async (
    userAuth: { uid: string; displayName?: string; email?: string },
    additionalData?: { displayName?: string }
) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName: displayName || additionalData?.displayName,
                email,
                createdAt,
                ...additionalData,
            });
            console.log('User document created:', userDocRef.id);
        } catch (error) {
            console.error('Error creating user document:', (error as Error).message);
        }
    }

    return userDocRef;
};

/**
 * Registers a new user with email and password, then creates a Firestore document.
 * @param email User email
 * @param password User password
 * @param displayName User display name
 */
export const registerWithEmailPassword = async (
    email: string,
    password: string,
    displayName: string
): Promise<{ user: User }> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Create user document in Firestore
        await setDoc(doc(db, 'users', user.uid), {
            displayName,
            email,
            createdAt: new Date(),
        });

        console.log('User signed up and saved to Firestore:', user);

        return { user }; // Return user as an object with a `user` property
    } catch (error) {
        console.error('Error during sign-up:', (error as Error).message);
        throw error;
    }
};


/**
 * Signs in a user with email and password, retrieves Firestore user data.
 * @param email User email
 * @param password User password
 */
export const signInWithEmailPassword = async (
    email: string,
    password: string
) => {
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
        console.error('Error during sign in:', (error as Error).message);
        throw error;
    }
};
