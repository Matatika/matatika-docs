## View all notifications for a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspaceId}/notifications?all={all}&before={before}&since={since}
{:.path .path-GET}

Returns all notifications for the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request
#### Query Parameters

Parameter | Required | Format | Default Value | Description
--------- | -------- | ------ | ------------- | -----------
`all` | No | Boolean | | Whether or not to return all notifications, ignoring any defined range
`before` | No | ISO 8601 timestamp | The instant at which the request was made | The instant to return any notifications created before
`since` | No | ISO 8601 timestamp | `2021-02-11T11:12` | The instant to return any notifications created since

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Notification](#notification) object collection with HAL links.

---
