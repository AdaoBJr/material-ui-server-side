import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

import { AppState } from 'pdv/frontend/types/shared';
import { initialState, DOC as initial_doc } from './initial';

export const useAppState = create<AppState>()((set) => ({
  ...initialState,
  setDocInfoInState: (docInfo) =>
    set((state) => {
      if (!docInfo) return { ...state, ...initial_doc };
      return { ...state, ...docInfo };
    }),
}));
mountStoreDevtool('appState', useAppState);
