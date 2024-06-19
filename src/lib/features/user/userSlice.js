import { createAppSlice } from "@/lib/createAppSlice";
import counterSlice from "../counter/counterSlice";

const initialState = {
    value: [],
    status: "idle"
}

const loadState = () =>{
    if (typeof window !== undefined){
        try{
            const serializedUser = localStorage.getItem("activeUser")
            if (serializedUser === null) {
                return initialState
            }
            return JSON.parse(serializedUser)
        } catch (err){
            return initialState
        }
    }
}

export const userSlice = createAppSlice({
    name: "user",
    initialState: loadState(),
    reducers: (create) => ({
        login: create.reducer((state, action) => {
            state.value = action.payload;
            localStorage.setItem("activeUser", JSON.stringify(action.payload))
        }),
        logout: create.reducer((state) => {
            state.value = []
            localStorage.clear()
        })
    }),

    selectors: {
        selectUser: (user) => user.value,
        selectStatus: (user) => user.status
    }
})

export const { login, logout } = userSlice.actions;
export const { selectUser, selectStatus } = userSlice.selectors;
export default userSlice.reducer;