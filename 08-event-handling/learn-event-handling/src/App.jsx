import Button from "./Button";
import TextBox from "./TextBox";
import CrazyButton from "./CrazyButton";
import ToolBar from "./ToolBar";
import Register from "./Register";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="flex flex-col items-center gap-10 m-3">
      <Navbar />
      <Button />
      <TextBox />
      <CrazyButton />
      <ToolBar />
      <Register />
    </div>
  );
}

export default App;
