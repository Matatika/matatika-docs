## Subscribe to a channel

POST
{:.label .label-POST}

/api/channels/{channel-id}/subscriptions
{:.path .path-POST}

Subscribes the authenticated user profile to the channel `{channel-id}`.

By default, the subscription is configured for all channel events (see [Subscription Type](#subscription-type) for more information).

### Prerequisites
- Channel `{channel-id}` must exist

### Request
#### Query Parameters

Parameter | Required | Format | Default Value | Description
--------- | -------- | ------ | ------------- | -----------
`allMembers` | No | Boolean | `false` | Whether or not to subscribe the workspace to channel events, enabling notifications for all [members](members) by default (applicable for the workspace owner only)

#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/subscriptions/subscribe-to-a-channel/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/subscriptions/subscribe-to-a-channel/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-POST}

[Subscription](#subscription) with HAL links.
{% include snippets/api/subscriptions/subscribe-to-a-channel/response-body.md %}

---
