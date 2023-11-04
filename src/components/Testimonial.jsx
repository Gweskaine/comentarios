

const Testimonial = ({nombre, image, stars, text}) => {
  return (
    <div className="mainContainer">
        <div className="title">
        <img src={image} alt={nombre}/>    
            <h2>{nombre}</h2>            
        </div>
        <div className="content">
            {stars}
            <p>{text}</p>            
        </div>
    </div>
  )
}

export default Testimonial