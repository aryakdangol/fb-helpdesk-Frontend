export const initialState = {
  profileId: null,
  first_name: null,
  last_name: null,
  profile_pic: null,
  login: false,
  postId: null,
  commentId: null,
};

export const actionType = {
  SET_PROFILE: "SET_PROFILE",
  SET_USER: "SET_USER",
  SET_POST: "SET_POST",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_PROFILE:
      return {
        ...state,
        profileId: action.profileId,
        first_name: action.first_name,
        last_name: action.last_name,
        profile_pic: action.profile_pic,
        postId: null,
        commentId: null,
      };
    case actionType.SET_USER:
      return {
        ...state,
        login: action.login,
      };

    case actionType.SET_POST:
      return {
        ...state,
        profileId: null,
        postId: action.postId,
        commentId: action.commentId,
        first_name: action.first_name,
        last_name: action.last_name,
        profile_pic: null,
      };

    default:
      return state;
  }
};
