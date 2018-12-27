import { ipcRenderer } from 'electron';

import { ADD_FILES, CLEAR_FILES, REMOVE_FILE } from './FileSelectPageConstants';

export const addFilesAction = files => dispatch => {
  ipcRenderer.send('files:added', files);
  ipcRenderer.on('metadata:complete', (event, filesWithMetadata) => {
    dispatch({ type: ADD_FILES, payload: { filesWithMetadata } });
  });
};

export const clearFilesAction = () => ({
  type: CLEAR_FILES
});

export const removeFileAction = file => ({
  type: REMOVE_FILE,
  payload: { file }
});
