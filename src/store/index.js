import { configureStore } from '@reduxjs/toolkit'
import loadingSlice from './slices/loading.slice'
import userNameSlice from './slices/userName.slice'

export default configureStore({
  reducer: {
        userName: userNameSlice,
        loading: loadingSlice,
	}
})