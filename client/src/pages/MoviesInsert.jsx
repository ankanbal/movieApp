import React, { Component } from "react";
import api from "../api";

import styled from "styled-components";

var Title = styled.h1.attrs({
  className: "h1",
})``;

var Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 0 30px;
`;

var Label = styled.label`
  margin: 5px;
`;

var InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
`;

var Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`;

var CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
`;

class MoviesInsert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      rating: "",
      time: "",
    };
  }

  handleChangeInputName = async (event) => {
    var name = event.target.value;
    this.setState({ name });
  };

  handleChangeInputRating = async (event) => {
    var rating = event.target.validity.valid
      ? event.target.value
      : this.state.rating;

    this.setState({ rating });
  };

  handleChangeInputTime = async (event) => {
    var time = event.target.value;
    this.setState({ time });
  };

  handleIncludeMovie = async () => {
    var { name, rating, time } = this.state;
    var arrayTime = time.split("/");
    var payload = { name, rating, time: arrayTime };

    await api.insertMovie(payload).then((res) => {
      window.alert(`Movie inserted successfully`);
      this.setState({
        name: "",
        rating: "",
        time: "",
      });
    });
  };

  render() {
    var { name, rating, time } = this.state;
    return (
      <Wrapper>
        <Title>Create Movie</Title>

        <Label>Name: </Label>
        <InputText
          type="text"
          value={name}
          onChange={this.handleChangeInputName}
        />

        <Label>Rating: </Label>
        <InputText
          type="number"
          step="0.1"
          lang="en-US"
          min="0"
          max="10"
          pattern="[0-9]+([,\.][0-9]+)?"
          value={rating}
          onChange={this.handleChangeInputRating}
        />

        <Label>Time: </Label>
        <InputText
          type="text"
          value={time}
          onChange={this.handleChangeInputTime}
        />

        <Button onClick={this.handleIncludeMovie}>Add Movie</Button>
        <CancelButton href={"/movies/list"}>Cancel</CancelButton>
      </Wrapper>
    );
  }
}

export default MoviesInsert;
