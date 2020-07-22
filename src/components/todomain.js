import React from 'react';
import Header from './header'
import Textbox from './textbox'
import Mapoptions from './mapoptions'
import Removebutton from './remove'


class Todomain extends React.Component {
    state = {
        items: []
    }

    addedOption = (addedOption) => {
        if (!addedOption) {
            return ("Add something to begin with!!!")
        }

        if (this.state.items.includes(addedOption)) {
            return ("You have already added this task")
        }

        this.setState((prevState) => ({
            items: prevState.items.concat(addedOption)

        }))

    };

    remove = (removedtext) => {
        this.setState((prevState) => ({
            items: prevState.items.filter(items => items === removedtext ? false : true)
        }))
    }

    removeall = () => {
        this.setState(() => ({
            items: []

        }))

    }


    render() {

        return (
            <div >
                <Header />
                <div className='wrapperdiv'>
                    <Textbox addedOptionfunction={this.addedOption} />
                    <Mapoptions
                        list={this.state.items}
                        removeoptionfunction={this.remove} />
                    <Removebutton length={this.state.items.length}
                        removeallfunction={this.removeall} />
                </div>
            </div>
        )
    }
}


export default Todomain