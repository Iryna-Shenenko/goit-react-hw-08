import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from '../filters/selectors';




export const selectIsLoading = state =>state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectContact = state => state.contacts.items;


export const selectFilteredContacts = createSelector(
  [selectContact, selectNameFilter],
   (contacts, filterValue) => {
    return contacts.filter((item) => {
      const name = item.name.toLowerCase().includes(filterValue.toLowerCase());
      const number = item.number.includes(filterValue);


      return name || number;
    });
    }
  );
  
   