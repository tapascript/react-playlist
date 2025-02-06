import PropTypes from 'prop-types';

function Button({ onClick, children }) {
  return (
    <button className="bg-purple-600 text-white p-1 rounded cursor-pointer" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

function PlayButton({ movieName }) {
  function handlePlayClick() {
    console.log(`Playing ${movieName}!`);
  }

  return (
    <Button onClick={handlePlayClick}>
      Play {movieName}
    </Button>
  );
}

PlayButton.propTypes = {
  movieName: PropTypes.string.isRequired,
};

function UploadButton() {
  return (
    <Button onClick={() => console.log('Uploading!')}>
      Upload Image
    </Button>
  );
}

export default function Toolbar() {
  return (
    <div className="flex gap-1.5">
      <PlayButton movieName="Tom and Jerry" />
      <UploadButton />
    </div>
  );
}
