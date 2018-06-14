import React, { Component } from 'react'

const User = (props) => {
    return (
        <div className="user" style = {props.style}>
            {props.userName}
        </div>
    )
}

export default User