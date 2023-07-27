import { useState } from "react"
import { Navbar } from "../components/navbar/Navbar"
import { About } from "../components/about/about"
import { Stick } from "../components/stick/Stick"

export const Dashboard = ()=>{

    const [comboSelect, setComboSelect] = useState("ABOUT US")
    const updateComboSelect = (newValue)=>{
        setComboSelect(newValue);        
    }

    return (
        <>
            <div style={{backgroundColor:"#ECE8E1"}}>
                {/* <Stick/> */}
                <Navbar updateComboSelect={updateComboSelect}/>
                <About/>
            </div>
        </>
    )
}