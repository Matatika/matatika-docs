## Remove a subscription

DELETE
{:.label .label-DELETE}

/api/subscriptions/{subscription-id}
{:.path .path-DELETE}

Removes the subscription `{subscription-id}`.

### Prerequisites
- Subscription `{subscription-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/subscriptions/remove-a-subscription/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/subscriptions/remove-a-subscription/python-requests.md %}
{: .tabs-section-end}

### Response
`204 No Content`
{: .dummy-heading .path-DELETE}

No response body provided.

---
