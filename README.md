# GraphQL Subschema Service

A GraphQL subschema service that serves part of a graph, which stitches into a [gateway service](https://github.com/shawnlknight/gateway-service).

## Getting Started

```sh
git clone https://github.com/shawnlknight/subschema-service
cd subschema-service
npm i
npm run dev
```

You should see the following output: `subschema service running at http://localhost:4001/graphql`

**Note**: You may need to run `npm run generate` to generate the `typings/generated.ts` file. The decision was made to not keep the generated types in source control to prevent future issues with merge conflicts.

Example query:

```gql
query {
  company(id: 2) {
    name
    products {
      name
    }
  }
}
```

Returns:

```json
{
  "data": {
    "company": {
      "name": "Vans",
      "products": [
        {
          "name": "Old School Pro"
        },
        {
          "name": "Sk8 Hi"
        }
      ]
    }
  }
}
```
