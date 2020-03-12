import React, { Component } from "react";
import Home from "./components/Posts";
import About from "./components/AddPosts";
//import Contact from "./components/Contact";
import DisplayPosts from "./components/DisplayPosts";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    user: {
      id: "",
      title: "",
      category: "",
      text: ""
    },

    defaultUser: [
      {
        id: 1,
        title: "My day in Integrify",
        category: "work",
        text:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        id: 2,
        title: "My day in Integrify",
        category: "work",
        text:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }
    ]
  };
  handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);

    const user = {
      ...this.state.user,
      id: this.state.defaultUser.length + 1,
      [name]: value
    };

    this.setState({ user: user });
  };
  addPost = () => {
    const copyUsers = [...this.state.defaultUser, this.state.user];
    this.setState({
      defaultUser: copyUsers
    });
    const user = {
      title: "",
      category: "",
      text: ""
    };
    this.setState({ user: user });
  };
  deleteStudent = id => {
    const forDelete=[...this.state.defaultUser]
    const students = forDelete.filter(
      student => id !== student.id
    );
    this.setState({ defaultUser: students });
  };

  render() {
    console.log(this.state.user);
    console.log(this.state.defaultUser);

    return (
      <BrowserRouter>
        <div className="App">
          <div>
            <Switch>
              <Route
                path="/"
                exact
                component={() => <Home blog={this.state.defaultUser} />}
              />
              <Route
                path="/about"
                exact
                component={() => (
                  <About
                    user={this.state.user}
                    onChange={this.handleChange}
                    onClick={this.addPost}
                  />
                )}
              />
            {/*   <Route
                path="/contact"
                exact
                component={() => (
                  <Contact
                    data={this.state.defaultUser}
                    del={this.deleteStudent}
                  />
                )}
              /> */}
              <Route
                exact
                path={`/post/:id`}
                render={props => (
                  <DisplayPosts
                    test = {props}
                    id={props.match.params.id}
                    data={this.state.defaultUser}
                    del={this.deleteStudent}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
