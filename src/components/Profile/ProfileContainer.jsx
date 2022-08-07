import React from 'react'
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/reducers/profileReducer";
import Profile from "./Profile";
import withRouter from "../../withRouter/withRouter";

class ProfileContainer extends React.Component {
  componentDidMount() {
    if(this.props.params['*']) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.params['*']}`)
        .then((response) => {
            console.log(response.data)
            this.props.setUserProfile(response.data)
          }
        )
    }
  }

  render() {
    return <Profile profile={this.props.profile}/>
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})
const mapDispatchToProps = {setUserProfile}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer))
