import * as React from 'react';
import { QuoteI } from '../../interfaces/Quote';

interface Props {
  quote: QuoteI;
};

export class Quote extends React.Component<Props, {}> {
  render() {
    return (
      <React.Fragment>
        <p>{this.props.quote.text}</p>
        <footer><b>Author: </b>{this.props.quote.author}</footer>
      </React.Fragment>
    );
  }
}
