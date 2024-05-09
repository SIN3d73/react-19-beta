import { FC } from 'react';

const Links: FC = () => {
  return (
    <>
      <title>React 19</title>
      <ul>
        <li>
          <a
            className="underline text-blue-600"
            href="https://www.developerway.com/posts/react-compiler-soon"
            target="_blank"
          >
            NO compiler in v19
          </a>
        </li>
        <li>
          <a
            className="underline text-blue-600"
            href="https://react.dev/blog/2024/04/25/react-19"
            target="_blank"
          >
            v19 changelog
          </a>
        </li>
        <li>
          <a
            className="underline text-blue-600"
            href="https://www.npmjs.com/package/react-error-boundary"
            target="_blank"
          >
            Error boundary - essential lib for use() hook
          </a>
        </li>
        <li>
          <a
            className="underline text-blue-600"
            href="https://react.dev/reference/rsc/server-components"
            target="_blank"
          >
            Server components - useful for Next.js-like libs
          </a>
        </li>
        <li>
          <a
            className="underline text-blue-600"
            href="https://react.dev/blog/2024/04/25/react-19-upgrade-guide"
            target="_blank"
          >
            Upgrade guide - how to set up v19-beta, breaking changes etc.
          </a>
        </li>
      </ul>
    </>
  );
};

export default Links;
