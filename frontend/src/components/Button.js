function Button(props) {
  return (
    <>
      <button className={props.style} onClick={props.click}>{props.title && props.title}{props.icon && props.icon}</button>
    </>
  )
}

export default Button