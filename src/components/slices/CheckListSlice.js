import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,

  EquipmentForm:{},
  InspectionForm:[],
  JobDoneForm:[],
  CustomerInfo:{},
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    EquipmentFormFunction: (state,action) => {
      state.EquipmentForm = action.payload
    },
    InspectionFormFunction: (state ,action) => {
      state.InspectionForm = action.payload
    },
    JobDoneFormFunction: (state, action) => {
      state.JobDoneForm = action.payload
    },
    CustomerInfoFuntion: (state, action) => {
      state.CustomerInfo = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { EquipmentFormFunction , InspectionFormFunction,JobDoneFormFunction ,CustomerInfoFuntion} = counterSlice.actions

export default counterSlice.reducer