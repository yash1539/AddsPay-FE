// // src/components/AuthForm.js

// import React, { useState } from 'react';

// const AuthForm = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   // State for form fields
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your login or registration logic here
//     console.log(formData);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="max-w-md w-full bg-white shadow-md rounded-lg px-8 py-10">
//         <div>
//           <h2 className="text-center text-3xl font-extrabold text-gray-900">
//             {isLogin ? 'Sign in to your account' : 'Create an account'}
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           {/* Email input field */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email address
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 px-3 py-2 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
//               placeholder="Email address"
//             />
//           </div>

//           {/* Password input field */}
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               required
//               value={formData.password}
//               onChange={handleChange}
//               className="mt-1 px-3 py-2 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
//               placeholder="Password"
//             />
//           </div>

//           {/* Confirm Password input field (only for registration) */}
//           {!isLogin && (
//             <div>
//               <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
//                 Confirm Password
//               </label>
//               <input
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 type="password"
//                 required={!isLogin}
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="mt-1 px-3 py-2 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
//                 placeholder="Confirm Password"
//               />
//             </div>
//           )}

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               {isLogin ? 'Sign in' : 'Create an account'}
//             </button>
//           </div>
//         </form>

//         <div className="text-center mt-4">
//           <button
//             type="button"
//             onClick={toggleForm}
//             className="group relative py-2 px-4 text-sm font-medium text-indigo-600 hover:text-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             {isLogin ? 'Create an account' : 'Sign in'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;
