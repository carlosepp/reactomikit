import React from 'react';

import { Panel } from '../layout';
import { Inline, Padder } from '../helpers';
import { Title, H4, H3, H2, H1, P, Headline, Powered, Footnote } from '../typography';
import { Link } from '../base';
import Code from '../components/code';

const TypographyExample = () => (
  <Panel>
    <Title>Typography</Title>
    <Padder>
      <Inline>
        <Title>Typography</Title>
        <Code>
          { '<Title>Typography</Title>' }
        </Code>
      </Inline>
      <Inline>
        <H1> Heading h1 </H1>
        <Code>
          { '<H1>Heading h1</H1>' }
        </Code>
      </Inline>
      <Inline>
        <H2> Heading h2 </H2>
        <Code>
          { '<H2>Heading h2</H2>' }
        </Code>
      </Inline>
      <Inline>
        <H3> Heading h3 </H3>
        <Code>
          { '<H3>Heading h3</H3>' }
        </Code>
      </Inline>
      <Inline>
        <H4> Heading h4 </H4>
        <Code>
          { '<H4>Heading h4</H4>' }
        </Code>
      </Inline>
      <Inline>
        <H4> Code </H4>
        <Code>
          { 'if this then than' }
        </Code>
      </Inline>
      <Inline>
        <Link>Some awesome link </Link>
        <Code>
          { '<Link>Link</Link>' }
        </Code>
      </Inline>
      <Inline>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </P>
        <Code>
          {
`<P>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  culpa qui officia deserunt mollit anim id est laborum.
</P>
`
          }
        </Code>
      </Inline>
      <Inline>
        <Headline> Headline</Headline>
        <Code>
          { '<Headline> Headline</Headline>' }
        </Code>
      </Inline>
      <Inline>
        <Powered> Powered</Powered>
        <Code>
          { '<Powered> Powered</Powered>' }
        </Code>
      </Inline>
      <Inline>
        <Footnote> Footnote</Footnote>
        <Code>
          { '<Footnote> Footnote</Footnote>' }
        </Code>
      </Inline>
    </Padder>
  </Panel>
);

export default TypographyExample;