## View a subscription

GET
{:.label .label-GET}

/api/subscriptions/{subscription-id}
{:.path .path-GET}

Returns the subscription `{subscription-id}`.

### Prerequisites
- Subscription `{subscription-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/subscriptions/view-a-subscription/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/subscriptions/view-a-subscription/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Subscription](#subscription) with HAL links.
{% include snippets/api/subscriptions/view-a-subscription/response-body.md %}

---
