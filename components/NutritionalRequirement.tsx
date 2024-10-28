import React from 'react';

interface NutritionalRequirementProps {
  nutritionalRequirement: string;
  setNutritionalRequirement: (value: string) => void;
}

const NutritionalRequirement: React.FC<NutritionalRequirementProps> = ({
  nutritionalRequirement,
  setNutritionalRequirement,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNutritionalRequirement(e.target.value);
  };

  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-green-400">Set Nutritional Requirement:</h2>
      <select
        value={nutritionalRequirement}
        onChange={handleChange}
        className="w-full p-2 bg-gray-800 text-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        aria-label="Select nutritional requirement"
      >
        <option value="">Select nutritional requirement</option>
        <option value="low-calorie">Low Calorie</option>
        <option value="high-protein">High Protein</option>
        <option value="low-carb">Low Carb</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
      </select>
    </div>
  );
};

export default NutritionalRequirement;
