import { useState } from "react";
import { InputBox } from "./components/InputBox";
import { UseCurrency } from "./hooks/UseCurrency";
function App() {
  const [ammount, setAmmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmmount, setConvertedAmmount] = useState(0);

  const crrencyInfo = useCurrencyInfo(from);
  const options = Object.keys(crrencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmmount(ammount);
    setAmmount(convertedAmmount);
  };

  convert = () => {
    setConvertedAmmount(ammount * crrencyInfo[to]);
  };
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3943750/pexels-photo-3943750.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border-gray border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                lable="form"
                ammount={ammount}
                cuurrencyOptions={options}
                onCurrncyChange={(currncy) => setAmmount(ammount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2-translate-x-1/2 translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <inputBox
                lable="to"
                ammount={convertedAmmount}
                cuurrencyOptions={options}
                onCurrncyChange={(currncy) => setTo(currncy)}
                selectCurrency={from}
                ammountDisable
              />
            </div>
            <button></button>
          </form>
        </div>
      </div>
      <h1 className=" py-2 text-white text-3xl bg-orange-500 text-center">
        currency changer App
      </h1>
    </div>
  );
}

export default App;
