import { createSlice } from "@reduxjs/toolkit"
import { items } from "../components/Data"

const dataReducer = createSlice({
    name: "data",
    initialState: [...items],
    reducers: {
        filter: (state, action) => {
            state.filter(e=>e.include(action.payload))
        }
    }
}
)

export const { filter } = dataReducer.actions
export default dataReducer.reducer