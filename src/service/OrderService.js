// Import Firebase Modular SDK
import { getFirestore, query, addDoc, setDoc, doc, deleteDoc, where, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Initialize Firestore
const db = getFirestore();
const auth = getAuth();

// Function to fetch order details for a specific product and user
const fetchOrderDetails = async (productId, userId) => {
  try {
    // Check if the user is authenticated
    const user = auth.currentUser;

    if (user) {
      // User is authenticated, so we can proceed with the query
      const ordersCollection = collection(db, 'orders');

      // Create a query to filter orders by both the 'productId' and 'userId' fields
      const q = query(
        ordersCollection,
        where('productId', '==', productId),
        where('userId', '==', userId)
      );

      // Execute the query and get the matching orders
      const querySnapshot = await getDocs(q);

      // Process the retrieved orders
      const orderDetails = [];
      querySnapshot.forEach((doc) => {
        orderDetails.push({ id: doc.id, ...doc.data() });
      });

      return orderDetails;
    } else {
      // User is not authenticated, handle accordingly (e.g., show an error or prompt to log in).
      console.log('User is not authenticated.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching order details: ', error);
    throw error; // Rethrow the error for handling at the caller's end
  }
};

// Example usage: Replace 'productId123' and 'userId456' with actual product and user IDs
const productIdToFetch = 'productId123';
const userIdToFetch = 'userId456';

// Call the function to fetch order details for the specified product and user
fetchOrderDetails(productIdToFetch, userIdToFetch)
  .then((orderDetails) => {
    // Process the order details as needed
    console.log('Order Details:', orderDetails);
  })
  .catch((error) => {
    // Handle any errors
    console.error('Error:', error);
  });
// Import Firebase Modular SDK


// Service for order operations
const orderService = {
  // Create a new order
  createOrder: async (orderData) => {
    try {
      // Check if the user is authenticated
      const user = auth.currentUser;

      if (user) {
        // User is authenticated, so we can proceed with creating the order
        const ordersCollection = collection(db, 'orders');

        // Add the order document to the 'orders' collection
        const newOrderRef = await addDoc(ordersCollection, orderData);

        return newOrderRef.id; // Return the ID of the newly created order
      } else {
        // User is not authenticated, handle accordingly (e.g., show an error or prompt to log in).
        console.log('User is not authenticated.');
        return null;
      }
    } catch (error) {
      console.error('Error creating order: ', error);
      throw error; // Rethrow the error for handling at the caller's end
    }
  },

  // Update an existing order
  updateOrder: async (orderId, updatedOrderData) => {
    try {
      // Check if the user is authenticated
      const user = auth.currentUser;

      if (user) {
        // User is authenticated, so we can proceed with updating the order
        const orderRef = doc(db, 'orders', orderId);

        // Use the .set() method to update the order document with the new data
        await setDoc(orderRef, updatedOrderData, { merge: true });

        return 'Order updated successfully';
      } else {
        // User is not authenticated, handle accordingly (e.g., show an error or prompt to log in).
        console.log('User is not authenticated.');
        return null;
      }
    } catch (error) {
      console.error('Error updating order: ', error);
      throw error; // Rethrow the error for handling at the caller's end
    }
  },

  // Delete an existing order
  deleteOrder: async (orderId) => {
    try {
      // Check if the user is authenticated
      const user = auth.currentUser;

      if (user) {
        // User is authenticated, so we can proceed with deleting the order
        const orderRef = doc(db, 'orders', orderId);

        // Use the .delete() method to delete the order document
        await deleteDoc(orderRef);

        return 'Order deleted successfully';
      } else {
        // User is not authenticated, handle accordingly (e.g., show an error or prompt to log in).
        console.log('User is not authenticated.');
        return null;
      }
    } catch (error) {
      console.error('Error deleting order: ', error);
      throw error; // Rethrow the error for handling at the caller's end
    }
  },

  fetchAllOrders:async () => {
    try {
      // Create a reference to the 'orders' collection
      const ordersCollection = collection(db, 'orders');
  
      // Use getDocs to fetch all documents in the 'orders' collection
      const querySnapshot = await getDocs(ordersCollection);
  
      // Process the retrieved orders
      const orderList = [];
      querySnapshot.forEach((doc) => {
        orderList.push({ id: doc.id, ...doc.data() });
      });
  
      return orderList;
    } catch (error) {
      console.error('Error fetching orders: ', error);
      throw error; // Rethrow the error for handling at the caller's end
    }
}
}


// // Example usage: Fetch all orders
// fetchAllOrders()
//   .then((orderList) => {
//     // Process the list of orders as needed
//     console.log('List of Orders:', orderList);
//   })
//   .catch((error) => {
//     // Handle any errors
//     console.error('Error:', error);
//   });

export default orderService;
