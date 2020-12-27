const { app, BrowserWindow } = require('electron');

require('electron-reload')(__dirname, {
    // electron: require(`${__dirname}/node_modules/electron`),
    electron: require('electron-reload')
})

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        }
    })

    win.loadFile('./src/views/index.html');
    win.webContents.openDevTools();
}

app.whenReady().then(createWindow);