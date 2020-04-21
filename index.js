const core = require('@actions/core');
// const wait = require('./wait');
const exec = require('@actions/exec')


// most @actions toolkit packages have async methods
async function run() {
  try {
    // const ms = core.getInput('milliseconds');
    // console.log(`Waiting ${ms} milliseconds ...`)
    // console.log('test')
    // core.debug((new Date()).toTimeString())
    // await wait(parseInt(ms));
    // core.debug((new Date()).toTimeString())

    // core.setOutput('time', new Date().toTimeString());

    const last_tag = await exec.exec('git tag')
    console.log(last_tag)
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
