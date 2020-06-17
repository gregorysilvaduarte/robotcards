import React, { Component } from "react";
import { sort } from "./../helpers/util";
import SearchBox from "./../components/SearchBox";
import CardList from "./../components/CardList";
import Scroll from "./../components/Scroll";
import Loading from "./../components/Loading";
import { AppWrapper, MainTitle } from "./../assets/css/App";
import ErrorBoundry from "./../components/ErrorBoundry";

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
      <AppWrapper>
        <MainTitle>RoboCards</MainTitle>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </AppWrapper>
    ) : (
      <Loading />
    );
  }
}

export default App;
