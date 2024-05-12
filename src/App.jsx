import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);

  const currencyOptions = Object.keys(currencyInfo);

  const convertCurrency = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency]);
  };

  const swap = () => {
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="p-4 bg-black w-full h-screen text-white">
      <h1 className="text-3xl text-center mb-4 ">Currency Converter</h1>

      <form
        className="flex flex-col gap-4 relative bg-gray-600 max-w-xl mx-auto rounded-lg p-4"
        onSubmit={(e) => {
          e.preventDefault();
          convertCurrency();
        }}
      >
        <InputBox
          label="From"
          amount={amount}
          selectedCurrency={fromCurrency}
          currencyOptions={currencyOptions}
          onAmountChange={(amount) => setAmount(amount)}
          onCurrencyChange={(currency) => setFromCurrency(currency)}
        />

        <button
          onClick={swap}
          type="button"
          className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-4 py-2"
        >
          swap
        </button>
        <InputBox
          label="To"
          amount={convertedAmount}
          selectedCurrency={toCurrency}
          currencyOptions={currencyOptions}
          onAmountChange={(amount) => setConvertedAmount(amount)}
          onCurrencyChange={(currency) => setToCurrency(currency)}
        />

        <button
          className="p-2 bg-blue-600 w-full rounded-lg text-lg"
          type="submit"
        >
          Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

export default App;
