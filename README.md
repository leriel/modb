# modb

This is a database utility for MORPG I built using ReactJS.  I'm putting this readme together years after the fact.  I'll try to be as complete as I can, but just remembering half of how this works will be a challenge.

This is currently hosted at http://rpgmo.atspace.cc/modb/#/, but I have no idea how to login to that anymore...  Probably best to host it somewhere else if you want to continue its development.

## Files/Directories

* `dist` - the built modb site.
* `export` - a bunch of scripts to export data from the live game.
* `hax` - can probably be ignored. Only 1 file in there anyway, `dingOnFull.js` which played an audio ding when your inventory was full.
* `mod_source.js` - very old source files povided to me by Margus. (I've deleted the files here for safety.)
* `src` - the source files for the modb website.
* `Gruntfile.js` - I used grunt to build the site.
* `package.json` - Node.js package file.

### `export` folder

* `buildDb.js` - This was the main script for building the modb database by exporting information from the live game.
* `consoleUtilities.js` - a set of utilities that could easily be run from the console.  I'd just copy & paste contents into console, then run stuff using modb.util.<utilityName>... eg: modb.util.searchItems('egg', 'name')
* `mapTest.js` - looks like a file I kept a few test functions in... not sure it was really used in the process of exporting the data.
* `searchObjBase42.js` - looks like something I setup to search stuff... looks like most of it was later moved to the `consoleUtilities.js`.

## Building

I believe I would just load the game, open the console, and then copy & paste the contents of `export/buildDb.js` into the console window.  This should spit out a bunch of different arrays/objects.  I'd then copy and paste those into the approprite file in `src/stores` (the *DB.js files, not the *Store.js files.)  Then run grunt, and upload the contents of the dist folder to the web.

To get started you'd have to download this repo.  Install Node, and then run `npm install` from the root folder of the project.  Then just run `grunt` to build it.
