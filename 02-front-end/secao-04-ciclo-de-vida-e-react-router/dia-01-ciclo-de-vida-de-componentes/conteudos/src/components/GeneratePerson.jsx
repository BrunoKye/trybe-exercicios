import React, { Component } from 'react';
import Loading from './Loading';
import PersonInfo from './PersonInfo';

export default class GeneratePerson extends Component {
  state = {
    loading: true,
    person: [],
  };

  fetchPerson = async () => {
    const url = 'https://api.randomuser.me/';
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      loading: false,
      person: data.results,
    });
  }
  
  componentDidMount = () => {
    this.fetchPerson();
  }

  shouldComponentUpdate = (_nextProps, nextState) => {
    const maxAge = 50;
    const getAge = nextState.person[0].dob.age;
    
    if (getAge < maxAge) return true;
  }
  
  getPersonInfo({ name, email, dob, picture }) {
    return {
      name: `${name.first} ${name.last}`,
      email,
      age: dob.age,
      image: picture.thumbnail,
    };
  }

  render() {
    const { loading, person } = this.state;

    if (loading) return <Loading />;
    
    return (
      <div>
        <PersonInfo person={ this.getPersonInfo(person[0]) }/>
      </div>
    );
  }
}
