import React from 'react';
import { NavLink } from 'react-router-dom';

const useActiveLink = ({to, children}) => {
  return (
    <NavLink to={to} className={({ isActive }) =>
      isActive ? "text-blue-600 font-semibold" : ""}>
      {children}
    </NavLink>
  );
};

export default useActiveLink;