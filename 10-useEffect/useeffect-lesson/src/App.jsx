import Basics from "./Basics";
import StateChangeEffect from "./StateChangeEffect";
import PropsChangeEffect from "./PropsChangeEffect";
function App() {
  return (
    <div className="flex flex-col items-center">
     <h1 className="text-3xl">UseEffect</h1>
     <Basics />
     <StateChangeEffect />
     <PropsChangeEffect userId={2} />
    </div>
  );
}

export default App;
