import { useId } from "react";

/* eslint-disable react/prop-types */
const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
}) => {
  const amountInputId = useId();

  return (
    <div className="flex flex-wrap justify-between bg-white w-full rounded-md text-black ">
      <div className="flex  flex-col   p-4 gap-4">
        <label htmlFor="amountInputId" className="text-gray-500 font-medium ">
          {label}
        </label>

        <input
          id={amountInputId}
          className="w-fit outline-none font-semibold text-lg"
          min={0}
          type="number"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="flex flex-col    p-4 gap-4">
        <label htmlFor="from" className="text-gray-500 font-medium ">
          Currency Type
        </label>

        <select
          className="outline-none"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
