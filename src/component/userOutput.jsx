import React from 'react'

const UserOutput = ({display, isInformation}) => {
return (
    <div>
        {
            isInformation ? <h1>Welcome, {display}. Hope You have a Nice day yaa</h1> 
            : null
        }
    </div>
)

}

export default UserOutput


