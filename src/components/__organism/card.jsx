import React from 'react'
import "./Card.css"
import info from '../../images/info.svg'

function Card(props) {
    return (
        <>
        <div className='main'>
            <div className="card">
                <div className="top">
                    <img className='mtavari' src={props.mtavari} alt="" />
                    <img className='info' src={info} alt="" />
                </div>

                <div className="bottom">
                    <div className="first">
                        <p>{props.name}</p>
                        <img src={props.ragac} alt="" />
                    </div>

                    <div className="second">
                        <p>
                        {props.text}
                        </p>
                    </div>

                    <div className="third">
                        <img src={props.Calories} alt="" />
                    </div>

                    <div className="fourth">
                        <p className="price">{props.price}</p>
                        <p className="oldPrice">{props.oldPrice}</p>
                        <button>ORDER</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card