module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        productName: "The World's Simplest CSV Viewer",
        extraFiles: [
          {
            "from": "./README.md",
            "to": "./README.md",        
          }
        ],
        publish: ['github']
      }
    }
  }
}