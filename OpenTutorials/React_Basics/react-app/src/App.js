import React, { Component } from "react";
import "./App.css";

import ReadContent from "./components/ReadContent";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

import Highcharts from "highcharts";

import HighchartsReact from "highcharts-react-official";

import drilldown from "highcharts/modules/drilldown";

drilldown(Highcharts);

const options = {
  chart: {
    type: "column",
  },
  title: {
    text: "Browser market shares. January, 2018",
  },
  subtitle: {
    text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>',
  },
  accessibility: {
    announceNewData: {
      enabled: true,
    },
  },
  xAxis: {
    type: "category",
  },
  yAxis: {
    title: {
      text: "Total percent market share",
    },
  },
  legend: {
    enabled: true,
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: "{point.y:.1f}%",
      },
    },
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat:
      '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
  },

  series: [
    {
      name: "Browsers",
      colorByPoint: true,
      data: [
        {
          name: "Chrome",
          y: 62.74,
          drilldown: "Chrome",
        },
        {
          name: "Firefox",
          y: 10.57,
          drilldown: "Firefox",
        },
        {
          name: "Internet Explorer",
          y: 7.23,
          drilldown: "Internet Explorer",
        },
      ],
    },
  ],
  drilldown: {
    series: [
      {
        id: "Chrome",
        data: [
          {
            name: "Nesting Practice!",
            y: 5,

            drilldown: "nested",
          },
        ],
      },

      {
        name: "Chrome",

        id: "nested",
        data: [
          ["v65.0", 0.1],
          ["v64.0", 1.3],
          ["v63.0", 53.02],
          ["v62.0", 1.4],
          ["v61.0", 0.88],
          ["v60.0", 0.56],
          ["v59.0", 0.45],
          ["v58.0", 0.49],
          ["v57.0", 0.32],
          ["v56.0", 0.29],
          ["v55.0", 0.79],
          ["v54.0", 0.18],
          ["v51.0", 0.13],
          ["v49.0", 2.16],
          ["v48.0", 0.13],
          ["v47.0", 0.11],
          ["v43.0", 0.17],
          ["v29.0", 0.26],
        ],
      },
      {
        name: "Firefox",
        id: "Firefox",
        data: [
          ["v58.0", 1.02],
          ["v57.0", 7.36],
          ["v56.0", 0.35],
          ["v55.0", 0.11],
          ["v54.0", 0.1],
          ["v52.0", 0.95],
          ["v51.0", 0.15],
          ["v50.0", 0.1],
          ["v48.0", 0.31],
          ["v47.0", 0.12],
        ],
      },
      {
        name: "Internet Explorer",
        id: "Internet Explorer",
        data: [
          ["v11.0", 6.2],
          ["v10.0", 0.29],
          ["v9.0", 0.27],
          ["v8.0", 0.47],
        ],
      },
    ],
  },
};
class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3; //UI에 영향을 주지 않을 정보는 state값으로 안함
    this.state = {
      mode: "welcome",
      selected_content_id: 2,
      subject: { title: "WEB", sub: "World Wide Web!" },
      welcome: { title: "Welcome", desc: "Hello, React!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is HyperText, ..." },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "Javascript", desc: "Javascript is for interactive" },
      ],
    }
    
    this.chartRef = React.createRef();
    this.legendRef = React.createRef();
  }

  handleBtnClick(e) {
    this.legendRef = this.chartRef.current.chart.legend
    console.dir(this.legendRef)
    console.log(this.legendRef)
  }

  getReadContent() {
    let i = 0;
    while (i < this.state.contents.length) {
      const data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
        break;
      }
      i++;
    }
  }

  getContent() {
    let _title,
      _desc,
      _article,
      _contents = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      _contents = this.getReadContent();
      _article = (
        <ReadContent
          title={_contents.title}
          desc={_contents.desc}
        ></ReadContent>
      );
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            //add content to this.state.contents
            this.max_content_id++;
            // this.state.contents.push(
            //   { id: this.max_content_id, title: _title, desc: _desc }
            // );
            _contents = Array.from(this.state.contents);
            _contents.push({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });
            //불변성 위해
            // _contents = this.state.contents.concat(
            //   { id: this.max_content_id, title: _title, desc: _desc }
            // )
            this.setState({
              contents: _contents,
              mode: "read",
              selected_content_id: this.max_content_id,
            });
          }.bind(this)}
        />
      );
    } else if (this.state.mode === "update") {
      _contents = this.getReadContent();
      _article = (
        <UpdateContent
          data={_contents}
          onSubmit={function (_id, _title, _desc) {
            const _contents = Array.from(this.state.contents);
            let i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === _id) {
                _contents[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
              i++;
            }
            this.setState({
              contents: _contents,
              mode: "read",
            });
          }.bind(this)}
        />
      );
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
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: Number(id),
            });
          }.bind(this)}
          data={this.state.contents}
        />
        <Control
          onChangeMode={function (_mode) {
            if (_mode === "delete") {
              if (window.confirm("delete?")) {
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
                  mode: "welcome",
                });
                alert("completed deleting it!");
              }
            } else {
              this.setState({
                mode: _mode,
              });
            }
          }.bind(this)}
        />
        {this.getContent()}

        <HighchartsReact
          highcharts={Highcharts}
          options={options}

          ref = {this.chartRef}
        />
        <button onClick = {this.handleBtnClick.bind(this)} />
      </div>
    );
  }
}

export default App;
