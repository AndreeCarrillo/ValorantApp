import './About.css'

export const About = () => {
    return (
        <>  
            <section className='section1 container py-3 pb-5' style={{position:"relative", top:"80px"}}>
                <hr/>
                <h1 className="tittle fw-bold my-3">SOMOS VALORANT</h1>
                <div className='container d-flex flex-lg-row flex-sm-column flex-column justify-content-around align-items-sm-center'>
                    <div className='container d-flex justify-content-center flex-column p-lg-5'>
                        <h5 className='subtittle mx-2 mb-4 fw-bolder px-2'>DESAFIA LOS LÍMITES</h5>
                        <p className='mx-2 px-3 fw-medium'>Combina tu estilo y experiencia en un escenario global y competitivo. Tienes 13 rondas para atacar y defender tu lado con armas precisas y habilidades tácticas. Además, al contar con una sola vida por ronda, tendrás que pensar más rápido que tu oponente si quieres sobrevivir. Enfréntate a enemigos en los modos competitivo y normal, así como en Deathmatch y Spike Rush.</p>
                        <div className='my-3' style={{width:"100px", height:"8px", backgroundColor:"#FF4655"}}></div>
                    </div>
                    <div className='d-flex justify-content-around flex-column align-items-center'>
                        <div className='d-flex flex-row my-4'>
                            <div style={{width:"8px", height:"8px", backgroundColor:"#FF4655"}}></div>
                            <div className='mx-5' style={{width:"8px", height:"8px", backgroundColor:"#FF4655"}}></div>
                        </div>
                        <video width={"80%"} controls autoPlay loop>
                            <source src='https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltefd45731d8f9d9df/6217f2ea910a6c613c73168c/VALORANT_PLAY22_16x9_Target4_v005.mp4' type='video/mp4'/>
                        </video>
                    </div>
                </div>
            </section>
            <div className='img z-1 my-5' style={{position:"absolute", left:"10%", width:"45vw"}}>
                <img className='w-100' src='./agents.png'></img>
            </div>
            <section className='section2 pt-4' style={{backgroundColor:"#FF4655",position:"relative", top:"80px"}}>
                <div className='container d-flex flex-row justify-content-lg-end justify-content-center p-0'>
                    <div className='container d-flex justify-content-end flex-column m-0 py-5 z-0' style={{width:"45%"}}>
                        <h1 className="tittle2 fw-bold mb-5">TUS AGENTES</h1>
                        <h5 className='subtittle2 mx-lg-2 mb-4 fw-bolder px-lg-2 mx-sm-0 px-sm-0'>LA CREATIVIDAD ES TU MEJOR ARMA.</h5>
                        <p className='parrafo mx-lg-2 mx-sm-0 px-lg-3 px-sm-0 fw-medium'>Más allá de las armas y las balas, podrás elegir a un agente dotado de habilidades versátiles, veloces y letales con las que crearás oportunidades para sobresalir. Ningún agente se jugará igual, ni ningún momento memorable se verá igual.</p>
                        <div className='my-3' style={{width:"100px", height:"8px", backgroundColor:"#732C38"}}></div>
                    </div>
                </div>
            </section>
            <div className='img' style={{position:"absolute", right:"0"}}>
                <img width={"100%"} src='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt02c83424f7b41a97/6243813d8850ee0e8ea0ae56/maps-03ebbf2c074f13a65af1dba0c80f767e.png'></img>
            </div>
            <section className='pt-4' style={{position:"relative", top:"10%"}}>
                <div className='container d-flex flex-row justify-content-lg-start justify-content-center'style={{position:"relative", top:"80px"}}>
                    <div className='container d-flex justify-content-start flex-column m-0 mt-5' style={{width:"45%"}}>
                        <h1 className="tittle fw-bold my-lg-5 my-sm-0 mb-lg-5 mb-sm-0">TUS MAPAS</h1>
                        <h5 className='subtittle mx-lg-2 mx-sm-0 mb-4 fw-bolder px-lg-2 px-sm-0'>PELEA ALREDEDOR DEL MUNDO</h5>
                        <p className='mx-2 mx-sm-0 px-3 px-sm-0 fw-medium' style={{width:"80%"}}>Cada mapa es un campo de batalla para demostrar tu pensamiento creativo. Están diseñados especialmente para estrategias de equipo, jugadas espectaculares y momentos para remontar. Haz la jugada que otros imitarán en el futuro.</p>
                        <div className='my-3' style={{width:"100px", height:"8px", backgroundColor:"#732C38"}}></div>
                    </div>
                </div>
            </section>
        </>
    )
}