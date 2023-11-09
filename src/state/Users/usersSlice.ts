import { AnyAction, AsyncThunkAction, Dispatch, PayloadAction, configureStore, createAsyncThunk, createSlice, createStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";


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
    isAddUser: boolean;
}


const initialState: UsersState  = {
    data: [],
    page: 1,
    pages: [],
    isLoading: false,
    totalPages: 0,
    isAddUser: false,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
       showAddUser: (state) => {
        state.isAddUser = true;
       },
       hideAddUser: (state) => {
        state.isAddUser = false;
       }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<userResponse>) => {
            if(action.payload.chagePage){
                state.page = action.payload.page;
            }
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
        .addCase(deleteUser.fulfilled, (state, action: PayloadAction<number>) => {
            const filteredArray = state.data.filter((obj) => obj.id !== action.payload);
            console.log(filteredArray)
            state.data = filteredArray;
            state.isLoading = false;
        })
 
    },
})

interface userResponse {
    users: User[],
    page: number,
    chagePage: boolean
}

interface userParam {
    page: number,
    chagePage: boolean
}

export const fetchUsers = createAsyncThunk(
    "users/addUsers",
    async ( param: userParam): Promise<userResponse> => {
        const res = await fetch(`https://reqres.in/api/users?page=${param.page}`);
   
        const data  = await res.json();
        const users: User[] = data.data;
        const page = param.page;
        const chagePage = param.chagePage;
 

        return {users, page, chagePage};
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
        const resId: number = id;
        return resId;
    }
)
  

export const { showAddUser, hideAddUser } = usersSlice.actions;

export default usersSlice.reducer;




