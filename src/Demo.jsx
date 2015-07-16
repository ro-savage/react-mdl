"use strict";

import React from "react"; // eslint-disable-line no-unused-vars
import {
    Badge,

    Button,

    Card,
    CardTitle,
    CardActions,
    CardMedia,
    CardSupporting,
    CardMenu,

    Appbar,

    Icon,

    ProgressBar,
    IndeterminateProgressBar,
    Spinner,

    Menu,

    Slider,

    Table,

    TextField,
    TextArea,

    CheckBox,
    Switch,
    IconToggle,

    Tooltip
} from "./components";

class Demo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sliderValue: 0,
            checkBoxValue: "off",
            checkBoxValue2: "off",
            switchValue: "off",
            switchValue2: "off",
            iconToggleValue: "off",
            iconToggleValue2: "off"
        };

        this.handleChange = key => event => {
            const { checked, value } = event.target;
            const finalValue = (checked !== undefined) ? checked : value; // handle checkbox

            this.setState({ [key]: finalValue });
        };
    }

    render() {

        const validationPatterns = {
            numbers: "-?[0-9]*(\.[0-9]+)?",
            email: "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
            textOnly: "",
            anything: "*"
        };

        return <div>

            <h1>react-mdl</h1>
            <a href="http://www.getmdl.io">http://www.getmdl.io</a>
            <hr />


            <h2>Badges</h2>

            <Badge badge="4">
                Inbox
            </Badge>
            <br /><br />

            <Badge badge="♥">
                <Icon type="account_box" />
            </Badge>
            <br /><br />


            <h2>Buttons</h2>

            <Button type="fab" ripple={false}>
                <Icon type="add" />
            </Button>
            <br /><br />

            <Button type="fab">
                <Icon type="add" />
            </Button>
            <br /><br />

            <Button type="fab" disabled={true}>
                <Icon type="add" />
            </Button>
            <br /><br />

            <Button type="fab" color="primary">
                <Icon type="add" />
            </Button>
            <br /><br />

            <Button type="fab" color="accent">
                <Icon type="add" />
            </Button>
            <br /><br />

            <Button type="raised">
                button
            </Button>
            <br /><br />

            <Button type="raised" color="primary">
                button
            </Button>
            <br /><br />

            <Button type="raised" color="accent">
                button
            </Button>
            <br /><br />

            <Button>
                button
            </Button>
            <br /><br />

            <Button color="primary">
                button
            </Button>
            <br /><br />

            <Button color="accent">
                button
            </Button>
            <br /><br />

            <Button type="mini-fab">
                <Icon type="add" />
            </Button>
            <br /><br />

            <Button type="mini-fab" color="primary">
                <Icon type="add" />
            </Button>
            <br /><br />

            <Button type="icon">
                <Icon type="mood" />
            </Button>
            <br /><br />

            <Button type="icon" color="primary">
                <Icon type="mood" />
            </Button>
            <br /><br />


            <h2>Cards</h2>

            <Card shadow="2" style={{
                width: "512px"
            }}>
                <CardTitle style={{
                    color: "#fff",
                    height: "176px",
                    background: "purple"
                }}>
                    Welcome
                </CardTitle>
                <CardSupporting>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardSupporting>
                <CardActions border={true}>
                    <Button color="primary">
                        Get Started
                    </Button>
                </CardActions>
                <CardMenu style={{
                    color: "#fff"
                }}>
                    <Button type="icon">
                        <Icon type="share" />
                    </Button>
                </CardMenu>
            </Card>
            <br /><br />

            <Card shadow="2" style={{
                width: "320px",
                height: "320px"
            }}>
                <CardTitle style={{
                    backgroundColor: "#46b6ac",
                    color: "#fff"
                }}>
                    Update
                </CardTitle>
                <CardSupporting>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardSupporting>
                <CardActions border={true}>
                    <Button color="primary">
                        View Updates
                    </Button>
                </CardActions>
            </Card>
            <br /><br />

            <Card shadow="2" style={{
                width: "256px",
                height: "256px",
                background: "blue"
            }}>
              <CardTitle />
              <CardActions style={{
                  height: "52px",
                  padding: "16px",
                  background: "rgba(0, 0, 0, 0.2)"
              }}>
                <span style={{ color: "#fff" }}>Image.jpg</span>
              </CardActions>
            </Card>
            <br /><br />

            <Card shadow="2" style={{
                width: "256px",
                height: "256px",
                background: "#3e4eb8"
            }}>
                <CardTitle>
                    <h4 style={{ color: "#fff" }}>
                        Featured event:<br />
                        May 24, 2016<br />
                        7-11pm
                    </h4>
                </CardTitle>
                <CardActions border={true} style={{
                    borderColor: "rgba(255, 255, 255, 0.2)"
                }}>
                    <Button style={{ color: "#fff" }}>
                        Add to Calendar
                    </Button>
                </CardActions>
            </Card>
            <br /><br />


            <h2>Layout</h2>

            <Appbar title="title" left={
                <Icon type="menu" />
            } right={
                <Icon type="more" />
            } />


            <h2>Loading</h2>

            <IndeterminateProgressBar />
            <br /><br />

            <ProgressBar progress="33" buffer="66" />
            <br /><br />

            <ProgressBar progress="50" />
            <br /><br />

            <Spinner />
            <br /><br />

            <Spinner color="primary" />
            <br /><br />


            <h2>Menus</h2>

            <Menu />
            <br /><br />


            <h2>Sliders</h2>

            <Slider
                min="0"
                max="50"
                value={this.state.sliderValue}
                onChange={this.handleChange("sliderValue")}
                tabIndex="0" />
            <br /><br />

            <h2>Toggles</h2>

            <CheckBox
                checked={this.state.checkBoxValue}
                onChange={this.handleChange("checkBoxValue")}
                defaultChecked={true}
                label="My ticked checkbox"
                />
            <br /><br />
            <CheckBox
                checked={this.state.checkBoxValue2}
                onChange={this.handleChange("checkBoxValue2")}
                defaultChecked={false}
                label="My checkbox"
                />
            <br /><br />
            <Switch
                checked={this.state.switchValue}
                onChange={this.handleChange("switchValue")}
                defaultChecked={false}
                label="My switch"
                />
            <Switch
                checked={this.state.switchValue2}
                onChange={this.handleChange("switchValue2")}
                defaultChecked={true}
                label="My switched on switch"
                />
            <br /><br />
            <IconToggle
                checked={this.state.iconToggleValue}
                onChange={this.handleChange("iconToggleValue")}
                defaultChecked={false}
                label="Icon on"
                />
            <IconToggle
                checked={this.state.iconToggleValue2}
                onChange={this.handleChange("iconToggleValue2")}
                defaultChecked={true}
                label="Icon off"
                >
                My label
            </IconToggle>

            <h2>Tables</h2>

            <Table />
            <br /><br />


            <h2>Text Fields</h2>

            <TextField
                pattern={validationPatterns.email}
                type="floating"
                errorMsg="This is my error message">
                Enter your email address
            </TextField>
            <br /><br />

            <h2>Text Areas</h2>
            <TextArea
                pattern={validationPatterns.anything}
                type="floating"
                errorMsg="This is also an error message"
                >
                Enter your comment
            </TextArea>
            <br /><br />


            <h2>Tooltips</h2>

            <Tooltip />
            <br /><br />

        </div>;
    }

}


export default Demo;
