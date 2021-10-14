import React, { Component } from "react";
import UI from "./Ui";
import v from "validator";

export default class Read extends Component {
  state = {
    firstName: "Muhammad Talal",
    lastName: "Numan",
    eMail: "talalnuman1@gmail.com",
    location: "Lahore",
    work: "Web Developer",
    imgUrl:"https://source.unsplash.com/random"
  };
  changeFirstName = (e) => {
    let fName = e.target.value;
    this.setState({ firstName: fName });
  };
  changeLastName = (e) => {
    let lName = e.target.value;
    this.setState({ lastName: lName });
  };
  changeEmail = (e) => {
    let email = e.target.value
    if(v.isEmail(email)){
      this.setState({ eMail: email });
    }
    else{
      alert("Not an email")
    }
    
  };
  changeWork = (e) => {
    let work = e.target.value;
    this.setState({ work: work });
  };
  changeLocation = (e) => {
    let location = e.target.value;
    this.setState({ location: location });
  };
  changeImage = (e) => {
    let img = e.target.value;
    this.setState({ imgUrl : img});
  };
  render() {
    const { firstName, lastName, eMail, location, work ,imgUrl} = this.state;
    return (
      <div>
        <div className="mt-10 sm:mt-0 flex py-40 justify-center items-center bg-green-100">
          <div className="md:grid md:grid-cols-1 md:gap-6 ">
            
            <div className="mt-5 md:mt-0 md:col-span-2 ">
              <form action="http://localhost:3000/obj" >
                <div className="shadow overflow-hidden  sm:rounded-md">
                  <div className="px-4 py-5 bg-green-300 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 md:col-span-6 lg:col-span-4">
                        <label
                          htmlFor="first_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="first_name"
                          placeholder="First Name"
                          id="first_name"
                          autoComplete="given-name"
                          className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-600 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md"
                          onChange={this.changeFirstName}
                        />
                      </div>

                      <div className="col-span-6 md:col-span-6 lg:col-span-4">
                        <label
                          htmlFor="last_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last_name"
                          placeholder="Last Name"
                          id="last_name"
                          autoComplete="family-name"
                          className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-600 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md"
                          onChange={this.changeLastName}
                        />
                      </div>

                      <div className="col-span-6 md:col-span-6 lg:col-span-4">
                        <label
                          htmlFor="email_address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email_address"
                          placeholder="name123@gmail.com"
                          id="email_address"
                          autoComplete="email"
                          className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-600 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md"
                          onChange={this.changeEmail}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="location"
                          className="block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          placeholder="Karachi"
                          onChange={this.changeLocation}
                          name="location"
                          id="location"
                          className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-600 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="profession"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Profession
                        </label>
                        <input
                          type="text"
                          onChange={this.changeWork}
                          placeholder="Teacher"
                          name="profession"
                          id="profession"
                          autoComplete="profession"
                          className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-600 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-6 lg:col-span-8">
                        <label
                          htmlFor="profession"
                          className="block text-sm font-medium text-gray-700"
                        >
                         Image URL
                        </label>
                        <input
                          type="text"
                          onChange={this.changeImage}
                          name="img"
                          placeholder="https://source.unsplash.com/random"
                          id="img"
                          autoComplete="imgUrl"
                          className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-600 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-green-800 text-right sm:px-6">
                    {/* <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transpar6nt sha6ow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <UI
          firstName={firstName}
          lastName={lastName}
          email={eMail}
          work={work}
          location={location}
          imgUrl = {imgUrl  }
        />
       
      </div>
    );
  }
}
