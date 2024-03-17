const pet = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Luna'),
    React.createElement('h2', {}, 'Dog'),
    React.createElement('h2', {}, 'Havanese')
  ])
}

const App = () => {
  return React.createElement(
    'div',
    {},
    React.createElement(
      'h1',
      {},
      'adopt me'
    ),
    React.createElement(pet),
    React.createElement(pet),
    React.createElement(pet),
  )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App, {}, 'sdsdsdsdsdsds'))
