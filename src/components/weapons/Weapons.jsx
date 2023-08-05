import { useEffect, useState } from "react"
import { GetAllWeapons } from "../../services/WeaponsService";
import "./Weapons.css"

export const Weapons = () => {

    const [data, setData] = useState([]);
    const [heavyWeapons, setHeavy] = useState([]);
    const [rifles, setRifles] = useState([]);
    const [shotguns, setShotguns] = useState([]);
    const [pistols, setPistols] = useState([]);
    const [snipers, setSnipers] = useState([]);
    const [smg, setSMG] = useState([]);

    const fetchData = async () =>{
        try{
            const apiData = await GetAllWeapons();
            const filteredData = apiData.data.filter((item) => item.shopData !== null);
            setData(filteredData);
            setHeavy(filteredData.filter((item) => item.shopData.category === "Heavy Weapons"));
            setRifles(filteredData.filter((item) => item.shopData.category === "Rifles"));
            setShotguns(filteredData.filter((item) => item.shopData.category === "Shotguns"));
            setPistols(filteredData.filter((item) => item.shopData.category === "Pistols"));
            setSnipers(filteredData.filter((item) => item.shopData.category === "Sniper Rifles"));
            setSMG(filteredData.filter((item) => item.shopData.category === "SMGs"));
        } catch (error) {
            console.error('Error al obtener los datos desde el componente:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    

    return (
        <>
            <div className="page pb-4" style={{position: "relative", top:"9vh"}}>
                <h1 className="text fw-bold py-2" style={{fontFamily:"'Saira Condensed', sans-serif", fontSize:"6vw", marginLeft:"10%"}}>ELIGE TU ARMA</h1>
                <hr className="container pb-4"></hr>
            <div className="position-relative d-flex justify-content-center z-1">
            <div className="accordion accordion-flush" id="accordionFlushExample" style={{width:"80%"}}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold" style={{fontFamily:"'Noto Sans JP', sans-serif", backgroundColor:"#FF4655", color:"#ECE8E1"}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        ARMAS PESADAS
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={{backgroundColor:"#ECE8E1"}}>
                    <div className="accordion-body">
                    {heavyWeapons.map((item) => (
                        <div className="container grow my-2 p-5 w-100 d-flex justify-content-center" style={{border:"1px solid #BDBCB7", width:"40%"}} key={item.uuid}>
                            <div className="prin d-flex flex-row justify-content-between" style={{height:"100%", width:"80%"}}>
                                <h6 className="sub fw-bold" style={{fontFamily:"'Saira Condensed', sans-serif", fontSize:"5vw"}}>{item.displayName.toUpperCase()}.</h6>
                                <img className="imagen" src={item.displayIcon}/>
                            </div>  
                        </div>
                    ))}
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold" style={{fontFamily:"'Noto Sans JP', sans-serif", backgroundColor:"#FF4655", color:"#ECE8E1"}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        ESCOPETAS
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={{backgroundColor:"#ECE8E1"}}>
                    <div className="accordion-body">
                    {shotguns.map((item) => (
                        <div className="container grow my-1 p-5 w-100 d-flex justify-content-center" style={{border:"1px solid #BDBCB7", width:"40%"}} key={item.uuid}>
                            <div className="prin d-flex flex-row justify-content-between" style={{height:"100%", width:"80%"}}>
                                <h6 className="sub fw-bold" style={{fontFamily:"'Saira Condensed', sans-serif", fontSize:"5vw"}}>{item.displayName.toUpperCase()}.</h6>
                                <img className="imagen" src={item.displayIcon}/>
                            </div>
                        </div>
                    ))}
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold" type="button" style={{fontFamily:"'Noto Sans JP', sans-serif", backgroundColor:"#FF4655", color:"#ECE8E1"}} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        FRANCOTIRADORES
                    </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={{backgroundColor:"#ECE8E1"}}>
                    <div className="accordion-body">
                    {snipers.map((item) => (
                        <div className="container grow my-1 p-5 w-100 d-flex justify-content-center" style={{border:"1px solid #BDBCB7", width:"40%"}} key={item.uuid}>
                            <div className="prin d-flex flex-row justify-content-between" style={{height:"100%", width:"80%"}}>
                                <h6 className="sub fw-bold" style={{fontFamily:"'Saira Condensed', sans-serif", fontSize:"5vw"}}>{item.displayName.toUpperCase()}.</h6>
                                <img className="imagen" src={item.displayIcon}/>
                            </div>
                        </div>
                    ))}
                    </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" >
                    <button  className="accordion-button collapsed fw-bold" style={{fontFamily:"'Noto Sans JP', sans-serif", backgroundColor:"#FF4655", color:"#ECE8E1"}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        PISTOLAS
                    </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" >
                    <div className="accordion-body" style={{backgroundColor:"#ECE8E1"}}>
                    {pistols.map((item) => (
                        <div className="container grow my-1 p-5 w-100 d-flex justify-content-center" style={{border:"1px solid #BDBCB7", width:"40%"}} key={item.uuid}>
                            <div className="prin d-flex flex-row justify-content-between" style={{height:"100%", width:"80%"}}>
                                <h6 className="sub fw-bold" style={{fontFamily:"'Saira Condensed', sans-serif", fontSize:"5vw"}}>{item.displayName.toUpperCase()}.</h6>
                                <img className="imagen" src={item.displayIcon}/>
                            </div>
                        </div>
                    ))}
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold" style={{fontFamily:"'Noto Sans JP', sans-serif", backgroundColor:"#FF4655", color:"#ECE8E1"}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        RIFLES
                    </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={{backgroundColor:"#ECE8E1"}}>
                    <div className="accordion-body">
                    {rifles.map((item) => (
                        <div className="container grow my-1 p-5 w-100 d-flex justify-content-center" style={{border:"1px solid #BDBCB7", width:"40%"}} key={item.uuid}>
                            <div className="prin d-flex flex-row justify-content-between" style={{height:"100%", width:"80%"}}>
                                <h6 className="sub fw-bold" style={{fontFamily:"'Saira Condensed', sans-serif", fontSize:"5vw"}}>{item.displayName.toUpperCase()}.</h6>
                                <img className="imagen" src={item.displayIcon}/>
                            </div>
                        </div>
                    ))}
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold" style={{fontFamily:"'Noto Sans JP', sans-serif", backgroundColor:"#FF4655", color:"#ECE8E1"}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                        SUBFUSILES
                    </button>
                    </h2>
                    <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={{backgroundColor:"#ECE8E1"}}>
                    <div className="accordion-body">
                    {smg.map((item) => (
                        <div className="container grow my-1 p-5 w-100 d-flex justify-content-center" style={{border:"1px solid #BDBCB7", width:"40%"}} key={item.uuid}>
                            <div className="prin d-flex flex-row justify-content-between" style={{height:"100%", width:"80%"}}>
                                <h6 className="sub fw-bold" style={{fontFamily:"'Saira Condensed', sans-serif", fontSize:"5vw"}}>{item.displayName.toUpperCase()}.</h6>
                                <img className="imagen" src={item.displayIcon}/>
                            </div>
                        </div>
                    ))}
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}