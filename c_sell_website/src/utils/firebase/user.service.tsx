// src/lib/firebase/user.service.ts
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase.utils';
import { User } from 'firebase/auth';

export interface UserData {
    displayName?: string;
    email?: string;
    createdAt: Date;
}

export const createUserDocument = async (user: User, additionalData?: { displayName?: string }) => {
    const userRef = doc(db, 'users', user.uid);
    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()) {
        try {
            await setDoc(userRef, {
                displayName: user.displayName || additionalData?.displayName,
                email: user.email,
                createdAt: new Date(),
                ...additionalData
            });
        } catch (error) {
            console.error('Error creating user document:', error);
        }
    }
    return userRef;
};

export const getUserDocument = async (uid: string) => {
    try {
        const userRef = doc(db, 'users', uid);
        const snapshot = await getDoc(userRef);
        return snapshot.data() as UserData;
    } catch (error) {
        console.error('Error fetching user document:', error);
        return null;
    }
};