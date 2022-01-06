## Initialise a channel

POST
{:.label .label-POST}

/api/channels/{channel-id}
{:.path .path-POST}

Initialise a channel.

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/channels/initialise-a-channel/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/channels/initialise-a-channel/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-POST}

[Channel](#channel) with HAL links.
{% include snippets/api/channels/initialise-a-channel/response-body.md %}

---
