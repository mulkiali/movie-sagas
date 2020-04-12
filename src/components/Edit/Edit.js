import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    state = {
        description: '',
        name: ''
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

    handleSaveChange = (id) => {
        console.log('handle save changes clicked', this.props.details.id);
        //return if description or name are blank, tell user to fill out both
        if (this.state.description === null || this.state.name === null) {
            alert('Updated name and description needed to save');
            return;
        }
        //dispatch to change_info with the state
        this.props.dispatch({
            type: 'UPDATE_INFO',
            payload: this.state
        })
        //dispatch to get_details to re-load details page with new DB info
        this.props.dispatch({
            type: 'FETCH_DETAILS',
            payload: this.state
        })
      
        this.props.history.push('/details')
        console.log('payload', this.state)
    }

    //on cancel, reload details page, same dispatch as click on the details from home page
    handleCancelChange = (id, history) => {
        this.props.history.push(`/details`)
        this.props.dispatch({
            type: 'FETCH_DETAILS',
            payload: this.state
        })
        
    }

    render() {
        return (
            <div>
                
                <button onClick={() => this.handleCancelChange(this.props.history, this.props.genres.id)}>Cancel Changes</button>
                <button onClick={() => this.handleSaveChange(this.props.genres.id)}>Save Changes</button>
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
        details: reduxStore.details,
        movies: reduxStore.movies
    }
}

export default connect(mapStateToProps)(Edit);