## View all received invitations

GET
{:.label .label-GET}

/api/invitations?email={user-email}
{:.path .path-GET}

Returns all invitations received by the authenticated user profile.

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/invitations/view-all-received-invitations/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/invitations/view-all-received-invitations/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Invitation](#invitation) collection with HAL links.
{% include snippets/api/invitations/view-all-received-invitations/response-body.md %}

---
