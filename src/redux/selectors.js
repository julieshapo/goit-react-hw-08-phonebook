import { createSelector } from '@reduxjs/toolkit';

// AUTH SELECTORS

export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

// CONTACTS & FILTER SELECTORS

export const selectContacts = state => state.contacts.contacts;

export const selectFilter = state => state.filter;

export const selectStatusPending = state => state.contacts.status === 'pending';

export const selectError = state => state.contacts.error;

export const selectContactsToShow = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);
