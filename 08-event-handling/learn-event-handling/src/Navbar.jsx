import PropTypes from "prop-types";

function Button({onClick, children}) {
  function handleClick(event) {
    event.stopPropagation();
    onClick()
  }
  return(
    <button 
      className="bg-purple-600 text-white p-1 rounded cursor-pointer"
      onClick={handleClick} >
        {children}
      </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Navbar() {
  return (
    <div className="flex gap-1.5 border" onClick={() => {
      console.log('You clicked on the toolbar!');
    }}>
      <Button onClick={() => console.log('Playing!')}>
        Play Movie
      </Button>
      <Button onClick={() => console.log('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}