import React, { Component } from 'react'

const Like = ({ onLike, liked }) => {

    let source = 'https://img.icons8.com/ios/25/000000/melting-hert.png'

    liked ? source = 'https://img.icons8.com/color/25/000000/melting-hert.png' : source = 'https://img.icons8.com/ios/25/000000/melting-hert.png'

    return ( 
        <a onClick={ onLike }>
            <img src={ source } alt="Icon" srcset=""/>
        </a>
     );
}
 
export default Like;