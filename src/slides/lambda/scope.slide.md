<section data-markdown><textarea data-template>

### Lambda scope

```javascript
const AWS = require('aws-sdk')
const dynamodb = AWS.DynamoDB.DocumentClient()
let count = 0

async function handler() {
  const result = await dynamodb.get('...')
  count += 1

  return {
    statusCode: 200,
    body: JSON.stringify({
      result,
      count,
    }),
  }
}
```

</textarea></section>
