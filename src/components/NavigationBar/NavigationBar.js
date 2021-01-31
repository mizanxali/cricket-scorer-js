import React from "react"
import { Link } from "react-router-dom"

const NavigationBar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/scorecard'>Scorecard</Link>
        </div>
    )
}

export default NavigationBar