## View all subscriptions

GET
{:.label .label-GET}

/api/subscriptions
{:.path .path-GET}

Returns all subscriptions for the authenticated user profile.

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/subscriptions/view-all-subscriptions/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/subscriptions/view-all-subscriptions/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Subscription](#subscription) collection with HAL links.
{% include snippets/api/subscriptions/view-all-subscriptions/response-body.md %}

---
