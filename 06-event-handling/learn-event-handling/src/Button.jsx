export default function Button() {
  function handleClick() {
    console.log('You clicked me!');
  }

  return (
    <button onClick={handleClick} className="bg-purple-600 text-white p-1 rounded cursor-pointer">
      Click me
    </button>
  );
}