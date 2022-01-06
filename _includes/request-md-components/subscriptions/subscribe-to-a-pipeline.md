## Subscribe to a pipeline

POST
{:.label .label-POST}

/api/pipelines/{pipeline-id}/subscriptions
{:.path .path-POST}

Subscribes the authenticated user profile to the pipeline `{pipeline-id}`.

By default, the subscription is configured for all pipeline events (see [Subscription Type](#subscription-type) for more information).

### Prerequisites
- Pipeline `{pipeline-id}` must exist

### Request
#### Query Parameters

Parameter | Required | Format | Default Value | Description
--------- | -------- | ------ | ------------- | -----------
`allMembers` | No | Boolean | `false` | Whether or not to subscribe the workspace to pipeline events, enabling notifications for all [members](members) by default (applicable for the workspace owner only)

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/subscriptions/subscribe-to-a-pipeline/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/subscriptions/subscribe-to-a-pipeline/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-POST}

[Subscription](#subscription) with HAL links.
{% include snippets/api/subscriptions/subscribe-to-a-pipeline/response-body.md %}

---
