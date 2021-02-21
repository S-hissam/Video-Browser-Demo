import React from 'react'


export default class SearchBar extends React.Component {

    state = { term: '' };

    onChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return <div className="search-bar ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Video Browser by Hissam</label>
                    <input
                        placeholder="Search what you want..."
                        type="text"
                        value={this.state.term}
                        onChange={this.onChange}
                    />
                </div>
            </form>
        </div>
    }
}

