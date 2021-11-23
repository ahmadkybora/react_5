import { ADD, REMOVE , UPDATE } from './cart.types';


    const INITIAL_STATE = {
       

        cart: localStorage.getItem('cart')===null ? [] : JSON.parse(localStorage.getItem('cart')) ,
    };

    const reducer = (state = INITIAL_STATE, action) => {
    
        switch (action.type) {
          
            case ADD:
              let exist_already=false;
               state.cart.map(res=>{
                  if(res['id'] == action.payload.id){
                     res['qty']=res['qty']+action.payload.qty
                     exist_already=true
                  } 
               })
               if(!exist_already){
                state.cart.push({id:action.payload.id,qty:action.payload.qty,price:action.payload.price,name:action.payload.name,image:action.payload.image})
               } 
               localStorage.setItem('cart',JSON.stringify(state.cart))
               return {

                 ...state, cart: state.cart,

               };

            case REMOVE:
              // console.log(state.cart.indexOf(action.payload))
               state.cart.splice(state.cart.indexOf(action.payload),1)
               localStorage.setItem('cart',JSON.stringify(state.cart))
               return {
                  ...state, cart: state.cart,

               };
            case UPDATE:
               console.log(action.payload)
               state.cart.map(el=>{
                  
                   if(el['id']==action.payload.id){
                        el['qty']=parseInt(action.payload.qty,10)
                   }
               })
              
               localStorage.setItem('cart',JSON.stringify(state.cart))
               return {
                  ...state, cart: state.cart,

               };

             default: return state;

        }

    };

    export default reducer;