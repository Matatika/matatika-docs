## Refresh notifications

PUT
{:.label .label-PUT}

/api/notifications?since={since}&markAsRead={markAsRead}
{:.path .path-PUT}

Returns new notifications for the authenticated user profile, optionally marking existing notifications recieved as read before a specific instant.

### Request
#### Query Parameters

Parameter | Required | Format | Default Value | Description
--------- | -------- | ------ | ------------- | -----------
`since` | No | ISO 8601 timestamp | The instant at which the request was made | The instant to fetch any new notifications from
`markAsRead` | No | Boolean | `true` | Whether or not to mark notifications created before `since` as read

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/notifications/refresh-notifications/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/notifications/refresh-notifications/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-PUT}

[Notification](#notification) object collection with HAL links.

{% include snippets/api/notifications/refresh-notifications/response-body.md %}

---