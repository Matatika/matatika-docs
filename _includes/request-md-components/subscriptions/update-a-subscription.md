## Update a subscription

PUT
{:.label .label-PUT}

/api/subscriptions/{subscription-id}
{:.path .path-PUT}

Updates the subscription `{subscription-id}`.

### Prerequisites
- Subscription `{subscription-id}` must exist

### Request
#### Body

Path | JSON Type | Format | Description
---- | ---- | ------ | -----------
`type` | `string` | [Subscription Type](#subscription-type) | The type of subscription

{% include snippets/api/subscriptions/update-a-subscription/request-body.md %}

#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/subscriptions/update-a-subscription/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/subscriptions/update-a-subscription/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-PUT}

[Subscription](#subscription) with HAL links.
{% include snippets/api/subscriptions/update-a-subscription/response-body.md %}

---
