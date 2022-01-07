## View all API keys

GET
{:.label .label-GET}

/api/apikeys
{:.path .path-GET}

Returns all API keys owned by the authenticated user profile.

### Prerequisites
- The authenticated user must own a Matatika account
- The API key `{apikey-id}` must exist

### Request

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/apikeys/view-all-api-keys/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/apikeys/view-all-api-keys/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[API key](#api-key) collection with HAL links.
{% include snippets/api/apikeys/view-all-api-keys/response-body.md %}

---
