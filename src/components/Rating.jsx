

function Rating({vote}) {

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++){
      stars.push(<i  key={i} className={`bi bi-star${ i < vote ? '-fill' : ''}`}></i>)
    }
    return stars
  }

  return(
    <p className="card-text text-warning">{renderStars()}</p>
  )
}

export default Rating