## Subscribe to a dataset

POST
{:.label .label-POST}

/api/datasets/{dataset-id}/subscriptions
{:.path .path-POST}

Subscribes the authenticated user profile to the dataset `{dataset-id}`.

### Prerequisites
- Dataset `{dataset-id}` must exist

### Response
{: .d-inline-block }

200
{:.label .label-POST}

[Subscription](#subscription) object with HAL links.

---
