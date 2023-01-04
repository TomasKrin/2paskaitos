const Content = ({title, text, children}) => {
    return(
        <div className='contentContainer'>
            <h1>{title}</h1>
            <p>{text}</p>
            {children}
        </div>
    )
}

export default Content