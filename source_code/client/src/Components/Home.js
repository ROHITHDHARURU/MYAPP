import { Component } from "react";
import profilePic from "../Images/Profile-image.jpg";

let defaultName = "Steve Jobs";
let defaultDescription =
  "Steven Paul Jobs (February 24, 1955 - October 5, 2011) was an American entrepreneur, industrial designer, business magnate, media proprietor, and investor. He was the co-founder, chairman, and CEO of Apple; the chairman and majority shareholder of Pixar; a member of The Walt Disney Company's board of directors following its acquisition of Pixar; and the founder, chairman, and CEO of NeXT. He is widely recognized as a pioneer of the personal computer revolution of the 1970s and 1980s, along with his early business partner and fellow Apple co-founder Steve Wozniak.";

class Home extends Component {
  state = { userName: defaultName, userDescription: defaultDescription };

  onChangeName = (event) => {
    this.setState({ userName: event.target.value });
  };

  onChangeDescription = (event) => {
    this.setState({ userDescription: event.target.value });
  };

  render() {
    const { userName, userDescription } = this.state;
    return (
      <div class="container ">
        <div class="row">
          <div class="col-3">
            <img class="w-100" src={profilePic} alt="profileImage" />
          </div>
          <div class="col-6 d-flex flex-column justify-content-center">
            <h1 class="main-heading">{userName}</h1>
            <p class="description d-inline-flex">{userDescription}</p>
          </div>
          <div class="col-6 d-flex flex-column justify-content-center">
            <div className="m-1">
              <label class="m-3" htmlFor="myUserName">
                Edit User Name
              </label>
              <input id="myUserName" onChange={this.onChangeName} type="text" />
            </div>
            <div class="m-1">
              <label class="m-3" htmlFor="myDescription">
                Edit Description
              </label>
              <input
                id="myDescription"
                onChange={this.onChangeDescription}
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
