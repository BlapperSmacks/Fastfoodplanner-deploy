'use client'

import type { NextPage } from 'next'
import { useState } from 'react'
import RestaurantSelection from '../components/RestaurantSelection'
import NutritionalRequirement from '../components/NutritionalRequirement'
import MealOptions from '../components/MealOptions'
import Donation from '../components/Donation'

const Home: NextPage = () => {
  const [selectedRestaurants, setSelectedRestaurants] = useState<string[]>([])
  const [nutritionalRequirement, setNutritionalRequirement] = useState<string>('')

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 p-8">
      <main className="max-w-3xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-400">Fast Food Meal Planner</h1>
        
        <RestaurantSelection
          selectedRestaurants={selectedRestaurants}
          setSelectedRestaurants={setSelectedRestaurants}
        />
        
        <div className="w-full max-w-md">
          <NutritionalRequirement
            nutritionalRequirement={nutritionalRequirement}
            setNutritionalRequirement={setNutritionalRequirement}
          />
        </div>
        
        <MealOptions
          selectedRestaurants={selectedRestaurants}
          nutritionalRequirement={nutritionalRequirement}
        />
        
        <Donation />
      </main>
    </div>
  )
}

export default Home
