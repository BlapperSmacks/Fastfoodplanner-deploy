import React from 'react';
import Image from 'next/image';

interface Meal {
  name: string;
  restaurant: string;
  calories: number;
  protein: number;
  imageUrl: string;
}

interface MealOptionsProps {
  selectedRestaurants: string[];
  nutritionalRequirement: string;
}

const MealOptions: React.FC<MealOptionsProps> = ({ selectedRestaurants, nutritionalRequirement }) => {
  const meals = fetchMealOptions(selectedRestaurants, nutritionalRequirement);

  if (selectedRestaurants.length < 5 || !nutritionalRequirement) {
    return (
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-green-400">Meal Options:</h2>
        <p className="text-green-400">Select 5 restaurants and set nutritional requirements to see meal options.</p>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-center text-green-400">Meal Options:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {meals.map((meal, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-400">{meal.name}</h3>
            <Image
              src={meal.imageUrl}
              alt={meal.name}
              width={200}
              height={200}
              className="rounded-md mb-2"
            />
            <p className="text-green-400">Calories: {meal.calories}</p>
            <p className="text-green-400">Protein: {meal.protein}g</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Mock function to simulate fetching meal options
function fetchMealOptions(selectedRestaurants: string[], nutritionalRequirement: string): Meal[] {
  // This would be replaced with an actual API call in a real application
  const mockMeals: Meal[] = [
    {
      name: "Whopper Jr",
      restaurant: "Burger King",
      calories: 310,
      protein: 13,
      imageUrl: "/whopper-jr.jpg"
    },
    {
      name: "Turkey Breast 6\" Sub",
      restaurant: "Subway",
      calories: 280,
      protein: 18,
      imageUrl: "/turkey-sub.jpg"
    },
    {
      name: "Crunchy Taco",
      restaurant: "Taco Bell",
      calories: 170,
      protein: 8,
      imageUrl: "/crunchy-taco.jpg"
    },
    {
      name: "Chicken Burrito Bowl",
      restaurant: "Chipotle",
      calories: 590,
      protein: 32,
      imageUrl: "/chicken-burrito-bowl.jpg"
    },
    {
      name: "Grilled Chicken Sandwich",
      restaurant: "Chick-fil-A",
      calories: 370,
      protein: 34,
      imageUrl: "/grilled-chicken-sandwich.jpg"
    }
  ];

  // Filter meals based on selected restaurants and nutritional requirement
  return mockMeals.filter(meal => 
    selectedRestaurants.includes(meal.restaurant) &&
    meetsNutritionalRequirement(meal, nutritionalRequirement)
  ).slice(0, 5); // Return up to 5 meals
}

function meetsNutritionalRequirement(meal: Meal, requirement: string): boolean {
  switch (requirement) {
    case 'low-calorie':
      return meal.calories < 400;
    case 'high-protein':
      return meal.protein > 20;
    // Add more cases for other nutritional requirements
    default:
      return true;
  }
}

export default MealOptions;
