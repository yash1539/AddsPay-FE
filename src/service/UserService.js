import { getFirestore, collection, addDoc } from 'firebase/firestore';

const db = getFirestore();

// Example: Adding data to Firestore
const addUserData = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), data);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};


  