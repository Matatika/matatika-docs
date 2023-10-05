## Subscribe to a workspace

POST
{:.label .label-POST}

/api/workspaces/{workspace-id}/subscriptions
{:.path .path-POST}

Subscribes the authenticated user profile to the workspace `{workspace-id}`.

By default, the subscription is configured for all workspace events (see [Subscription Type](#subscription-type) for more information).

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request
#### Query Parameters

Parameter | Required | Format | Default Value | Description
--------- | -------- | ------ | ------------- | -----------
`allMembers` | No | Boolean | `false` | Whether or not to subscribe the workspace to workspace events, in order to enable workspace-wide notifications for all [members](members) by default (applicable for the workspace owner only)

#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/subscriptions/subscribe-to-a-workspace/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/subscriptions/subscribe-to-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-POST}

[Subscription](#subscription) with HAL links.
{% include snippets/api/subscriptions/subscribe-to-a-workspace/response-body.md %}

---
