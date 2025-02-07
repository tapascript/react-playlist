import PropTypes from 'prop-types';

function Button({message, children}) {
  function handleClick(event, message) {
    console.log(event.target);
    console.log(message);
  }

  return (
    <button onClick={(event) => handleClick(event,message)} className="bg-purple-600 text-white p-1 rounded cursor-pointer">
      {children}
    </button>
  );
}


export default function CrazyButton() {
  
  return (
    <div className="flex gap-1.5">
      <Button message="Dancing!">
        Dance
      </Button>
      <Button message="Jumpping!">
        Jump
      </Button>
    </div>
  );
}

Button.propTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};