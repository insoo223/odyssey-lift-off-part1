// gql: a tagged template literal, used for wrapping GraphQL strings like the schema definition we're about to write.
// This converts GraphQL strings into the format that Apollo libraries expect when working with operations and schemas, and it also enables syntax highlighting.
const {gql} = require('apollo-server');

const typeDefs = gql `
    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        id: ID!

        "The track's title"
        title: String!
        
        "The track's main author"
        author: Author!

        "The track's main illustration to display in track card or track page detail"
        thumbnail: String
        
        "The track's approximate length to complete, in minutes"
        length: Int

        "The number of modules this track contains"
        moduleCount: Int
    }

    "Author of a complete Track or a Module"
    type Author {
        id: ID!

        "Author's first and last name"
        name: String!

        "Author's profile picture url"
        photo: String
    }

    "how to tell the GraphQL server what to retrieve when we query it. Remember, we don't have multiple specific endpoints to target different types like a REST API does. Instead, we define a special Query type."
    "The fields of this type are entry points into the rest of our schema. These are the top-level fields that our client can query for."
    type Query {
        "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
    }
`;

module.exports = typeDefs;
