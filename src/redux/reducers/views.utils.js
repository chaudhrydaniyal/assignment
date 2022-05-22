export const incrementViews = (state, action) => {

    const index = state.findIndex(obj => obj.id === action.payload) + 1;
    const newArray = [...state];  //making a new array
    newArray[index].views = newArray[index].views + 1//changing value in the new array
    return newArray

}