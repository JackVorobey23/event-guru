import { RootState } from '@redux/store';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Event } from '@components/Event/types';

export interface EventsState {
  events: Event[];
}

const initialState: EventsState = {
  events: [],
};

export const eventsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEvents: (state, { payload }: PayloadAction<Event[] | null>) => {
      if (payload) {
        console.log('change');

        state.events = payload;
        return state;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEvents } = eventsSlice.actions;
export const selectEvents = (state: RootState) => state.events;
export default eventsSlice.reducer;
