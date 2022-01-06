## View the news for a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/news?before={before}&since={since}
{:.path .path-GET}

Returns the news for the workspace `{workspace-id}`.

Unlike [View all notifications](notifications#view-all-notifications), this returns all notifications triggered by subscriptions configured for both the workspace and authenticated user profile.

### Request
#### Query Parameters

Parameter | Required | Format | Default Value | Description
--------- | -------- | ------ | ------------- | -----------
`before` | No | ISO 8601 timestamp | The instant at which the request was made | The instant to return any notifications created before
`since` | No | ISO 8601 timestamp | `2021-02-11T11:12` | The instant to return any notifications created since
`q` | No | Tag [filter]({{site.baseurl}}/api/links#filter) | | The tag(s) to search notifications by

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Notification](notifications#notification) collection with HAL links.

---
