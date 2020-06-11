import React, { Component } from "react";
import { sort } from "./../helpers/util";
import SearchBox from "./../components/SearchBox";
import CardList from "./../components/CardList";
import Scroll from "./../components/Scroll";
import Loading from "./../components/Loading";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) =>
        response
          .map(({ id, name, email, address }) => {
            return {
              id,
              name,
              email,
              address,
              active: Math.random() >= 0.5,
            };
          })
          .sort((a, b) => sort(a, b, "name"))
      )
      .then((robots) => {
        this.setState({ robots });
      });
  }

  onSearchChange = ($event) => {
    this.setState({ searchfield: $event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;

    const filteredRobots = robots.filter((item) => {
      return item.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return robots.length ? (
      <div className="text-center container-search">
        <h1 className="height-spacement sega-font">RoboCards</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    ) : (
      <Loading />
    );
  }
}

export default App;
