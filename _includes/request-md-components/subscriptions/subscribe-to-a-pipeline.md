## Subscribe to a pipeline

POST
{:.label .label-POST}

/api/pipelines/{pipeline-id}/subscriptions
{:.path .path-POST}

Subscribes the authenticated user profile to the pipeline `{pipeline-id}`.

By default, the subscription is configured for all pipeline events (see [Subscription Type](#subscription-type) for more information)

### Prerequisites
- Pipeline `{pipeline-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/subscriptions/subscribe-to-a-pipeline/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/subscriptions/subscribe-to-a-pipeline/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-POST}

[Subscription](#subscription) object with HAL links.

{% include snippets/api/subscriptions/subscribe-to-a-pipeline/response-body.md %}

---
