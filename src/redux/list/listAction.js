import {NAME} from "./listType"

export const action =(name)=>{
		return{
			type:NAME,
			payload:name
		};

}