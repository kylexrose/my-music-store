
const sortCartItems = (shoppingCartArray) => {
    const sorted =  shoppingCartArray.sort(function(x, y){
      console.log({x, y});
      console.log({xTimestamp: x.timestamp});
  
      console.log('number: ', y.timestamp - x.timestamp)
  
      return y.timestamp - x.timestamp;
    })
  
    console.log({shoppingCartArray, sorted })
  
    return sorted;
  }
  
  const getShoppingCartTotal = (shoppingCart) => {
    const total = shoppingCart.reduce(
      (accumulator, item, index, array) => {
        return accumulator + (item.price * item.quantity)
      }, 0);
  
    return total;
  }
  
  const addToCartActionCreator = ({
    id,
    title,
    price,
    image,
  }) => {
    console.log('product id: ', id)
    return {
      type: ADD_TO_CART_ACTION,
      payload: {
        id,
        title,
        price,
        image,
      }
  }};
  
  const removeToCartActionCreator = (itemId) => {
    return ({
      type: REMOVE_FROM_CART_ACTION,
      payload: {
        id: itemId
      }
    })
  }

const shoppingCartReducer = (oldState, action) => {

    if(action.type === EMPTY_CART_ACTION){
      return [];
    }
    
    if(action.type === ADD_TO_CART_ACTION){
      const { payload: { id, title, price, image } }= action;
  
      const itemFound = oldState.find(item => item.id === action.payload.id);
  
  
      if(itemFound){
        return sortCartItems([
          ...oldState.filter(item => item.id !== action.payload.id),
          {
            ...itemFound,
            quantity: itemFound.quantity + 1,
          }
        ]);
      }
      
      return sortCartItems([
        ...oldState,
        {
          id,
          title,
          price,
          image,
          quantity: 1,
          timestamp: Date.now(),
        }
      ])
    }
  
    if(action.type === REMOVE_FROM_CART_ACTION){
  
      const itemFound = oldState.find(item => item.id === action.payload.id);
  
      if(itemFound){
        if(itemFound.quantity === 1){
         return  sortCartItems(oldState.filter(item => item.id !== action.payload.id))
        }
  
        return sortCartItems([
          ...oldState.filter(item => item.id !== action.payload.id),
          {
            ...itemFound,
            quantity: itemFound.quantity - 1,
          }
        ]);
      }
    }
  };

export default shoppingCartReducer;