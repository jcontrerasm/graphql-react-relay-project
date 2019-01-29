import { GraphQLClient } from 'graphql-request';

export class GraphqlClient {

  static instance: GraphQLClient;

  private constructor() {}

  static getInstance(): GraphQLClient {
    if(!this.instance) {
      const url: string = 'http://localhost:3000/graphql';
      GraphqlClient.instance = new GraphQLClient(url)
    }
    return GraphqlClient.instance;
  }

  static async request(query: string): Promise<any> {
    return await GraphqlClient.instance.request(query);
  }
}
