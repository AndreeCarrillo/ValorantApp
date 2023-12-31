import { useState } from "react"
import { Navbar } from "../components/navbar/Navbar"
import { Maps } from "../components/maps/Maps"
import { Agents } from "../components/agents/Agents"
import { Weapons } from "../components/weapons/Weapons"
import { About } from "../components/about/About"

export const Dashboard = ()=>{

    const [comboSelect, setComboSelect] = useState("ABOUT US")
    const updateComboSelect = (newValue)=>{
        setComboSelect(newValue);        
    }

    return (
        <>
            <div style={{backgroundColor:"#ECE8E1"}}>
                <Navbar updateComboSelect={updateComboSelect}/>
                {comboSelect=='ABOUT US' && <About/>}
                {comboSelect=='MAPS' && <Maps/>}                
                {comboSelect=='AGENTS' && <Agents/>}   
                {comboSelect=='WEAPONS' && <Weapons/>}
            </div>
        </>
    )
}