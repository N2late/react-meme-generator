/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import fileDownload from 'js-file-download';
import { useEffect, useState } from 'react';

function App() {
  const [template, setTemplate] = useState('buzz');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [templates, setTemplates] = useState([]);

  const url = topText
    ? `https://api.memegen.link/images/${template}/${topText}/${bottomText}.jpg`
    : `https://api.memegen.link/images/${template}/_/${bottomText}.jpg`;

  useEffect(() => {
    fetch('https://api.memegen.link/templates')
      .then((res) => res.json())
      .then((res) => setTemplates(res))
      .catch(() => alert('We could not find that template.'));
  }, []);

  const handleDownload = async () => {
    await axios
      .get(url, {
        responseType: 'blob',
      })
      .then((res) => {
        fileDownload(res.data, `meme_${template}.jpg`);
      });
  };

  return (
    <div
      css={css`
        text-align: center;
      `}
    >
      <header>
        <h1
          css={css`
            color: white;
            font-family: 'Brush Script MT', cursive;
          `}
        >
          Meme Generator
        </h1>
        <img
          css={css`
            width: fit-content;
            max-height: 500px;
            border: 15px solid white;
          `}
          src={url}
          alt="meme"
          data-test-id="meme-image"
        />
        <h3
          css={css`
            font-family: 'Brush Script MT', cursive;
          `}
        >
          Personalize your Meme
        </h3>
        <div>
          <label
            css={css`
              font-family: 'Brush Script MT';
              font-weight: 700;
            `}
            htmlFor="templates"
          >
            Meme template{' '}
          </label>
          <select
            name="templates"
            id="templates"
            value={template}
            onChange={(e) => setTemplate(e.currentTarget.value)}
          >
            {templates.map((item) => (
              <option key={item.id} value={item.id}>
                {item.id}
              </option>
            ))}
          </select>
        </div>
        <label
          css={css`
            font-family: 'Brush Script MT';
            font-weight: 700;
          `}
          htmlFor="topText"
        >
          Top text
        </label>
        <input
          css={css`
            margin-right: 20px;
          `}
          id="topText"
          value={topText}
          onChange={(e) => {
            const text = e.currentTarget.value.replace(' ', '_');
            setTopText(text);
          }}
        />
        <label
          css={css`
            font-family: 'Brush Script MT';
            font-weight: 700;
          `}
          htmlFor="bottomText"
        >
          Bottom text
        </label>
        <input
          id="bottomText"
          value={bottomText}
          onChange={(e) => {
            const text = e.currentTarget.value.replace(' ', '_');
            setBottomText(text);
          }}
        />
        <div>
          <button
            css={css`
              margin-top: 20px;
              background-color: #c2fbd7;
              border-radius: 100px;
              box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
                rgba(44, 187, 99, 0.15) 0 1px 2px,
                rgba(44, 187, 99, 0.15) 0 2px 4px,
                rgba(44, 187, 99, 0.15) 0 4px 8px,
                rgba(44, 187, 99, 0.15) 0 8px 16px,
                rgba(44, 187, 99, 0.15) 0 16px 32px;
              color: green;
              cursor: pointer;
              display: inline-block;
              font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto,
                sans-serif;
              padding: 7px 20px;
              text-align: center;
              text-decoration: none;
              transition: all 250ms;
              border: 0;
              font-size: 16px;
              user-select: none;
              -webkit-user-select: none;
              touch-action: manipulation;

              &:hover {
                box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
                  rgba(44, 187, 99, 0.25) 0 1px 2px,
                  rgba(44, 187, 99, 0.25) 0 2px 4px,
                  rgba(44, 187, 99, 0.25) 0 4px 8px,
                  rgba(44, 187, 99, 0.25) 0 8px 16px,
                  rgba(44, 187, 99, 0.25) 0 16px 32px;
                transform: scale(1.05) rotate(-1deg);
              }
            `}
            onClick={handleDownload}
          >
            Download
          </button>{' '}
        </div>
      </header>
    </div>
  );
}

export default App;
