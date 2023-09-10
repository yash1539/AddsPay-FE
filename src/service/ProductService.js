import {
  getFirestore,
  collection,
  doc,
  deleteDoc,
  setDoc,
  addDoc,
} from "firebase/firestore";

const db = getFirestore();

// Dummy product data
const newProduct = {
  productName: "Example Product",
  productDescription: "This is an example product.",
  productCategory: "Electronics",
  productPrice: 299.99,
};

// Function to add a new product to Firestore
const addProduct = async (productData) => {
  try {
    const docRef = await addDoc(collection(db, "products"), productData);
    console.log("Product added with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding product: ", error);
  }
};

const updatedProduct = {
  productName: "Updated Product Name",
  productDescription: "This is an updated product description.",
  productCategory: "Electronics",
  productPrice: 349.99,
};

// Function to update a product in Firestore
const updateProduct = async (productId, updatedData) => {
  try {
    const productRef = doc(db, "products", productId);
    await setDoc(productRef, updatedData, { merge: true });
    console.log("Product updated successfully.");
  } catch (error) {
    console.error("Error updating product: ", error);
  }
};

// Function to delete a product from Firestore
const deleteProduct = async (productId) => {
  try {
    const productRef = doc(db, "products", productId);
    await deleteDoc(productRef);
    console.log("Product deleted successfully.");
  } catch (error) {
    console.error("Error deleting product: ", error);
  }
};

// Replace 'existingProductId' with the actual product document ID
deleteProduct("existingProductId");

// Replace 'existingProductId' with the actual product document ID
updateProduct("existingProductId", updatedProduct);

// Call the function to add a new product
addProduct(newProduct);
