const rootElement = document.getElementById('root');

function HelloWorld() {
  return React.createElement(
    'div',
    null,
    React.createElement(
        'button', 
        { onClick: handleClick }, 
        'Hello World em React'
        )
    );
}

function handleClick() {
    console.log('teste')
}

ReactDOM.render(React.createElement(HelloWorld), rootElement);
