## Add a dataset to a list channel

PUT
{:.label .label-PUT}

/api/channels/{channel-id}/datasets/{dataset-id}
{:.path .path-PUT}

Adds a dataset to a channel with type list.

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/channels/add-dataset-to-list-channel/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/channels/add-dataset-to-list-channel/python-requests.md %}
{: .tabs-section-end}

### Response
`201 Created`
{: .dummy-heading .path-PUT}

No response body provided.

---
