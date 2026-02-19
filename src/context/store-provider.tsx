'use client';

import { ActionDispatch, createContext, ReactNode, useContext, useReducer } from 'react';

type State = {
  isHalfWayScrollPosition: boolean;
};

const initialState: State = {
  isHalfWayScrollPosition: false,
};

export enum ActionType {
  HalfWayScrollState = 'updateHalfWayScrollState',
}

interface HalfWayScrollAction {
  type: ActionType.HalfWayScrollState;
  payload: boolean;
}

type Action = HalfWayScrollAction;

interface StoreContextType {
  state: State;
  dispatch: ActionDispatch<[Action]>;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

function storeReducer(state: State, action: Action): State {
  const { type, payload } = action;
  switch (type) {
    case ActionType.HalfWayScrollState:
      return { ...state, isHalfWayScrollPosition: payload };
    default:
      return state;
  }
}

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

export const useStore = (): StoreContextType => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

export const getIsHalfwayScrollPosition = (state: State) => state.isHalfWayScrollPosition;
