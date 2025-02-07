

const TextBox = () => {
  function handleChange(event) {
    console.log(event.target.valueAsNumber)
  }
  return (
    <input type="number" className="border" onChange={handleChange}/>
  )
}

export default TextBox