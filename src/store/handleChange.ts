import { createSlice } from "@reduxjs/toolkit"

const handleChange = createSlice({
    name: "change",
    initialState: {
        delete: false,
        value: false,
        text: "",
        newText: "",
        personName: ""
    },
    reducers: {
        updateFunction(state, action) {
            state.value = action.payload
        },
        textUpdate(state, action) {
            state.text = action.payload
        },
        newTextFunction(state, action) {
            state.newText = action.payload
        },
        updatePersonName(state, action) {
            state.personName = action.payload
        },
        deleteFunc(state, action) {
            state.delete = action.payload
        }
    }
})

export const {updateFunction, textUpdate, newTextFunction, updatePersonName, deleteFunc} = handleChange.actions;
export default handleChange.reducer;