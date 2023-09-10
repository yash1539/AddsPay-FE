import { collection, addDoc, Timestamp,  getDocs } from 'firebase/firestore/lite';
import { db , auth} from '../firebase';
// import {collection, addDoc, Timestamp} from 'firebase/firestore'

export const  getCategory = async ()=> {
    const citiesCol = collection(db, 'Listing');
    
    const citySnapshot =  await getDocs(citiesCol);
    
    const cityList = citySnapshot.docs.map(doc => doc.data());
    
    return cityList;
  }
  
  export const  getUser = async ()=> {
    const usersCol = collection(db, 'Users');
    
    const userSnapshot =  await getDocs(usersCol);
    
    const userList = userSnapshot.docs.map(doc => doc.data());
    
    return userList;
  }
  export const addUser = async (userDetails) => {
    try {
      // Check if a user is currently authenticated
      const user = auth.currentUser;
 
      if (user) {
        // User is authenticated, so we can access their UID
  
        // Product data including the user's ID
        await addDoc(collection(db, 'Users'), {...userDetails,
            created: Timestamp.now()
          })
  
        // Add the product document to the 'products' collection
        //  db.collection('Users').add({'name':'nyaz',
        //  'age':'24'}).then((ele)=>{

        //      console.log('Product added with ID: ', ele);
        // }).catch(()=>{

        // });
  
      } else {
    //     // User is not authenticated, handle accordingly (e.g., show an error or prompt to log in).
        console.log('User is not authenticated.');
      }
    } catch (error) {
      console.error('Error adding User: ', error);
    }
  };