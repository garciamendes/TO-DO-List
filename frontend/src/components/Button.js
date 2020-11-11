function Button(props) {
  return (
    <>
      <button className={props.style} onClick={props.click}>{props.title}</button>
    </>
  )
}

export default Button