## Create or update a dataset message

PUT
{:.label .label-PUT}

/api/datasets/{dataset-id}/messages/{message-id}
{:.path .path-PUT}

Creates or updates the dataset message `{message-id}` for the dataset `{dataset-id}`. This appears as [`DATASET_MESSAGE`](notifications#notification-type) [notification](notifications) for the recipient.

### Prerequisites
- Dataset `{dataset-id}` must exist

### Request
#### Body

Path | Type | Format | Description
---- | ---- | ------ | -----------
`recipientId` | `String` | | The recipient profile ID
`message` | `String` | | The dataset message content

### Response
{: .d-inline-block }

200 / 201
{:.label .label-PUT}

[Dataset Message](#dataset-message) object with HAL links.

---
