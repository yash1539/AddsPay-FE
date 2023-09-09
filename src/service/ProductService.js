// Import Firebase Firestore and initialize it (assuming you've already set up Firebase)
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; // Import Firebase Authentication

// Initialize Firestore and Authentication
const db = firebase.firestore();
const auth = firebase.auth();

// Function to retrieve products created by a specific user
const getProductsByUser = async (userId) => {
  try {
    // Check if the user is authenticated
    const user = auth.currentUser;

    if (user) {
      // User is authenticated, so we can proceed with the query
      const productsRef = db.collection('products');

      // Use a query to filter products by the 'createdBy' field
      const query = productsRef.where('createdBy', '==', userId);

      // Execute the query and get the matching products
      const snapshot = await query.get();

      // Process the retrieved products
      snapshot.forEach((doc) => {
        console.log('Product ID: ', doc.id);
        console.log('Product Data: ', doc.data());
      });
    } else {
      // User is not authenticated, handle accordingly (e.g., show an error or prompt to log in).
      console.log('User is not authenticated.');
    }
  } catch (error) {
    console.error('Error getting products: ', error);
  }
};

// Replace 'userIdToQuery' with the user's actual ID
const userIdToQuery = 'your-user-id-here';

// Call the function to retrieve products by the specified user
getProductsByUser(userIdToQuery);


// Define a function to add a new product document with the user's ID
const addProduct = async (productData) => {
  try {
    // Check if a user is currently authenticated
    const user = auth.currentUser;

    if (user) {
      // User is authenticated, so we can access their UID
      productData['createdBy'] = user.uid;

      // Product data including the user's ID


      // Add the product document to the 'products' collection
      const productRef = await db.collection('products').add(productData);

      console.log('Product added with ID: ', productRef.id);
    } else {
      // User is not authenticated, handle accordingly (e.g., show an error or prompt to log in).
      console.log('User is not authenticated.');
    }
  } catch (error) {
    console.error('Error adding product: ', error);
  }
};
const productData = {
    name: 'Smartphone X',
    description: 'A high-end smartphone with advanced features.',
    price: 699.99,
    imageURL: 'https://example.com/smartphone_x.jpg',
    category: 'Electronics', // Reference to the 'categories' collection
    stock: 100,
    ratings: [
      { rating: 5, review: 'Excellent phone!' },
      { rating: 4, review: 'Great camera quality.' },
    ],
    specifications: {
      display: '6.2-inch OLED',
      processor: 'Octa-core Snapdragon 888',
      storage: '128GB',
      camera: 'Triple 48MP + 12MP + 8MP',
    },
   // createdBy: "userId", // Add the user's ID as a field
  };
// Call the function to add a product
addProduct(productData);




// Function to update product details
const updateProduct = async (productId, updatedProductData) => {
  try {
    // Reference to the specific product document using the provided product ID
    const productRef = db.collection('products').doc(productId);

    // Use the .update() method to update the document with the new data
    await productRef.update(updatedProductData);

    console.log('Product updated successfully');
  } catch (error) {
    console.error('Error updating product: ', error);
  }
};

// Example usage: Replace 'productID123' with the actual product ID and provide the updated data
const productIdToUpdate = 'productID123';
const updatedProductData = {
  name: 'Updated Smartphone X',
  price: 749.99,
  description: 'An updated version of the smartphone with improved features.',
};

// Call the function to update the product
updateProduct(productIdToUpdate, updatedProductData);


