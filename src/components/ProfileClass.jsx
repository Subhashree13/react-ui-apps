import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    console.log("constructor called")
    super(props);
    this.state = {
      userData: {
        login: "",
      },
    };
  }
  async componentDidMount() {
    console.log("componentdid mount called");
    const res = await fetch("https://api.github.com/users/Subhashree13");
    const data = await res.json();
    this.setState({
      userData: {
        avatar_url: data.avatar_url,
        login: data.login,
      },
    });
  }
  render() {
    console.log("render called");
    const {avatar_url, login} = this.state.userData;
    return <div>
This is {login}
<img src={avatar_url}/>
    </div>;
  }
}
export default ProfileClass;
