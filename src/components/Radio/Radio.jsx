import React from 'react'

const Radio = ({ label, name, value }) => {
    return (
        <div>
            <input type="radio" name={name} value={value} />
            <label>{label}</label>
        </div>
    )
}

export default Radio