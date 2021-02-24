## Refresh notifications

PUT
{:.label .label-PUT}

/api/notifications?read={read}&lastReadAt={lastReadAt}
{:.path .path-PUT}

Returns new notifications for the authenticated user profile, optionally marking existing notifications recieved as read before a specific instant.

### Request
#### Query Parameters

Parameter | Required | Format | Default Value | Description
--------- | -------- | ------ | ------------- | -----------
`read` | Yes | Boolean | `true` | Whether or not any existing notifications should be marked as read
`lastReadAt` | No | ISO 8601 timestamp | The instant at which the request was made | The instant to mark any notifications created before as read

### Response
{: .d-inline-block }

200
{:.label .label-PUT}

[Notification](#notification) object collection with HAL links.

---