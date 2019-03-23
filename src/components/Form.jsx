import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button.jsx';
import { Add } from '../actions'

class Form extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.store = this.context.store

		this.state = {
			title: '',
			note: ''
		}

		this.handleSubmit = (event) => {
			event.preventDefault();

			let title = this.state.title;
			let note = this.state.note;

			if (title) {
				this.store.dispatch(Add(title, note))
				this.setState({ title: '', note: '' });
			}
		}

		this.handleChange = (event) => {
			if (event.target.tagName == "INPUT") {
				let title = event.target.value;
				this.setState({ title })
			}
			if (event.target.tagName == 'TEXTAREA') {
				let note = event.target.value;
				this.setState({ note })
			}
		}
	}


	render() {
		return (
			<form className="mainForm" onSubmit={this.handleSubmit}>

				<input type="text"
					placeholder="title"
					autoFocus={true}
					value={this.state.title}
					onChange={this.handleChange} />

				<textarea
					value={this.state.note}
					onChange={this.handleChange}></textarea>

				<Button type="submit">Tape</Button>

			</form>
		);
	}
}

Form.contextTypes = {
	store: PropTypes.object
}

export default Form;