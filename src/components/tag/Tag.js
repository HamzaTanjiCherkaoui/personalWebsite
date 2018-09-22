import React from 'react';

const Tag = ({label,color})=>{
    return (
        <React.Fragment>
        <div className={`tag ${color}`}>{label}</div>
        </React.Fragment>
    )
}
export default Tag;