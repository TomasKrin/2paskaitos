const ContentCard = ({image, imgTitle}) => {
    return(
        <div className='cardContainer'>
            <img className='cardImage' src={image} alt="Card" />
            <p>{imgTitle}</p>
        </div>
    )
}

export default ContentCard