import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    state = {
        description: 0,
        name: 0
    }
  

    //TODO - combine these two change handlers
    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    // dispatch with ID from click from details reducer
    handleSaveChange = (id) => {
        console.log('handle save changes clicked');
        //return if description or name are blank, tell user to fill out both
        if (this.state.description === null || this.state.name === null) {
            alert('Updated name and description needed to save');
            return;
        }
        //dispatch to change_info with the state
        this.props.dispatch({
            type: 'CHANGE_INFO',
            payload: this.state
        })
        //dispatch to get_details to re-load details page with new DB info
        this.props.dispatch({
            type: 'FETCH_DETAILS',
            payload: this.state
        })
      
        this.props.history.push('/details')
    }

    //on cancel, reload details page, same dispatch as click on the details from home page
    handleCancelChange = () => {
        this.props.dispatch({
            type: 'FETCH_DETAILS',
            payload: this.state
        })
        this.props.history.push(`/details`)
    }

    render() {
        return (
            <div>
                {/* use id from redux store details reducer to send to sagas to DB with cancel and save buttons */}
                <button onClick={() => this.handleCancelChange(this.props.genres.id)}>Cancel Changes</button>
                <button onClick={() => this.handleSaveChange(this.props.genres.id)}>Save Changes</button>
                {/* save inputs in local state before dispatch on button click */}
                <p>Change movie name:</p>
                <textarea onChange={this.handleNameChange}/>
                <p>Change movie description:</p>
                <textarea  onChange={this.handleDescriptionChange} />
            </div>
        );
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        genres: reduxStore.genres,
    }
}

export default connect(mapStateToProps)(Edit);