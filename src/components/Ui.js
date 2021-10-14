import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
const api = axios.create({
  baseURL: "http://localhost:3000/obj",
});
export default class App extends Component {
  state = {
    person: [],
  };
  getPerson = async () => {
    try {
      let data = await api.get(`/`).then(({ data }) => data);
      this.setState({ person: data });
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount() {
    this.getPerson()
  }
  // constructor() {
  //   super();
  //   this.getPerson();
  // }
  createPerson = async (fName, lName, email, city, work, img) => {
    await api.post("/", {
      firstName: fName,
      lastName: lName,
      email: email,
      location: city,
      profession: work,
      imgUrl: img,
    });
    this.getPerson();
  };
  deletePerson = async (id) => {
    await api.delete(`/${id}`);
    this.getPerson();
  };
  updatePerson = async (id, fName, lName, email, city, work, img) => {
    await api.patch(`/${id}`, {
      firstName: fName,
      lastName: lName,
      email: email,
      location: city,
      profession: work,
      imgUrl: img,
    });
    this.getPerson();
  };

  render() {
    let { firstName, lastName, email, work, location, imgUrl } = this.props;
    return (
      <div className="grid ">
        <button
          onClick={this.createPerson.bind(
            this,
            firstName,
            lastName,
            email,
            work,
            location,
            imgUrl
          )}
          className="py-4 mb-5 bg-blue-400 hover:bg-blue-700 text-white font-bold  px-4 rounded "
        >
          Create
        </button>
        {this.state.person.map((person) => {
          return (
            <div key={person.id}>
              <div className="grid grid-cols-12 mt-5">
                <button
                  onClick={this.updatePerson.bind(
                    this,
                    person.id,
                    firstName,
                    lastName,
                    email,
                    location,
                    work,
                    imgUrl
                  )}
                  className=" col-span-6 py-3 bg-green-500 hover:bg-green-700 text-white font-bold  px-4 rounded"
                >
                  Update
                </button>

                <button
                  className=" col-span-6 py-3  bg-red-500 hover:bg-red-700 text-white font-bold  px-4 rounded"
                  onClick={this.deletePerson.bind(this, person.id)}
                >
                  Delete
                </button>
              </div>

              <Card
                name={person.firstName + " " + person.lastName}
                work={person.profession}
                location={person.location}
                email={person.email}
                img={person.imgUrl}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
