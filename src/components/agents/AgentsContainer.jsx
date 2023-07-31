import PropTypes from 'prop-types';
import "./Agents.css"
/* eslint-disable react/jsx-no-comment-textnodes */

export const AgentsContainer = ({item, role,index}) => {

    return (
        <>
            {/* <div className='imgc z-1' style={index%2==0?{position:"absolute", margin:"-2%", left:"11%", width:"38%"}:{position:"absolute", margin:"-2%", right:"11%", width:"38%"}}>
                <img width={"100%"} src={item.bustPortrait}></img>
            </div> */}
            <div className='box' style={{backgroundColor:`#111`, opacity:"0.5", transition:"all 1s ease-linear"}}>
            <div className='imgc z-1' style={index%2==0?{position:"absolute", margin:"-2%", left:"11%", width:"38%"}:{position:"absolute", margin:"-2%", right:"11%", width:"38%"}}>
                <img width={"100%"} src={item.bustPortrait}></img>
            </div>
                <div className={index%2==0?"d-flex flex-row align-items-end py-5":"d-flex flex-row-reverse align-items-start py-5"} style={index%2===0?{backgroundColor:`#${item.backgroundGradientColors[0]}`, marginInline:"3%"}:{backgroundColor:`#${item.backgroundGradientColors[0]}`, margin:"3%"}}>
                    <div style={{width:"60%"}}></div>
                    <div className="px-4" style={index%2 == 0 ? {width:"25%", backgroundColor:`#${item.backgroundGradientColors[0]}`, marginRight:"10%"}:{width:"25%", backgroundColor:`#${item.backgroundGradientColors[0]}`, marginLeft:"10%"}}>
                        <h1 className='d-flex justify-content-center' style={{fontFamily:"'Saira Condensed', sans-serif", fontSize:"10vh", color:"#111"}}>{item.displayName.toUpperCase()}</h1>
                        <hr className='d-flex justify-content-center' style={{border:`1.5px solid #111`, width:"100%"}}></hr>
                        <h5 className="py-0" style={{fontFamily:"'Saira Condensed', sans-serif", color:"#111"}}>// ROL</h5>
                        <div className="d-flex flex-row align-items-stretch pb-3">
                            <h1 className="" style={{fontFamily:"'Saira Condensed', sans-serif", fontSize:"6vh", color:"#111"}}>{role.displayName.toUpperCase()}</h1>
                            <img className="mx-3 mt-3" style={{width:"2em", height:"2em", color:"#111"}} src={role.displayIcon}/>
                        </div>
                        <h5 style={{fontFamily:"'Saira Condensed', sans-serif", color:"#111"}}>// BIOGRAFÍA</h5>
                        <p className="py-2 fw-bolder" style={{fontFamily: "'Noto Sans JP', sans-serif", color:"#111", width:"100%"}}>{item.description}</p>
                        <hr className='d-flex justify-content-center' style={{border:`1.5px solid #111`, width:"100%" }}></hr>
                        <div className='d-flex justify-content-center'>
                            <button type='button' className='btn fw-bold mt-2 fs-5' style={{fontFamily:"'Saira Condensed', sans-serif", color:"#111", backgroundColor:`#FF4655`, borderRadius:"0", boxShadow:`7px 5px 0px #0F1923`}}>CONOCER MAS</button>
                        </div>                        
                    </div>
                </div>
            </div>
        </>
    )
}
AgentsContainer.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    role: PropTypes.object.isRequired
}