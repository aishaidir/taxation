import { ACTIONS } from '../Constants/ACTIONS';

const { UPDATE_BREADCRUMB } = ACTIONS;

export const updateBreadcrumb = (breadcrumbData) => ({
  type: UPDATE_BREADCRUMB,
  payload: breadcrumbData,
});
