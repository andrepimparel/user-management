import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface User {
    id: number,
    first_name: string;
    last_name: string;
    avatar: string;
    email: string;
}

interface UsersState  {
    data: User[] ;
    page: number;
    pages: number[];
    isLoading: boolean;
    totalPages: number;
}


const initialState: UsersState  = {
    data: [],
    page: 1,
    pages: [],
    isLoading: false,
    totalPages: 0,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<userResponse>) => {
            state.page = action.payload.page;
            if(!state.pages?.includes(action.payload.page)){
                state.pages?.push(action.payload.page);
                action.payload.users.forEach((user: User) => {
                    state.data?.push(user)
                })
            }
            state.isLoading = false;
        })
        .addCase(getTotalPages.fulfilled, (state, action: PayloadAction<number>) => {
            state.totalPages = action.payload;
        })
        .addCase(deleteUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteUser.fulfilled, (state, action: PayloadAction<any>) => {
            console.log("here")
            const filteredArray = state.data.filter((obj) => obj.id !== 2);
            state.data = filteredArray;
            state.isLoading = false;
        })
 
    },
})

interface userResponse {
    users: User[],
    page: number
}

export const fetchUsers = createAsyncThunk(
    "users/addUsers",
    async (page: number): Promise<userResponse> => {
        const res = await fetch(`https://reqres.in/api/users?page=${page}`);
   
        const data  = await res.json();
        const users: User[] = data.data

        return {users, page};
    }
  )

export const getTotalPages = createAsyncThunk(
    "users/getTotalPages",
    async (): Promise<number> => {
        const res = await fetch(`https://reqres.in/api/users?page=1`);

        const data  = await res.json();
        const totalPages: number = data.total_pages
        return totalPages;
    }
)

export const deleteUser = createAsyncThunk(
    "users/deleteUser",
    async (id: number) => {
        await fetch(`https://reqres.in/api/users/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json', 
            },
          })
    }
)
  


export default usersSlice.reducer;


