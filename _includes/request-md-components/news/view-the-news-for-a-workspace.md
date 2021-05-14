## View the news for a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/news?all={all}&before={before}&since={since}
{:.path .path-GET}

Returns the news for the workspace `{workspace-id}`.

Unlike [View all notifications](notifications#view-all-notifications), this returns all notifications triggered by subscriptions configured for both the workspace and authenticated user profile.

### Request
#### Query Parameters

Parameter | Required | Format | Default Value | Description
--------- | -------- | ------ | ------------- | -----------
`all` | No | Boolean | `true` | Whether or not to return both resolved and unresolved notifications
`before` | No | ISO 8601 timestamp | The instant at which the request was made | The instant to return any notifications created before
`since` | No | ISO 8601 timestamp | `2021-02-11T11:12` | The instant to return any notifications created since
`q` | No | Tag [filter]({{site.baseurl}}/links#filter) | | The tag(s) to search notifications by

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Notification](notifications#notification) object collection with HAL links.

---