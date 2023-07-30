import { useEffect, useState } from "react";
import { GetAllMaps } from "../../services/MapsService"
import { MapContainer } from "./MapContainer";

export const Maps = () => {

    
    const [data, setData] = useState([]);

    const fetchData = async () =>{
        try{
            const apiData = await GetAllMaps();
            setData(apiData.data)
        } catch (error) {
            console.error('Error al obtener los datos desde el componente:', error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <>
            <div style={{position:"relative", top:"9vh"}}>
                <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-inner">
                            {data.map((item, index) => (
                                <div className={index===0?"carousel-item active":"carousel-item"} key={item.uuid}>
                                    <MapContainer index={index} coordinates={item.coordinates} displayName={item.displayName} splash={item.splash}/>
                                </div>               
                            ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}