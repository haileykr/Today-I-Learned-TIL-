import React, { Component } from 'react';

class UpdateContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }

    inputFormHandler(e){
        this.setState({[e.target.name]:e.target.value})
    }
    
    render() {
        return (
            <article>
                <h2>Update</h2>
                <form action="/create_process" method="POST"
                    onSubmit={function (e) {
                        e.preventDefault();
                        this.props.onSubmit(
                            this.state.id,
                            this.state.title,
                            this.state.desc 
                        );

                    }.bind(this)}
                >
                    {/* 업데이트하려면 식별자 필요 */}
                    {/* 식별자는 유저에게는 필요 x => hidden처리함 */}
                    <input type="hidden" name="id"value={this.state.id}></input>
                    <p>
                        <input
                            type="text"
                            name="title"
                            placeholder="title"
                            value={this.state.title}
                            onChange ={this.inputFormHandler.bind(this)}
                        ></input>
                    </p>

                    <p>
                        <textarea
                            name="desc"
                            placeholder="description"
                            value={this.state.desc}
                            onChange = {this.inputFormHandler}
                        ></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>

                </form>
            </article>
        );
    }
}

export default UpdateContent;