import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Item from "antd/es/list/Item";

type StateProps = {
    data: string[],
    key: React.Key,
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
            state.data = state.data.filter((item) => item.key !== itemKey)
            localStorage.setItem('Data', JSON.stringify(state.data))
        }
        }
    },)

export const { adddata, savedata, deletedata } = appSlice.actions
export default appSlice.reducer
export const appSelector = (state:RootState) => state.appReducer