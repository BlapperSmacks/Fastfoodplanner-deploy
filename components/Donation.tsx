import React, { useState } from 'react';

const Donation: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
  };

  const handleDonate = () => {
    if (selectedAmount) {
      // Redirect to the specified link
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
  };

  return (
    <div className="mt-8 text-center">
      <p className="text-green-400 mb-4">This app is free, but feel free to donate and show support here!</p>
      <div className="flex justify-center space-x-4 mb-4">
        {[2, 5, 10].map((amount) => (
          <button
            key={amount}
            onClick={() => handleAmountSelect(amount)}
            className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 ${
              selectedAmount === amount
                ? 'bg-green-600 text-white'
                : 'bg-gray-800 text-green-400 hover:bg-gray-700'
            }`}
            aria-label={`Select $${amount}`}
          >
            ${amount}
          </button>
        ))}
      </div>
      <button
        onClick={handleDonate}
        className={`px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 ${
          !selectedAmount ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={!selectedAmount}
        aria-label={`Donate ${
          selectedAmount ? `${selectedAmount}` : 'now'
        }`}
      >
        Donate
      </button>
    </div>
  );
};

export default Donation;
