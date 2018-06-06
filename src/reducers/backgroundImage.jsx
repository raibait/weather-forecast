import { SET_BACKGROUNDIMAGE } from "../constants/ActionTypes";

const initialState = {
  imageUrl:
    "https://cdn.pixabay.com/photo/2016/01/19/18/00/city-1150026_960_720.jpg"
};

const backgroundImage = (state = initialState, action) => {
  switch (action.type) {
    case SET_BACKGROUNDIMAGE:
      return {
        ...state,
        imageUrl: action.imageUrl
      };
    default:
      return { ...state };
  }
};
export default backgroundImage;
