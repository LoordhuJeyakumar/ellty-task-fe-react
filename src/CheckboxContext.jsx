import React, { useReducer, createContext, useContext } from "react";

// Create a context for the checkbox state
const CheckboxContext = createContext();

// Initial state for the checkboxes
const initialState = {
  allPages: false,
  pages: [
    { pageName: "Page 1", pageStatus: false, pageId: 1 },
    { pageName: "Page 2", pageStatus: false, pageId: 2 },
    { pageName: "Page 3", pageStatus: false, pageId: 3 },
    { pageName: "Page 4", pageStatus: false, pageId: 4 },
  ],
};

// Reducer function to handle state updates
function checkboxReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_PAGE":
      // Toggle individual page status
      const newPages = state.pages.map((page) =>
        page.pageId === action.payload
          ? { ...page, pageStatus: !page.pageStatus }
          : page
      );
      return {
        ...state,
        pages: newPages,
        // Update allPages status based on all individual pages
        allPages: newPages.every((page) => page.pageStatus),
      };
    case "TOGGLE_ALL_PAGES":
      // Toggle all pages status
      const newAllPagesStatus = !state.allPages;
      return {
        allPages: newAllPagesStatus,
        pages: state.pages.map((page) => ({
          ...page,
          pageStatus: newAllPagesStatus,
        })),
      };
    default:
      return state;
  }
}

// Provider component to wrap the app and provide the checkbox context
export function CheckboxProvider({ children }) {
  const [state, dispatch] = useReducer(checkboxReducer, initialState);

  return (
    <CheckboxContext.Provider value={{ state, dispatch }}>
      {children}
    </CheckboxContext.Provider>
  );
}

// Custom hook to use the checkbox context
export function useCheckboxContext() {
  return useContext(CheckboxContext);
}
