import React, { Component } from 'react'

const Like = ({ handleLike, liked }) => {

    let source = 'https://img.icons8.com/ios/50/000000/melting-hert.png'

    liked ? source = 'https://img.icons8.com/color/50/000000/melting-hert.png' : source = 'https://img.icons8.com/ios/50/000000/melting-hert.png'

    return ( 
        <a onClick={ handleLike }>
            <img src={ source } alt="Icon" srcset=""/>
        </a>
     );
}
 
export default Like;