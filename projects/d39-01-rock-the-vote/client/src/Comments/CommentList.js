import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editItem, deleteComment } from '../redux/item-reducer';
import CommentForm from './CommentForm';
import CommentEdit from './CommentEdit';

class CommentList extends Component {
    constructor(props) {
        super(props);
        // this.initialState = {
        //     inputs: {
        //         commentText: props.commentText || "",
        //     }
        // }
        // this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitComment = this.handleSubmitComment.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    handleSubmitComment(id, itemObj, commentText) {
        itemObj.comments.push(commentText);
        this.props.editItem(id, itemObj);
    }

    handleDelete(id, itemObj, delIndex) {
        let newCommentsArr = itemObj.comments.filter((comment, index) => delIndex !== index);
        let editedItem = { ...itemObj, comments: newCommentsArr };
        this.props.editItem(id, editedItem);
    }

    render() {
        const textList = this.props.comments.map((comment, index) => {
            return (
                <div className="comment" key={comment + index}>

                    <button onClick={() => this.handleDelete(this.props._id, this.props, index)} className="del-button">DEL</button>

                    <CommentEdit itemObj={this.props} editingIndex={index} editingText={comment} />

                </div>
            );
        })

        return (
            <div className="comment-container">
                <h3>Comments</h3>

                <CommentForm {...this.props} />

                {textList}

            </div>
        )
    }

}

export default connect(null, { editItem, deleteComment })(CommentList);
