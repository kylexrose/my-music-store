
const LOG_IN_ACTION = "mymusicstore.com/LOG_IN";

const UPDATE_USER_FAVORITES = "mymusicstore.com/UPDATE_USER_FAVORITES";

export const logInActionCreator = (user) => ({type: LOG_IN_ACTION, payload: {user}});

export const updateUserFavoritesActionCreator = (favoriteItems) => {
  return {
    type: UPDATE_USER_FAVORITES,
    payload: { favoriteItems }
  }
};


const userReducer = (state, action) => {
    if(action.type === LOG_IN_ACTION){
      const { payload } = action;
  
      return {...state, user: payload.user}
    }
  
    if(action.type === UPDATE_USER_FAVORITES){
  
      return {...state, user: {...state.user, favoriteItems: action.payload.favoriteItems }}
    }
  
    return state;
  };

export default userReducer;