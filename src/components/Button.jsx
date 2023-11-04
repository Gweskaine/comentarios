

const Button = ({onClickfn, value}) => {
  return (
    <button onClick={onClickfn}>{value}</button>
  )
}

export default Button