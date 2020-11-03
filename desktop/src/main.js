const { app, BrowserWindow } = require('electron');

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        altura: 600,
        webPreferences: {
            nodeIntegration: true,
        }
    })

    win.loadFile('index.html');
    
}

app.whenReady().then();