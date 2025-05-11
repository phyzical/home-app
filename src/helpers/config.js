const processEnv = process.env
const port =
  typeof processEnv.VUE_APP_PORT !== 'undefined'
    ? processEnv.VUE_APP_PORT
    : null

const config = {
  isDev: processEnv.NODE_ENV === 'development',
  port,
  appVersion: processEnv.RELEASE_VERSION,
  title: processEnv.VUE_APP_TITLE
}

module.exports = config
