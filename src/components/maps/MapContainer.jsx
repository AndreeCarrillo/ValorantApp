import PropTypes from 'prop-types';

export const MapContainer = ({index, displayName, splash, coordinates}) =>{

    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{backgroundImage:`url(${splash})`, backgroundSize:"cover", width:"100%", height:"91vh", backgroundPosition:"center"}}>
                <span style={{color:"#ECE8E1", position:"absolute", top:"20px", left:"25px", fontSize:"1.2em"}}>{coordinates}</span>
                <h1 style={{fontFamily:"'Saira Condensed', sans-serif", color:"#FF4655", fontSize:"16vw"}}>{displayName.toUpperCase()}</h1>
                {index<=9?
                <span style={{color:"#ECE8E1", position:"absolute", bottom:"20px", right:"25px", fontSize:"4vw"}}>0{index+1}</span>:
                <span style={{color:"#ECE8E1", position:"absolute", bottom:"20px", right:"25px", fontSize:"4vw"}}>{index}</span>}
            </div>
        </>
    )
}
MapContainer.propTypes = {
    displayName: PropTypes.string.isRequired,
    splash: PropTypes.string.isRequired,
    coordinates: PropTypes.string.isRequired,
    index:PropTypes.number.isRequired
}