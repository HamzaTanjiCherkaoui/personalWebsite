import React from 'react';
import './Card.css';
import Tag from '../tag/Tag';
const Card = ({title, subTitle, logoColor, image, effect, tags}) => {
    return (
        <React.Fragment>
        
            <li className={`card ${effect}`}>
                    <div className={`image ${logoColor} `}>
                    {image}
                    </div>
                    <div className="details">
                        <div className="label">{title}</div>
                        <div className="description">{subTitle}</div>
                        <div className="tags">
                            {tags.map(tag=>{
                                return <Tag key={tag.label} label={tag.label} color ={tag.color}/>
                            })}
                        </div>
                        <div>
                        </div>
                    </div>
            </li>
            
        </React.Fragment>
    );
}

export default Card ;