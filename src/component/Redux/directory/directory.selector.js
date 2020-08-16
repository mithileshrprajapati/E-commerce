import { createSelector } from "reselect";

const selector = (state) => state.directory;

export const selectDirectorySections = createSelector(
	[selector],
	(directory) => directory.sections
);
