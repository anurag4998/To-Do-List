import React from 'react';
import Displayoption from './displayoptions';

const Mapoptions = (props) => {
    return (
        props.list.map((itemlist) =>
            <Displayoption
                key={itemlist}
                text={itemlist}
                removeoptionfunction={props.removeoptionfunction}

            />)
    )
}


export default Mapoptions