const axios = require('axios');
const releaseUrl = 'https://data.mo.ee/release.js';
const HTTP_STATUS_OK = 200;

function getVersion(response) {
  if (response.status !== HTTP_STATUS_OK) {
    process.exit(1);
  }
  const [ versionLine, version ] =
    response.data.match(/release_version = ([0-9]+);/);
  if (!versionLine || !version) {
    process.exit(1);
  }
  console.log(version);
}

axios.get(releaseUrl)
  .then(getVersion);
