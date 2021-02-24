## Subscribe to a dataset

POST
{:.label .label-POST}

/api/datasets/{dataset-id}/subscriptions
{:.path .path-POST}

Subscribes the authenticated user profile to the dataset `{dataset-id}`.

By default, the subscription is configured for all dataset events (see [Subscription Type](#subscription-type) for more information)

### Prerequisites
- Dataset `{dataset-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/subscriptions/subscribe-to-a-dataset/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/subscriptions/subscribe-to-a-dataset/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-POST}

[Subscription](#subscription) object with HAL links.

{% include snippets/api/subscriptions/subscribe-to-a-dataset/response-body.md %}

---
