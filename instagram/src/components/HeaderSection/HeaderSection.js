import React from 'react'

import './HeaderSection.css'
import NavSection from '../NavSection/NavSection'

const HeaderSection = props => {
    return (
        <div className='headerSection'>
            {/* <h2>This is the header section</h2> */}
            <NavSection />
        </div>
    )
}

export default HeaderSection