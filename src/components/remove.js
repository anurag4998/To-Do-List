import React from 'react';

const Remobvebutton = (props) =>
    (
        <div className='remove'>

            {props.length > 0 ?

                <button className='removebutton' onClick={props.removeallfunction}>
                    REMOVE ALL
                    </button>
                // <div className='innerremoveicon'> <ion-icon size="small" name="trash-outline" className="icon"></ion-icon></div>



                : undefined}
        </div>
    )

export default Remobvebutton;