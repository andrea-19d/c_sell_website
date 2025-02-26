// src/lib/firebase/auth.service.ts
import {
    User,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './firebase.utils';

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (error) {
        throw new Error(`Google sign-in failed: ${(error as Error).message}`);
    }
};

export const emailPasswordSignUp = async (email: string, password: string, displayName?: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw new Error(`Email/password sign-up failed: ${(error as Error).message}`);
    }
};

export const emailPasswordSignIn = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error: any) { // Updated error type
        console.error(`Sign-in error: ${error.message}`);
        throw new Error(`Sign-in failed: ${error.message}`);
    }
};
