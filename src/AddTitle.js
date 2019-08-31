import React, { Component } from 'react';

class AddTitle extends Component{
    state = {
        text: ''
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTitle(this.state);            {/* Calling function to add title */}
        this.setState({
            text: ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Add new title: </label>
                    <input type="text" onChange={this.handleChange} value={this.state.text} />
                </form>
            </div>
        )
    }
}

export default AddTitle