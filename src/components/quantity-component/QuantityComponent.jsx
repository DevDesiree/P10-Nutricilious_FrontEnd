import { useState } from "react";

export default function QuantityComponent() {
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  return (
    <div className="flex items-center border-gray-100">
      <button
        className="cursor-pointer rounded-full bg-gray-100 py-1 px-3.5 duration-100 hover:bg-yellow-400 hover:text-gray flex justify-center items-center shadow-md"
        onClick={() => updateQuantity(-1)}
      >
        -
      </button>
      <input
        className="h-8 w-8 bg-white text-center text-base outline-none"
        value={quantity}
        readOnly
      />
      <button
        className="cursor-pointer rounded-full bg-gray-100 py-1 px-3.5 duration-100 hover:bg-yellow-400 hover:text-gray flex justify-center items-center shadow-md"
        onClick={() => updateQuantity(1)}
      >
        +
      </button>
    </div>
  );
}