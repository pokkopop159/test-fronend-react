import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type StateProps = {
    data: string[],
}

const initialValue: StateProps = {
    data: [] 
}

const appSlice = createSlice({
    name: "Data",
    initialState: initialValue,
    reducers: {
        adddata: (state, action) => {
                state.data.push(action.payload)
                localStorage.setItem('Data', JSON.stringify(state.data))
        },
        savedata: (state, action) => {
            state.data = action.payload
        },
        deletedata: (state, action) => {
            const itemKey = action.payload
            console.log("key", itemKey)
            console.log("type ===> ", typeof (itemKey))
            state.data = state.data.filter((item: any) => {
                if (typeof (itemKey) != 'object') {
                    return item.key !== itemKey
                } else {
                    if (!itemKey.includes(item.key)) {
                        return item
                    }
                }
            })
            localStorage.setItem('Data', JSON.stringify(state.data))
        },
        editdata: (state, action) => {

        },
    
        }
    },)

export const { adddata, savedata, deletedata, editdata} = appSlice.actions
export default appSlice.reducer
export const appSelector = (state:RootState) => state.appReducer