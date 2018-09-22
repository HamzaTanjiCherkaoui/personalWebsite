import React from 'react';
import './Card.css';
import Tag from '../tag/Tag';
const Card = ({title, subTitle, image, effect, tags, onClick}) => {
    return (
        <React.Fragment>
        <a onClick={onClick}>
            <li className={`card ${effect}`}>
                    <div className={`image red `}>
                    {image}
                    </div>
                    <div className="details">
                        <div className="label">{title}</div>
                        <div className="description">{subTitle}</div>
                        <div className="tags">
                            {tags.map(tag=>{
                                return <Tag label={tag.label} color ={tag.color}/>
                            })}
                        </div>
                        <div>
                        </div>
                    </div>
            </li>
            </a>
        </React.Fragment>
    );
}

export default Card ;