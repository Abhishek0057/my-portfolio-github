import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import Particles from 'react-particles-js';
import light_particles from '../const/light_particles';
import dark_particles from '../const/dark_particles';

class Header extends Component {

    constructor(props) {
        super();
        this.state = { checked: false };
        this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
    }

    onThemeSwitchChange(checked) {
        this.setState({ checked });
        this.setTheme();
    }

    setTheme() {
        var dataThemeAttribute = "data-theme";
        var body = document.body;
        var newTheme =
            body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
        body.setAttribute(dataThemeAttribute, newTheme);
    }

    render() {
        if (this.props.portfolioData) {
            var name = this.props.portfolioData.name;
            this.titles = this.props.portfolioData.titles.map(title => [title.toUpperCase(), 1500]).flat();
        }
        // animation
        const HeaderTitleTypeAnimation = React.memo(() => {
            return <Typical className="title-styles" steps={this.titles} loop={50} />
        }, (props, prevProp) => true);

        return (
            <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
                <React.Fragment>
                    <Particles
                        params={this.state.checked === false ? light_particles : dark_particles}
                        className="particle" />
                    <div className="ml-1">
                        <Switch
                            checked={this.state.checked}
                            onChange={this.onThemeSwitchChange}
                            offColor="#457b9d"
                            onColor="#353535"
                            className="react-switch mx-auto"
                            width={90}
                            height={40}
                            uncheckedIcon={
                                <span
                                    className="iconify"
                                    data-icon="ic-round-dark-mode"
                                    data-inline="false"
                                    style={{
                                        display: "block",
                                        height: "100%",
                                        fontSize: 25,
                                        textAlign: "end",
                                        marginLeft: "20px",
                                        color: "#353239",
                                    }}
                                ></span>
                            }
                            checkedIcon={
                                <span
                                    className="iconify"
                                    data-icon="noto-v1:sun-with-face"
                                    data-inline="false"
                                    style={{
                                        display: "block",
                                        height: "100%",
                                        fontSize: 25,
                                        textAlign: "end",
                                        marginLeft: "10px",
                                        color: "#353239",
                                    }}
                                ></span>
                            }
                            id="icon-switch"
                        />
                    </div>

                </React.Fragment>
                <div className="row aligner" style={{ height: '100%' }}>
                    <div className="col-md-12">
                        <div>
                            <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
                            <br />
                            <h1 className="mb-0">
                                <Typical steps={[name]} wrapper="p" />
                            </h1>
                            <div className="title-container">
                                <HeaderTitleTypeAnimation />
                            </div>

                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;