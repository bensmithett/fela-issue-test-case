const React = require('react')
const ReactDOMServer = require('react-dom/server')
const createRenderer = require('fela').createRenderer
const RendererProvider = require('react-fela').RendererProvider
const FelaComponent = require('react-fela').FelaComponent
const renderToMarkup = require('fela-dom').renderToMarkup

const renderer = createRenderer({devMode: true})

const element = React.createElement(
  RendererProvider,
  {renderer: renderer},
  React.createElement(
    FelaComponent,
    {
      as: 'div',
      style: {
        color: 'blue'
      }
    },
    null
  )
)

console.log('html')
console.log(ReactDOMServer.renderToString(element))
console.log('------------------------------')
console.log('css')
console.log(renderToMarkup(renderer))
