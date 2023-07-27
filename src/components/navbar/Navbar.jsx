import PropTypes from 'prop-types';
import './navbar.css'

export const Navbar = ({updateComboSelect}) =>{

    const handleSelectChange = (event) => {
        const { value } = event.target;
        updateComboSelect(value);
    };

    return (
        <>
            <div className='d-flex flex-row justify-content-between align-items-center z-3' style={{position:"fixed" , backgroundColor: '#111', height: "80px", width:"100%"}}>
                <div className='d-flex flex-row w-50 justify-content-left align-items-center'>
                    <a className='py-4 mx-5' style={{cursor:'pointer'}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" height="26" viewBox="0 0 100 100" width="38"><path d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z" fill="#F9F9F9"></path></svg></a>
                    <h3 className='d-none d-sm-block py-4 mx-1 my-0 fw-bolder' style={{color: '#F9F9F9', fontSize: "26px"}}>VALORANT</h3>
                </div>
                <div className='w-20 p-4'>
                    <select className="combo form-select" onChange={handleSelectChange}>
                        <option value="ABOUT US">ABOUT US</option>
                        <option value="AGENTS">AGENTS</option>
                        <option value="MAPS">MAPS</option>
                        <option value="WEAPONS">WEAPONS</option>
                    </select>
                </div>
            </div>
        </>
    )
}
Navbar.propTypes = {
    updateComboSelect: PropTypes.func.isRequired
}