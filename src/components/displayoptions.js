import React from 'react';


const Displayoption = (props) => {
    console.log(props)
    return (
        <div className='displayoption'>

            {props.text ? <h4>{props.text}</h4> : undefined}
            {props.text ? <button
                onClick={() => {
                    props.removeoptionfunction(props.text);
                }}

            > x
          </button> : undefined}

        </div>
    )
}

export default Displayoption