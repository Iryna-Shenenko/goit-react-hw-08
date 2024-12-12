import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from '../filters/selectors';



export const selectIsLoading = state =>state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectContact = state => state.contacts.items;


export const selectFilteredContacts = createSelector(
  [selectContact, selectNameFilter],
   (contacts, nameFilter) => {
    if (!Array.isArray(contacts)) {
      return [];}
     return contacts.filter((item) =>
     item.name.toLowerCase() .includes(nameFilter.toLowerCase()));
   }
  );
   