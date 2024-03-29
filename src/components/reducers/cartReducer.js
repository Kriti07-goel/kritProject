import Item1 from '../../images/item1.png'
import Item2 from '../../images/item2.png'
import Item3 from '../../images/item3.png'
import Item4 from '../../images/item4.png'
import Item5 from '../../images/item5.png'
import Item6 from '../../images/item6.png'
import { ADD_TO_CART} from '../actions/cartActions'


const initState = {
    items: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
    if(action.type === "ADD_TO_CART"){
        let addedItem = state.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total: state.total + addedItem.price 
                }
       }
       else{
          addedItem.quantity = 1;
          //calculating the total
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }
  }
  else if(action.type === "REMOVE_QUANTITY"){
    let itemToRemove = state.addedItems.find(item => item.id === action.id);
    let newList = state.addedItems.filter(item.id!== action.id);

    let newTotal = state.total-(itemToRemove.price * itemToRemove.quantity);
    return{
        ...state,
        addedItems: newList,
        total: newTotal
    }
  }
  else if(action.type === "ADD_QUANTITY"){
    let itemToAdd = state.items.find(item => item.id === action.id);
    itemToAdd.quantity +=1;
    let newTotal = state.total+itemToAdd.price;
    return{
        ...state,
        
        total: newTotal
    }


  }
  else if(action.type === "SUUBTRACT_QUANTITY"){
    let addedItem  = state.items.find(item => item.id === action.id);
    if(addedItem.quantity === 1){
        let new_items = state.addedItems.filter(item=>item.id !== action.id)
        let newTotal = state.total - addedItem.price
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    else {
        addedItem.quantity -= 1
        let newTotal = state.total - addedItem.price
        return{
            ...state,
            total: newTotal
        }
    }
  }
  else{
    return state;
  }
    

}
export default cartReducer;