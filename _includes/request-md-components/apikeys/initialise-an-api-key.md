## Initialise an API key

POST
{:.label .label-POST}

/api/apikeys
{:.path .path-POST}

Initialises a new API key.

### Prerequisites
- The authenticated user must own a Matatika account

### Request

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/apikeys/initialise-an-api-key/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/apikeys/initialise-an-api-key/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-POST}

[API key](#api-key) with HAL links.
{% include snippets/api/apikeys/initialise-an-api-key/response-body.md %}

---
