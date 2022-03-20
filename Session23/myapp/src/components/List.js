import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((user) => {
          return (
            <p key={user.id}>
              <span onClick={() => this.props.viewUser(user)}>{user.name}</span>
              <button onClick={() => this.props.deleteUser(user.id)}>
                delete
              </button>
            </p>
          );
        })}
        {this.props.user ? (
          <p>
            {this.props.user.name} - {this.props.user.age} -
            {this.props.user.price} -
          </p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default List;
