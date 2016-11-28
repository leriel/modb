# modb

Database utility for RPG MO built with ReactJS. http://rpgmo.out-line.co/#/

Built by bobdylan

Updated & expanded by leriel

## Files/Directories

* `dist` - the built modb site.
* `export` - scripts to export data from the live game. TODO: export automatically with phantomJS
* `src` - the source files for the modb website.
* `Gruntfile.js` - Task definitions.
* `package.json` - Node.js package file.

### `export` folder

* `buildDb.js` - The main script for building the modb database by exporting information from the live game.
* `consoleUtilities.js` - a set of utilities that could easily be run from the console. Just copy & paste contents into console, then run stuff using modb.util.<utilityName>... eg: modb.util.searchItems('egg', 'name')

## Building

Load the game, open the console, and then copy & paste the contents of `export/buildDb.js` into the console window. Use `copy(window.modb.DB)` to copy appropriate database into the appropriate file in `src/stores` (the *DB.js files, not the *Store.js files.) Then run grunt, and upload the contents of the dist folder to the web.

To get started, download this repo. Install Node, and then run `npm install` from the root folder of the project. Then just run `grunt` to build it. Additionally, run `grunt grunt-rev-all` to revision js file and update index.html in `dist` folder.
