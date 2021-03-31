## Delete a notification

DELETE
{:.label .label-DELETE}

/api/notifications/{notification-id}
{:.path .path-DELETE}

Deletes the notification `{notification-id}`.

### Prerequisites
- Notification `{notification-id}` must exist

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/notifications/delete-a-notification/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/notifications/delete-a-notification/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

204
{:.label .label-DELETE}

No response body provided.

---
