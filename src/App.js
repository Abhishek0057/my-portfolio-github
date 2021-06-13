import "./App.scss";
import $ from "jquery";
import { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      portfolioData: {},
      resumeData: {},
    }
  }

  componentDidMount() {
    this.loadportfolioData();
    this.loadresumeData();

  }

  loadportfolioData() {
    $.ajax({
      url: `portfolio_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ portfolioData: data });
        document.title = `${this.state.portfolioData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadresumeData() {
    $.ajax({
      url: `resume_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <div>
        <Header portfolioData={this.state.portfolioData.basic_info} />
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.portfolioData.basic_info}
        />
        <Skills
          sharedSkills={this.state.portfolioData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer resumeBasicInfo={this.state.portfolioData.basic_info} />
      </div>
    );
  };
}

export default App;
