import './jumbotron.css'
import soup from '../../assets/img/soup.jpg'
import mat from '../../assets/img/mat.jpg'
import miso from '../../assets/img/miso.jpg'
import soup2 from '../../assets/img/soup2.jpg'
const Jumbotron = () => {
  return (
    <>
      <div className="img-container">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)),url(${mat})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '100% 30%',
          }}
        ></div>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)),url(${soup})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '100% 80%',
          }}
        ></div>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)),url(${miso})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '100% 90%',
          }}
        ></div>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)),url(${soup2})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '100% 55%',
          }}
        ></div>
        <h2>PRODUCTS</h2>
      </div>
    </>
  )
}
export default Jumbotron
