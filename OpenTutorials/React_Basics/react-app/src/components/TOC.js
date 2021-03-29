import React,{Component} from 'react';

class TOC extends Component {
    render() {
        const data = this.props.data;
        const lists = [];
        let i = 0;
        while (i < data.length){
            lists.push(
                <li key = {data[i].id}>
                    <a 
                        href = {"/content/"+data[i].id}
                        data_id = {data[i].id}
                        onClick={function(id, e){
                            e.preventDefault();
                            // this.props.onChangePage(e.target.dataset.id);
                            this.props.onChangePage(id);
                        }.bind(this, data[i].id)}
                    >{data[i].title}</a>
                    </li>)
            i++;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;