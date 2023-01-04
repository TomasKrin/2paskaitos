import '../App.css'

const Hero = ({title, subtitleOne, subtitleTwo, children, img}) => {
    return(
        <div className='hero' style={{backgroundImage: `url("https://w.wallhaven.cc/full/qz/wallhaven-qzdqvr.jpg")`}}>
            <h1>{title}</h1>
            <p className='heroText'>{subtitleOne}</p>
            <p className='heroText'>{subtitleTwo}</p>
            {children}
        </div>
    )
}

export default Hero