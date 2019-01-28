import * as React from 'react';
import { GraphqlClient } from '../../infraestructure/GraphqlClient';
import { Quote } from '../../components/Quote';
import { QuoteI } from '../../interfaces/Quote';
import { ALL_QUOTES } from '../../queries';

interface State {
  allQuotes: QuoteI[]
};

export class QuotesLibrary extends React.Component<{}, State> {

  state: State = {
    allQuotes: []
  };

  private graphqlClient: any;

  constructor(props: {}) {
    super(props);
    this.graphqlClient = GraphqlClient.getInstance();
  }

  private async getData() {
    try {
      const response = await this.graphqlClient.request(ALL_QUOTES);
      this.setState(response);
    } catch (error) {
      throw new Error(error);
    }
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const allQuotes = [...this.state.allQuotes];

    return (
      allQuotes.length &&
      <div className="b-quotes-list">
        { allQuotes.map((quote, index) =>
          <Quote key={index} quote={quote} />
        )}
      </div>
    );
  }
}
