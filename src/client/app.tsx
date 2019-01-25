import * as React from 'react';
import { render } from 'react-dom';

interface Props {
  greeting: string;
}

class App extends React.Component<Props, {}> {
  static defaultProps = {
    greeting: 'Hello'
  };
  render() {
    return (
      <div>
        {this.props.greeting} World
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('react')
);
