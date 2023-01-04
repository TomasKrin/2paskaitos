import '../App.css'

const Hero = ({title, subtitleOne, subtitleTwo, children}) => {
    return(
        <div className='hero'>
            <h1>{title}</h1>
            <p className='heroText'>{subtitleOne}</p>
            <p className='heroText'>{subtitleTwo}</p>
            {children}
        </div>
    )
}

export default Hero