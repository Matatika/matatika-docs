## Remove a dataset from a list channel

DELETE
{:.label .label-DELETE}

/api/channels/{channel-id}/datasets/{dataset-id}
{:.path .path-DELETE}

Removes a dataset from a channel with type list.

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/channels/remove-dataset-from-list-channel/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/channels/remove-dataset-from-list-channel/python-requests.md %}
{: .tabs-section-end}

### Response
`204 No Content`
{: .dummy-heading .path-DELETE}

No response body provided.

---
