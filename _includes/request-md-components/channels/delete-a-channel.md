## Delete a channel

DELETE
{:.label .label-DELETE}

/api/channels/{channel-id}
{:.path .path-DELETE}

Delete a channel.

### Prerequisites
- The user must be a admin of the workspace the channel is in.

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/channels/delete-a-channel/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/channels/delete-a-channel/python-requests.md %}
{: .tabs-section-end}

### Response
`204 No Content`
{: .dummy-heading .path-DELETE}

No response body provided.

---