import {
  GraphQLObjectType,
  GraphQLList
} from 'graphql';
import { QuoteType } from './queryTypes';

export const queryType = new GraphQLObjectType({
  name: 'MainQuery',
  fields: {
    allQuotes: {
      type: new GraphQLList(QuoteType),
      description: 'A list of the quotes in the database',
      resolve: (obj, args, ctx) => {
        return ctx.db('test').collection('quotes').find().toArray();
      }
    }
  }
});
queryType
queryTypequeryType
