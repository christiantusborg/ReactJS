import React from "react";

export default class Patient extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { name, email, birthday, phone } = this.props;

    return (
      <li>
        <span>{name}</span>
        <span>{email}</span>
        <span>{birthday}</span>
        <span>{phone}</span>
      </li>
    );
  }
}
