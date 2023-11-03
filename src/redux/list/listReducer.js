
import {NAME} from "./listType"
 const initiaState=[];
export const Reducer=(state=initiaState,action)=>{
    switch(action.type){
		case NAME:
			return [
				...state,action.payload
			]

	default: return state;

}
}