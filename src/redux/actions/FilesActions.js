import { ipcRenderer } from 'electron';

import {
  ADD_FILES,
  CLEAR_FILES,
  FILE_PROGRESS,
  FILE_COMPLETE,
  REMOVE_FILE
} from '../constants/FilesConstants';

export const addFilesAction = files => dispatch => {
  ipcRenderer.send('files:added', files);
  ipcRenderer.on('metadata:complete', (event, filesWithMetadata) => {
    dispatch({ type: ADD_FILES, payload: { filesWithMetadata } });
  });
};

export const clearFilesAction = () => ({
  type: CLEAR_FILES
});

export const convertFilesAction = files => dispatch => {
  const filesToConvert = files.filter(file => !file.complete);

  ipcRenderer.send('conversion:start', filesToConvert);

  ipcRenderer.on('conversion:progress', (event, { file, timemark }) => {
    dispatch({
      type: FILE_PROGRESS,
      payload: { file, timemark }
    });
  });

  ipcRenderer.on('conversion:end', (event, { file, outputPath }) => {
    dispatch({
      type: FILE_COMPLETE,
      payload: { file, outputPath }
    });
  });
};

export const removeFileAction = file => ({
  type: REMOVE_FILE,
  payload: { file }
});
