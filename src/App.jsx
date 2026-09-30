import { useState } from "react";

import InputBox from "./Components/InputBox";
import useCurrencyInfo from "./Hooks/UseCurrencyinfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setfrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const CurrencyInfo = useCurrencyInfo(from);

  const Options = Object.keys(CurrencyInfo);

  const Swap = () => {
    setfrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    setConvertedAmount(amount * CurrencyInfo[to]);
  };
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:  `url('https://images.pexels.com/photos/29336326/pexels-photo-29336326.jpeg')`,
        }}
      >
    
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-10 backdrop-blur-sm bg-white/30">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                CurrencyOptions={Options}
                onAmountChange={(amount) => setAmount(amount)}
                OnCurrencyChange={(currency) => setfrom(currency)}
                SelectCurrency={from}
              />
            </div>
            <div className="relativee w-full h-0.5">
              <button
                type="submit"
                className="absolute left-1/2-translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-800 ml-40 text-white px-2 py-0.5"
                onClick={Swap}
              >
                Swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox 
              label="to" 
              amount={convertedAmount}
              CurrencyOptions={Options}
              OnCurrencyChange={(currency) => setTo(currency)}
              SelectCurrency={to}
              AmountDisable
              />
            </div>
            <button
            type="submit"
            className="w-full 
            bg-blue-900
            text-white px-4 py-3 rounded-lg"
            > Convert {from.toUpperCase()} To {to.toUpperCase()}

            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
