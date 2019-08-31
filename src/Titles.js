// it will be a stateless component as the state will be registered in App.js

import React from 'react'

const Titles = ({titles, deleteTitle}) => {

    const titleList = titles.length ? (
        titles.map(title => {
            return(
                <div className="collection-item" key={title.id}>
                    <span onClick={() => {deleteTitle(title.id)}}>{title.text}</span>
                </div>
            )
        })
    ) : (
        <p className= "center">Start typing ...</p>
    );
    return (
        <div className="titles collection">
            {titleList}
        </div>
    )
}

export default Titles;
