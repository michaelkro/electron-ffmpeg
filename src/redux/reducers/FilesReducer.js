import {
  ADD_FILES,
  FILE_COMPLETE,
  FILE_PROGRESS,
  CLEAR_FILES,
  REMOVE_FILE
} from '../constants/FilesConstants';

const initialState = {
  files: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILES: {
      const filesMap = {};
      state.files.forEach(file => (filesMap[file.name] = file));
      action.payload.filesWithMetadata.forEach(
        file => (filesMap[file.name] = file)
      );

      return {
        ...state,
        files: [...Object.values(filesMap)]
      };
    }

    case CLEAR_FILES:
      return initialState;

    case FILE_COMPLETE: {
      const files = state.files.map(file => {
        if (file.name === action.payload.file.name) {
          return { ...file, complete: true };
        } else {
          return file;
        }
      });

      return { ...state, files };
    }

    case FILE_PROGRESS: {
      const files = state.files.map(file => {
        if (file.name === action.payload.file.name) {
          return { ...file, timemark: action.payload.timemark };
        } else {
          return file;
        }
      });

      return { ...state, files };
    }

    case REMOVE_FILE: {
      const files = state.files.filter(
        file => file.name !== action.payload.file.name
      );

      return { ...state, files };
    }

    default:
      return state;
  }
};
