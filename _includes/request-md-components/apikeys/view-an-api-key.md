## View an API key

GET
{:.label .label-GET}

/api/apikeys/{apikey-id}
{:.path .path-GET}

Returns the API key `{apikey-id}`.

### Prerequisites
- The authenticated user must own a Matatika account
- The API key `{apikey-id}` must exist

### Request

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/apikeys/view-an-api-key/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/apikeys/view-an-api-key/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[API key](#api-key) with HAL links.

---
