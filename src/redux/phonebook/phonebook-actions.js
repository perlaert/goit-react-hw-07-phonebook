import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contact/addContactRequest');
export const fetchContactSuccess = createAction('contact/addContactSuccess');
export const fetchContactError = createAction('contacts/addContactError');

export const addContactRequest = createAction('contact/addContactRequest');
export const addContactSuccess = createAction('contact/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contact/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contact/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteontactError');

export const changeFilter = createAction('contact/changeFilter');
