import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-lg font-medium text-center bg-green-400 text-white">
        About Systems
      </h1>
      <div className="flex items-center justify-between p-4">
        <Card
          userName="Acer Nitro5"
          para="Acer is a Taiwanese multinational company that is in the hardware and electronics business. Acer was founded as Multitech in 1976 and renamed Acer in 1987. It is one of the world's "
          btnText="Read More.."
        />
        <Card
          userName="Macbook"
          para="Founded in a garage in 1976 by Steve Jobs, Steve Wozniak, and Ronald Wayne, Apple began as a personal computer pioneer that today makes everything from laptops to portable media players.. "
          btnText="Read More.."
        />
        <Card
          userName="Dell"
          para="Dell is a computer technology company based in Round Rock, Texas, United States, that develops, sells, repairs and supports computers and related products and services. "
          btnText="Read More.."
        />
        <Card
          userName="Jio"
          para="Reliance Jio Infocomm is an Indian telecom operator that's a subsidiary of Reliance Industries, and launched its services in September 2016. "
          btnText="Read More.."
        />
      </div>
    </>
  );
}

export default App;
