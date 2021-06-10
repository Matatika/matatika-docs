## Delete an API key

DELETE
{:.label .label-DELETE}

/api/apikeys/{apikey-id}
{:.path .path-DELETE}

Deletes the API key `{apikey-id}`.

### Prerequisites
- The authenticated user must own a Matatika account
- The API key `{apikey-id}` must exist

### Request

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/apikeys/delete-an-api-key/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/apikeys/delete-an-api-key/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

204
{:.label .label-DELETE}

No response body provided.

---
