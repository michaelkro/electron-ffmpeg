import { ipcRenderer } from 'electron';

import { FILE_PROGRESS, FILE_COMPLETE } from './ConvertFilesPageConstants';

export {
  addFilesAction,
  removeFileAction,
  clearFilesAction
} from '../FileSelectPage/FileSelectPageActions';

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
