## Create an API key

PUT
{:.label .label-PUT}

/api/apikeys/{apikey-id}
{:.path .path-PUT}

Creates the API key `{apikey-id}`.

### Prerequisites
- The authenticated user must own a Matatika account

### Request

#### Body
[API key](#api-key) resource.
{% include snippets/api/apikeys/create-an-api-key/request-body.md %}

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/apikeys/create-an-api-key/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/apikeys/create-an-api-key/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

201
{:.label .label-PUT}

[API key](#api-key) with HAL links.
{% include snippets/api/apikeys/create-an-api-key/response-body.md %}

---
