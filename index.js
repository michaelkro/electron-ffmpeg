require('dotenv').config();
const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

const { app, BrowserWindow, ipcMain } = electron;
let mainWindow;

app.on('ready', () => {
  const isDev = process.env.NODE_ENV;

  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      backgroundThrottling: false
    }
  });

  mainWindow.loadURL(
    isDev ? 'http://localhost:8080' : `file://${__dirname}/dist/index.html`
  );

  if (process.env.NODE_ENV === 'development') {
    BrowserWindow.addDevToolsExtension(process.env.REACT_DEVTOOLS_PATH);
    BrowserWindow.addDevToolsExtension(process.env.REDUX_DEVTOOLS_PATH);
  }
});

ipcMain.on('files:added', (event, files) => {
  const promises = files.map(
    file =>
      new Promise((resolve, reject) => {
        ffmpeg.ffprobe(file.path, (err, metadata) => {
          if (err) {
            reject(err);
          }

          file.duration = metadata.format.duration;
          resolve(file);
        });
      })
  );

  Promise.all(promises).then(results =>
    mainWindow.webContents.send('metadata:complete', results)
  );
});

ipcMain.on('conversion:start', (event, files) => {
  for (const file of files) {
    const outputDir = file.path.split(file.name)[0];
    const outputName = file.name.split('.')[0];
    const outputPath = `${outputDir}${outputName}.mp3`;

    ffmpeg(file.path)
      .output(outputPath)
      .audioCodec('libmp3lame')
      .audioBitrate(320)
      .on('progress', ({ timemark }) => {
        mainWindow.webContents.send('conversion:progress', {
          file,
          timemark
        });
      })
      .on('end', () =>
        mainWindow.webContents.send('conversion:end', {
          file,
          outputPath
        })
      )
      .run();
  }
});
