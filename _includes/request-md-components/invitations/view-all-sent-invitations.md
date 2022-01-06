## View all sent invitations

GET
{:.label .label-GET}

/api/invitations
{:.path .path-GET}

Returns all invitations sent by the authenticated user profile.

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/invitations/view-all-sent-invitations/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/invitations/view-all-sent-invitations/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Invitation](#invitation) collection with HAL links.
{% include snippets/api/invitations/view-all-sent-invitations/response-body.md %}

---
