## View a notification

GET
{:.label .label-GET}

/api/notifications/{notification-id}
{:.path .path-GET}

Returns the notification `{notification-id}`.

### Prerequisites
- Notification `{notification-id}` must exist

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/notifications/view-a-notification/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/notifications/view-a-notification/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Notification](#notification) with HAL links.
{% include snippets/api/notifications/view-a-notification/response-body.md %}

---
