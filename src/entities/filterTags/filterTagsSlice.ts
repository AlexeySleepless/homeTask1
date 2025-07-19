import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFilterTag } from "./types";
import type { tagType } from "../tag";

interface IFilterTagsStates {
    filterTags: IFilterTag[];
}

const initialState: IFilterTagsStates = {
    filterTags: []
}

export const filterTagsSlice = createSlice({
    name: "filterTags",
    initialState,
    reducers: {
      addFilterTag(state, action: PayloadAction<IFilterTag>){
        const newTag = action.payload;
        const filterTags = state.filterTags;
        const exist = filterTags.find(filterTag=>filterTag.tag===newTag.tag);
        if(exist){
          return;
        }
        filterTags.push(newTag);
      },
      removeFilterTagByTagName(state, action: PayloadAction<tagType>){
        const deleteTag = action.payload;
        const newFilterTags = state.filterTags.filter(filterTag => deleteTag !== filterTag.tag)
        state.filterTags = newFilterTags;
      },
      removeAllFilterTags(state){
        state.filterTags = [];
      },

    }
})

export const filterTagsReducer =  filterTagsSlice.reducer;