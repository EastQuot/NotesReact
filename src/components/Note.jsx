// import React from 'react';

// import Button from './Button.jsx';


// class Notes extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             editing: false
//         };

//     }


//     handleSubmit(event) {
//         event.preventDefault();

//         let title = this.refs.title.value;
//         let note = this.refs.note.value;

//         this.props.onEdit(this.props.id, title, note);
//         this.setState({ editing: false });
//     }

//     renderDisplay() {
//         return (
//             <li className="item">

//                 <span className="title">{this.props.title}</span>
//                 <span className="note">{this.props.note}</span>

//                 <Button className="fa fa-pencil-square-o"
//                     onClick={() => this.setState({ editing: true })} />


//                 <Button className="fa fa-trash"
//                     onClick={() => this.props.onDelete(this.props.id)} />
//             </li>
//         );
//     }

//     renderForm() {
//         return (
//             <form className="editForm" onSubmit={this.handleSubmit.bind(this)}>
//                 <input type="text"
//                     ref="title" defaultValue={this.props.title} />

//                 <textarea
//                     ref="note" defaultValue={this.props.note} ></textarea>

//                 <Button className="fa fa-floppy-o" type="submit" />
//             </form>
//         )
//     }

//     render() {
//         return this.state.editing ? this.renderForm() : this.renderDisplay();
//     }
// }


// export default Notes







import React from 'react';

import Button from './Button.jsx';


class Notes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            note: this.props.note,
            title: this.props.title
        };
    }


    handleSubmit(event) {
        event.preventDefault();

        const { onEdit, id } = this.props;
        let title = this.state.title
        let note = this.state.note;

        onEdit(id, title, note);
        this.setState({ editing: false });
    }


    handleChange(event) {
        if (event.target.tagName == "INPUT") {
            let title = event.target.value;
            this.setState({ title })
        }
        if (event.target.tagName == 'TEXTAREA') {
            let note = event.target.value;
            this.setState({ note })
        }
    }


    renderDisplay() {
        return (
            <li className="item">

                <span className="title">{this.state.title}</span>
                <span className="note">{this.state.note}</span>

                <Button className="fa fa-pencil-square-o"
                    onClick={() => this.setState({ editing: true })} />


                <Button className="fa fa-trash"
                    onClick={() => this.props.onDelete(this.props.id)} />
            </li>
        );
    }

    renderForm() {
        return (
            <form className="editForm" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.title}
                />

                <textarea
                    onChange={this.handleChange.bind(this)}
                    value={this.state.note}
                ></textarea>

                <Button className="fa fa-floppy-o" type="submit" />
            </form>
        )
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}


export default Notes

