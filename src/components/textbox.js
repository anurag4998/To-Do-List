import React from 'react';
import swal from 'sweetalert';



class Textbox extends React.Component {
    constructor(props) {
        super(props)
    }

    handlesubmit = (event) => {
        event.preventDefault()
        const option = (event.target.elements.option.value.trim())    //event.target - form element .element - elements of form .option name of input field, value-value inside

        let error = this.props.addedOptionfunction(option)
        if (error) {
            swal("Uh-Oh!", error);

        }
        event.target.elements.option.value = ""
    }

    render() {
        return (

            <div className='Container'>
                <form autocomplete="off" onSubmit={this.handlesubmit}>
                    <input className='textinputbox' type="text" name="option" />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default Textbox;