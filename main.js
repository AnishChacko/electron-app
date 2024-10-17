const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

const { BaseWindow, WebContentsView } = require('electron')
//const win = new BaseWindow({ width: 800, height: 400 })

function createWindow () {
  const win = new BaseWindow({
    width: 800,
    height: 400,
    title: 'MFE - Electron Shell'
  })

const view1 = new WebContentsView()
win.contentView.addChildView(view1)
view1.webContents.loadURL('http://localhost:3000')
view1.setBounds({ x: 0, y: 0, width: 400, height: 400 })

const view2 = new WebContentsView()
win.contentView.addChildView(view2)
view2.webContents.loadURL('http://localhost:3001')
view2.setBounds({ x: 400, y: 0, width: 400, height: 400 })

  //win.loadFile('index.html')
  //win.loadURL('http://localhost:3000');
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
