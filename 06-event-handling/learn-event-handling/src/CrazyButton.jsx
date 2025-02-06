import PropTypes from 'prop-types';

function CrazyButton({ message, children }) {
  return (
    <button onClick={() => console.log(message)} className="bg-purple-600 text-white p-1 rounded cursor-pointer">
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div className="flex gap-1.5">
      <CrazyButton message="Dancing!">
        Dance
      </CrazyButton>
      <CrazyButton message="Jumpping!">
        Jump
      </CrazyButton>
    </div>
  );
}

CrazyButton.propTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
