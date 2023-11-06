import { createSlice } from "@reduxjs/toolkit";

interface User {
    name: string;
    email: string;
}

interface UsersState  {
    data: User[] | undefined;
    page: number;
}


const initialState: UsersState  = {
    data: undefined,
    page: 1,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
})


export default usersSlice.reducer;


