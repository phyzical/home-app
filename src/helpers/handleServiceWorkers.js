import { register } from 'register-service-worker'
import config from './config'

const serviceWorkerRemove = () => {
  if (typeof navigator.serviceWorker !== 'undefined') {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      registrations.forEach((registration) => {
        registration
          .unregister()
          .then(function () {
            return self.clients.matchAll()
          })
          .then(function (clients) {
            clients.forEach((client) => {
              if (client.url && 'navigate' in client) {
                client.navigate(client.url)
              }
            })
          })
      })
    })
  }
}

const serviceWorkerAdd = () => {
  if (!config.isDev) {
    console.log('registering')
    register(`${process.env.BASE_URL}service-worker.js`, {
      ready () {
        console.log(
          'App is being served from cache by a service worker.\n' +
            'For more details, visit https://goo.gl/AFskqB'
        )
      },
      registered () {
        console.log('Service worker has been registered.')
      },
      cached () {
        console.log('Content has been cached for offline use.')
      },
      updatefound () {
        console.log('New content is downloading.')
      },
      updated (registration) {
        console.log('New content is available; please refresh.')
        document.dispatchEvent(
          new CustomEvent('swUpdated', { detail: registration })
        )
      },
      offline () {
        console.log(
          'No internet connection found. App is running in offline mode.'
        )
      },
      error (error) {
        console.error('Error during service worker registration:', error)
      }
    })
  }
}

module.exports = {
  serviceWorkerAdd,
  serviceWorkerRemove
}
