## View all notifications

GET
{:.label .label-GET}

/api/notifications?all={all}&before={before}&since={since}
{:.path .path-GET}

Returns all notifications for the authenticated user profile.

### Request
#### Query Parameters

Parameter | Required | Format | Default Value | Description
--------- | -------- | ------ | ------------- | -----------
`all` | Yes | Boolean | `false` | Whether or not to return all notifications, ignoring any defined range
`before` | No | ISO 8601 timestamp | The instant at which the request was made | The instant to return any notifications created before
`since` | No | ISO 8601 timestamp | `2021-02-11T11:12` | The instant to return any notifications created since

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/notifications/view-all-notifications/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/notifications/view-all-notifications/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Notification](#notification) object collection with HAL links.

{% include snippets/api/notifications/view-all-notifications/response-body.md %}

---
