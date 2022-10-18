// When building an app, it is recommended that the app component should be the parent of all other components
import React, { Component } from "react";
import CardList from "./CardList";
// import { robots } from "./robots";
import SearchBox from "./SearchBox";
import "./index.css";
import Scroll from "./Scroll"
import { render } from "@testing-library/react";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>   {
        return response.json()
      })
      .then(users => {
        this.setState({ robots: users });
      })
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });
    if(robots.length = 0) { // if the response was taking too much time to fetch, render the h1 tag with a loading text
        return <h1>Loading</h1>
    } else {
        return (
            <div className="container tc">
              <h1 className="f1">RobotFriends</h1>
              <SearchBox searchChange={this.onSearchChange} />
              <CardList robots={filteredRobots} />
            </div>
          );
    }
   
  }
}

export default App;
