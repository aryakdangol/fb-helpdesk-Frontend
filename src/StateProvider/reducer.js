export const initialState = {
  profileId: null,
  first_name: null,
  last_name: null,
  profile_pic: null,
};

export const actionType = {
  SET_PROFILE: "SET_PROFILE",
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
      };

    default:
      return state;
  }
};
