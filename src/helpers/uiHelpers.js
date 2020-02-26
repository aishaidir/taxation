import React from 'react';
import { updateBreadcrumb } from '../actions/breadcrumbAction';
import { DashboardIcon } from '../mui';

export const handleBreadcrumbUpdate = (breadcrumbData) => {
	console.log('handling breadcrumb data');
	return (dispatch) => dispatch(updateBreadcrumb(breadcrumbData));
};

export const updateKey = keys => {
  if(typeof keys !== 'string') return ''
  const key = keys.toLowerCase();
  const update = key.replace(' ', '-')
  return update;
};

const capitalize = (s) => {
	if (typeof s !== 'string') return '';
	return s.charAt(0).toUpperCase() + s.slice(1);
};

/**
 * name in file: `Handle Side Navigation Items`..
 * @param {Object}
 * take data object from server and
 * @return {Object}
 *  sidebar format object
 * with their corresponding navigation links
 */
const iconLogo = require('../image/stetis.png');

export const handleSidebarNavItems = (sidebarObj) => {
	const { access } = sidebarObj;
	const sideNavItems = [];
	if (access) {
		for (let i = 0; i < access.length; i++) {
			const child = access[i].pages.map((page) => ({
				name: capitalize(page),
				link: `/${updateKey(page)}`,
				icon: <img height='20px' width='20px' src={iconLogo} />
			}));
			if (access[i].pages.length) {
				sideNavItems.push({
					name: access[i].module,
					icon: <DashboardIcon />,
					children: [ ...child ]
				});
			} else {
				sideNavItems.push({
					name: access[i].module,
					icon: <DashboardIcon />,
					link: `/${updateKey(access[i].module)}`
				});
			}
		}
	}
	return sideNavItems;
};

export const resizeName = (initialName) => {
	const length = 10;
	const append = '..';
	let newName = initialName;
	if (typeof newName === 'string') {
		if (newName.length > length) {
			return (newName = initialName.substring(0, length - append.length) + append);
		}
		return newName;
	}
	if (Object.keys(newName).length > length) {
		return (newName = initialName.substring(0, length - append.length) + append);
	}
	return newName;
};