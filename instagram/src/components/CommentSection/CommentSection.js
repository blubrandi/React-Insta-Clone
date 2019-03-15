import React from 'react'


const Comments = props => {
    console.log('hello')
    return (
        <div>
       {props.comment.username}
       {props.comment.text}
       </div>
    )
}

export default Comments