# GraphQL Subschema Service

A GraphQL subschema service that serves part of a graph, which stitches into a [gateway service](https://github.com/shawnlknight/gateway-service).

## Getting Started

Clone repo and install dependencies:

```sh
git clone https://github.com/shawnlknight/subschema-service
cd subschema-service
npm i
```

Generate types:

```sh
npm run generate
```

Run local server:

```sh
npm run dev
```

You should see the following output: `subschema service running at http://localhost:4001/graphql`

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
