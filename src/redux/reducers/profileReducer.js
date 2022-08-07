const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_VALUE = 'UPDATE_NEW_POST_VALUE'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const initialState = {
  newPostValue: '',
  profile: {
    aboutMe: "Krutoy Volk",
    contacts: {
      facebook: "facebook.com",
      website: null,
      vk: "vk.com/",
      twitter: "https://twitter.com/@sdf",
      instagram: "instagram.com/",
      youtube: null,
      github: "github.com/litinx",
      mainLink: null
    },
    lookingForAJob: true,
    lookingForAJobDescription: "Junior Frontend Dev",
    fullName: "Nurik",
    userId: 0,
    photos: {
      small: "https://i.pinimg.com/564x/0f/93/79/0f93798d7dbd239809f07f7b00e9891e.jpg",
      large: "https://wallpapercave.com/wp/wp2587538.jpg"
    }
  },
  posts: [
    {
      id: 2,
      message: 'Oh, are you serious! 10000 likes😍',
      likesCount: 10134,
    },
    {id: 1, message: 'Nurel!', likesCount: 15},
    {id: 0, message: 'First Post!', likesCount: 20},
  ],
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      if (!state.newPostValue) return
      return {
        ...state,
        newPostValue: '',
        posts: [
          {
            id: Math.max(0, Math.max(...state.posts.map(({id}) => id))) + 1,
            message: state.newPostValue,
            likesCount: 0,
          },
          ...state.posts,
        ],
      }
    case UPDATE_NEW_POST_VALUE:
      return {...state, newPostValue: action.newValue}
    case SET_USER_PROFILE:
      return {...state, profile: action.profile}
    default:
      return state
  }
}
export const addPostActionCreator = () => ({
  type: ADD_POST,
})
export const updateNewPostValueActionCreator = (newValue) => ({
  type: UPDATE_NEW_POST_VALUE,
  newValue,
})
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
})
export default profileReducer
