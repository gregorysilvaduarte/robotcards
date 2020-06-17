import React, { Component } from "react";
import { sort } from "./../helpers/util";
import SearchBox from "./../components/SearchBox";
import CardList from "./../components/CardList";
import Scroll from "./../components/helpers/Scroll";
import Loading from "./../components/helpers/Loading";
import { AppWrapper, MainTitle } from "./../assets/style/App";
import { robots } from "./../backend/robots";
import ErrorBoundry from "./../components/helpers/ErrorBoundry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    const robotsSorted = robots.sort((a, b) => sort(a, b, "name"));
    this.setState({ robots: robotsSorted });
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
