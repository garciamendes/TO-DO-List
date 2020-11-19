function Inputs(props) {
  return (
    <>
      <input
        className={props.style}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChangeText}
        placeholder={props.placeholder}/>
    </>
  )
}

export default Inputs