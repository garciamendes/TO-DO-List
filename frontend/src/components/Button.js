function Button(props) {
  return (
    <>
      <button type={props.type} className={props.style} onClick={props.click}>{props.title && props.title}{props.icon && props.icon}</button>
    </>
  )
}

export default Button