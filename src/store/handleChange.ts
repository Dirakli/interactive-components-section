import { createSlice } from "@reduxjs/toolkit"

const handleChange = createSlice({
    name: "change",
    initialState: {
        delete: false,
        value: false,
        text: "",
        newText: "",
        personName: "",
        submitted: false
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
        },
        SubmitedFunc(state, action) {
            state.submitted = action.payload
        }
    }
})

export const {updateFunction, textUpdate, newTextFunction, updatePersonName, deleteFunc, SubmitedFunc} = handleChange.actions;
export default handleChange.reducer;