## View an alert

GET
{:.label .label-GET}

alerts/{alert-id}
{:.path .path-GET}

View an alert.

### Prerequisites
- The authenticated user must own a Matatika account

### Request

#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/alerts/view-an-alert/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/alerts/view-an-alert/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

{% include snippets/api/alerts/view-an-alert/response-body.md %}

---
