import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

export const QuoteType = new GraphQLObjectType({
  name: 'Quote',
  fields: {
    id: {
      type: GraphQLID,
      resolve: obj => obj._id
    },
    text: { type: GraphQLString },
    author: { type: GraphQLString }
  }
});
