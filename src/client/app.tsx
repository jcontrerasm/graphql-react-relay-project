import * as React from 'react';
import { render } from 'react-dom';
import { QuotesLibrary } from './containers/QuotesLibrary';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <QuotesLibrary/>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('react')
);
