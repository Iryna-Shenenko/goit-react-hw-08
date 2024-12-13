import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, editContact } from "./operations";
import { logOut } from "../auth/operations";



const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};




const contactSlice = createSlice ({
  name: "contacts", 
  initialState: {
    items: [],
    loading: false,
    error: null
  },

    extraReducers: (builder) => {
builder
.addCase(fetchContacts.pending, handlePending)

.addCase(fetchContacts.fulfilled, (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
  })
  .addCase(addContact.rejected, handleRejected)
  .addCase(addContact.pending, handlePending)
  .addCase(addContact.fulfilled, (state, action) => {
    state.loading = false;
    state.error = null;
    state.items.push(action.payload);
  })
  .addCase(editContact.pending, handlePending)
  .addCase(editContact.fulfilled, (state,action) => {
    state.isLoading = false;
    state.error = null;
    const index = state.items.findIndex((contact) => contact.id === action.payload.id
    );
    if (index !== -1){
      state.items[index] = action.payload;
    }
  })
  .addCase(editContact.rejected, handleRejected)
  .addCase(deleteContact.rejected, handleRejected)
  .addCase(deleteContact.pending, handlePending)
  .addCase(deleteContact.fulfilled, (state,action) => {
    state.isLoading = false; 
    state.error = null;
    const index = state.items.findIndex((contact) => contact.id === action.payload.id);
    state.items.splice(index, 1);
  })
  .addCase(fetchContacts.rejected, handleRejected)
  .addCase(logOut.fulfilled, (state) => {
    state.items =[];
    state.error = null;
    state.isLoading = false;
  });
},
});
// export const selectContact = (state) => state.contacts.items;

// export const selectFilteredContacts = createSelector(
//     [selectContact, selectNameFilter],
//      (contacts, nameFilter) => {
//       if (!Array.isArray(contacts)) {
//         return [];}
//        return contacts.filter((item) =>
//        item.name.toLowerCase() .includes(nameFilter.toLowerCase()));
//      }
    

export default contactSlice.reducer;