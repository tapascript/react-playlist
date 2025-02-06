import Button from "./Button";
import CrazyButton from "./CrazyButton";
import Toolbar from "./Toolbar";
function App() {
  return (
    <div className="flex flex-col items-center gap-10 m-3">
     <Button />
     <CrazyButton />
     <Toolbar />
    </div>
  );
}

export default App;
