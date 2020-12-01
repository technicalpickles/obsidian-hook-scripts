//JavaScript
(() => {
  'use strict';

const main = () => {
  const app = Application.currentApplication()
  app.includeStandardAdditions = true
  
  const homeDirectory = app.pathTo("home folder").toString()

  const obsidianJSONPath = `${homeDirectory}/Library/Application Support/obsidian/obsidian.json`
  const obsidianData = JSON.parse(app.read(Path(obsidianJSONPath)))


  const vaultId = obsidianData["last_open"]
  const vault = obsidianData["vaults"][vaultId]
  const vaultPath = vault["path"]

  const workspaceJSONPath = `${vaultPath}/.obsidian/workspace`
  const workspaceData = JSON.parse(app.read(Path(workspaceJSONPath)))

  const currentDocument = workspaceData["lastOpenFiles"][0]

  const uri = `obsidian://open?vault=${vaultId}&file=${encodeURIComponent(currentDocument)}`
  return uri;
}

return main();

})()