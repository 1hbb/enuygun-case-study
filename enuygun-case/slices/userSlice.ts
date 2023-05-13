import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Employee } from "../types/Employe";


const initialState = {
    entities: [] as Employee[],
};

const userSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        setEntities: (state, action) => {
            state.entities = action.payload;
        },
        incrementVote: (state, action: PayloadAction<{ data: string }>) => {
            const id = action.payload.data;

            const updatedEntities = state.entities.map((employee) => {
                if (employee.id == id) {

                    return {
                        ...employee,
                        upvote: employee.upvote + 1,
                    };
                }
                return employee;
            });

            state.entities = updatedEntities.sort((a, b) => b.upvote - a.upvote);

        },
    }
});

export const { setEntities, incrementVote } = userSlice.actions;

export default userSlice.reducer;