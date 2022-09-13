/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function App() {
  return (
    <div
      css={css`
        text-align: center;
      `}
    >
      <header className="App-header">
        <img src={' '} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
