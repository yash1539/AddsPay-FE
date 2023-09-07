import React from 'react'

const FeatureCard = () => {
  return (
    <div
      className="block rounded-lgx p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 bg-blue-600">
      <h5
        className="mb-2 text-xl font-medium text-white">
        Intelligent Algorithm        </h5>
      <p className="mb-4 text-base text-white">
        We analyzes user preferences, search history, and contextual data to provide highly accurate and personalized results.
      </p>
    </div>
  )
}

export default FeatureCard