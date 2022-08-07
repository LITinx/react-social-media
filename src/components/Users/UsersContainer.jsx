import {connect} from 'react-redux'
import {
  setCurrentPage, setTotalCount, setUsers, follow, toggleIsFetching,
} from '../../redux/reducers/usersReducer'
import Users from './Users'
import React from "react";
import axios from "axios";



class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.toggleIsFetching(true)
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.toggleIsFetching(false)
          this.props.setUsers(response.data.items)
          this.props.setTotalCount(response.data.totalCount)
        })
    }
  }

  getUsers = (currentPage, pageSize) => {
    this.props.toggleIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (<Users {...this.props} getUsers={this.getUsers}/>)
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalCount: state.usersPage.totalCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching
})

const mapDispatchToProps = {
  follow, setUsers, setTotalCount, setCurrentPage, toggleIsFetching
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
