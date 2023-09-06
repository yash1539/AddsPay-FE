import React from 'react'
import FeatureCard from '../comman/FeatureCard'

const AboutUs = () => {
  return (
    <>
      <div class="bg-gray-100 p-6 flex flex-col items-center justify-center h-screen bg-red-50">
        <h1 class="text-3xl font-bold mb-4">ABOUT US</h1>
        <hr class="w-1/6 border-t-2 border-blue-500 mb-6"></hr>
        <p class="text-gray-700 w-1/2">Addspay is a popular online platform where businesses of all sizes and industries
          can list their company profiles, products, and services. Our platform serves as a
          comprehensive directory that connects businesses with potential customers, partners,
          and stakeholders. With a user-friendly interface and advanced search algorithms,
          we make it easy for users to discover and connect with the right businesses.</p>
      </div>
      <div class="bg-gray-100 p-6 flex flex-col items-center justify-start h-screen bg-stone-50">
        <h1 class="text-3xl font-bold mb-4">OUR FEATURES</h1>
        <hr class="w-1/6 border-t-2 border-blue-500 mb-6"></hr>
        <div class="flex flex-wrap justify-between mx-80">
          <div class="w-1/4 mb-4">
            <FeatureCard />
          </div>
          <div class="w-1/4 mb-4">
            <FeatureCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs