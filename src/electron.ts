import { app, BrowserWindow } from 'electron';
import path from 'path';

app.on('ready', () => {
  const mainWindow = new BrowserWindow();

  mainWindow.loadURL(`file://${path.join(__dirname, 'index.html')}`);

  mainWindow.show();
});
