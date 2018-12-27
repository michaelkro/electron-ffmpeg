export const filesInProgress = files =>
  files.filter(file => file.timemark && !file.complete);

export const allFilesConverted = files => files.every(file => file.complete);
