function Inputs(props) {
  return (
    <>
      <input className={props.style} type={props.type} id={props.id} placeholder={props.placeholder}/>
    </>
  )
}

export default Inputs