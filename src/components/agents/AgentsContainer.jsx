/* eslint-disable react/jsx-no-comment-textnodes */
export const AgentsContainer = () => {
    return (
        <>
            <div style={{backgroundColor:"#FF4655"}} className="d-flex flex-row justify-content-around">
                <div className="d-flex justify-content-center align-items-center">
                    <img width={"80%"} src='https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/fullportrait.png'></img>
                </div>
                <div>
                    <div style={{width:"45%"}}>
                        <h1 style={{fontFamily:"'Saira Condensed', sans-serif", fontSize:"10vh"}}>FADE</h1>
                        <span style={{fontFamily:"'Saira Condensed', sans-serif", color:"#ECE8E1"}}>// ROL</span>
                        <div className="d-flex flex-row">
                            <h1 style={{fontFamily:"'Saira Condensed', sans-serif", fontSize:"5vh", color:"#ECE8E1"}}>INITIATOR</h1>
                            <img style={{width:"2em", height:"2em", color:"#ECE8E1"}} src="https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png"/>
                        </div>
                        <span style={{fontFamily:"'Saira Condensed', sans-serif", color:"#ECE8E1"}}>// BIOGRAFÍA</span>
                        <p style={{fontFamily: "'Noto Sans JP', sans-serif", color:"#ECE8E1", width:"60%"}}>Well-dressed and well-armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.</p>
                        
                    </div>
                </div>
            </div>
        </>
    )
}