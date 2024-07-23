import React, { useReducer, createContext, useContext } from "react";

const CheckboxContext = createContext();

const initialState = {
  allPages: false,
  pages: [
    { pageName: "Page 1", pageStatus: false, pageId: 1 },
    { pageName: "Page 2", pageStatus: false, pageId: 2 },
    { pageName: "Page 3", pageStatus: false, pageId: 3 },
    { pageName: "Page 4", pageStatus: false, pageId: 4 },
  ],
};

function checkboxReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_PAGE":
      const newPages = state.pages.map((page) =>
        page.pageId === action.payload
          ? { ...page, pageStatus: !page.pageStatus }
          : page
      );
      return {
        ...state,
        pages: newPages,
        allPages: newPages.every((page) => page.pageStatus),
      };
    case "TOGGLE_ALL_PAGES":
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

export function CheckboxProvider({ children }) {
  const [state, dispatch] = useReducer(checkboxReducer, initialState);

  return (
    <CheckboxContext.Provider value={{ state, dispatch }}>
      {children}
    </CheckboxContext.Provider>
  );
}

export function useCheckboxContext() {
  return useContext(CheckboxContext);
}
