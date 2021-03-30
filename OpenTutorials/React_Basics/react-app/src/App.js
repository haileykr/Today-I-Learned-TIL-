import React, { Component } from 'react';
import './App.css';

import ReadContent from './components/ReadContent';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3; //UI에 영향을 주지 않을 정보는 state값으로 안함
    this.state = {
      mode: 'welcome',
      selected_content_id: 2,
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is HyperText, ...' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'Javascript', desc: 'Javascript is for interactive' }
      ]
    }
  };

  getReadContent() {
    let i = 0;
    while (i < this.state.contents.length) {
      const data = this.state.contents[i]
      if (data.id === this.state.selected_content_id) {
        return data;
        break;
      }
      i++;
    }
  }

  getContent() {
    let _title, _desc, _article, _contents = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
      _contents = this.getReadContent();
      _article = <ReadContent title={_contents.title} desc={_contents.desc}></ReadContent>
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function (_title, _desc) {
        //add content to this.state.contents
        this.max_content_id++;
        // this.state.contents.push(
        //   { id: this.max_content_id, title: _title, desc: _desc }
        // );
        _contents = Array.from(this.state.contents);
        _contents.push({ id: this.max_content_id, title: _title, desc: _desc })
        //불변성 위해
        // _contents = this.state.contents.concat(
        //   { id: this.max_content_id, title: _title, desc: _desc }
        // )
        this.setState({
          contents: _contents,
          mode: 'read',
          selected_content_id: this.max_content_id
        });
      }.bind(this)}
      />
    } else if (this.state.mode === 'update') {
      _contents = this.getReadContent();
      _article = <UpdateContent data={_contents} onSubmit={
        function (_id, _title, _desc) {

          const _contents = Array.from(this.state.contents);
          let i = 0;
          while (i < _contents.length) {
            if (_contents[i].id === _id) {
              _contents[i] = { id: _id, title: _title, desc: _desc }
              break;
            }
            i++;
          }
          this.setState({
            contents: _contents,
            mode: 'read'
          });
        }.bind(this)}
      />
    }
    return _article;
  }

  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: 'welcome' })
          }.bind(this)}
        >
        </Subject>
        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            });
          }.bind(this)}
          data={this.state.contents} />
        <Control onChangeMode={function (_mode) {
          if (_mode === 'delete') {
            if (window.confirm('delete?')) {
              const _contents = Array.from(this.state.contents);
              let i = 0;
              while (i < this.state.contents.length) {
                if (_contents[i].id === this.state.selected_content_id) {
                  _contents.splice(i, 1);
                  break;
                }
                i++;
              }
              this.setState({
                contents: _contents,
                mode: 'welcome'
              });
              alert('completed deleting it!');
            }
          } else {
            this.setState({
              mode: _mode
            })
          }
        }.bind(this)} />
        {this.getContent()}
      </div>
    );
  }
}

export default App;