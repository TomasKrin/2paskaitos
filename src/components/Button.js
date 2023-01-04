import '../App.css'

const Button = ({children, color}) => {
    return(
        <button style={{backgroundColor:color}} className='btn'>{children}</button>
    )
}

export default Button;