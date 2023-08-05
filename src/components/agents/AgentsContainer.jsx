import PropTypes from 'prop-types';
import "./Agents.css"
import { useState } from 'react';
/* eslint-disable react/jsx-no-comment-textnodes */

export const AgentsContainer = ({item, role,index}) => {

    const [titleAbility, setTitleAbility] = useState("");
    const [abilityInfo, setAbilityInfo] = useState("");

    const audioPlay = () => {
        const audio = new Audio(item.voiceLine.mediaList[0].wave)
        audio.play();
    }

    const handlerAbilityInfo = (info, title) => {
        setAbilityInfo(info);
        setTitleAbility(title);
    }

    return (
        <>
            <div className='box' style={{backgroundColor:`#111`, opacity:"0.5", transition:"all 1s ease-linear"}}>
            <div className='imgc z-1' style={index%2==0?{position:"absolute", margin:"-2%", left:"12%", width:"38%"}:{position:"absolute", margin:"-2%", right:"12%", width:"38%"}}>
                <img width={"100%"} src={item.bustPortrait}></img>
            </div>
                <div className={index%2==0?"principal d-flex flex-row align-items-end py-5":"principal d-flex flex-row-reverse align-items-start py-5"} style={index%2===0?{backgroundColor:`#${item.backgroundGradientColors[0]}`, marginInline:"3%"}:{backgroundColor:`#${item.backgroundGradientColors[0]}`, margin:"3%"}}>
                    <div className='ghost' style={{width:"60%"}}></div>
                    <div className="padding px-4" style={index%2 == 0 ? {width:"25%", backgroundColor:`#${item.backgroundGradientColors[0]}`, marginRight:"10%"}:{width:"25%", backgroundColor:`#${item.backgroundGradientColors[0]}`, marginLeft:"10%"}}>
                        <h1 className='d-flex justify-content-center' style={{fontFamily:"'Saira Condensed', sans-serif", fontSize:"5em", color:"#111"}}>{item.displayName.toUpperCase()}</h1>
                        <hr className='d-flex justify-content-center' style={{border:`1.5px solid #111`, width:"100%"}}></hr>
                        <h5 className="py-0" style={{fontFamily:"'Saira Condensed', sans-serif", color:"#111"}}>// ROL</h5>
                        <div className="div2 d-flex flex-row align-items-stretch pb-2">
                            <h1 className="" style={{fontFamily:"'Saira Condensed', sans-serif", fontSize:"5em", color:"#111"}}>{role.displayName.toUpperCase()}</h1>
                            <img className="imgb mx-3 mt-3" style={{width:"2em", height:"2em", color:"#111"}} src={role.displayIcon}/>
                        </div>
                        <h5 style={{fontFamily:"'Saira Condensed', sans-serif", color:"#111"}}>// BIOGRAFÍA</h5>
                        <p className="parraf py-2 fw-bolder" style={{fontFamily: "'Noto Sans JP', sans-serif", color:"#111", width:"100%", textAlign:"justify", fontSize:"1em"}}>{item.description}</p>
                        <hr className='d-flex justify-content-center' style={{border:`1.5px solid #111`, width:"100%" }}></hr>
                        <div className='d-flex justify-content-center'>
                            <button onClick={audioPlay} type='button' className='btn fw-bold mt-2 fs-5' data-bs-toggle="modal" data-bs-target={`#exampleModal${index}`} style={{fontFamily:"'Saira Condensed', sans-serif", color:"#111", backgroundColor:`#FF4655`, borderRadius:"0", boxShadow:`7px 5px 0px #0F1923`}}>CONOCER MAS</button>
                        </div>                        
                    </div>
                </div>
            </div>
            <div className="modal fade" id={`exampleModal${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{backgroundColor:`#${item.backgroundGradientColors[0]}`}}>
                        <div className="modal-header" style={{borderBottom:`2px solid #${item.backgroundGradientColors[3]}`}}>
                            <img src={item.displayIcon} width={"10%"} className='me-2'></img>
                            <h5 style={{fontFamily:"'Saira Condensed', sans-serif", fontSize:"2em"}} className="modal-title">{item.displayName.toUpperCase()}</h5>
                            <button type="button" className="btn-close me-1" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" >
                            <h5 style={{fontFamily:"'Saira Condensed', sans-serif", color:"#111"}}>BIOGRAFÍA</h5>
                            <p className="fw-bolder" style={{fontFamily: "'Noto Sans JP', sans-serif", color:`#111`, width:"100%", textAlign:"justify"}}>{item.description}</p>
                        </div>
                        <div className="modal-footer d-flex flex-column justify-content-around" style={{borderTop:`2px solid #${item.backgroundGradientColors[3]}`}}>
                            <div className='d-flex flex-row justify-content-around flex-wrap'>
                                {item.abilities.map((ability)=>(
                                    <div className='d-flex flex-row justify-content-around flex-wrap'  key={ability.displayName}>
                                        {ability.slot=="Passive"?<></>:
                                        <div className='ability-box mx-3 my-1' style={{backgroundColor:`#${item.backgroundGradientColors[3]}`, boxShadow:`0px 0px 10px #${item.backgroundGradientColors[1]}`}}>
                                            <a onClick={()=>handlerAbilityInfo(ability.description, ability.displayName.toUpperCase())} style={{cursor:"pointer"}}>
                                            <img className='ability p-2' style={{ opacity:"0.5"}} src={ability.displayIcon} width={"60vw"}></img>
                                            </a>
                                        </div>}
                                    </div>
                                ))}
                            </div>
                            <h5 className="txt mt-2" style={{ fontFamily: "'Saira Condensed', sans-serif", color: "#111", fontSize: "3em", transition: "all 1s ease-linear" }}>{titleAbility}</h5>
                            <p className="txt fw-bolder" style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#111", width: "100%", textAlign: "justify", transition: "all 1s ease-linear" }}>{abilityInfo}</p>
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