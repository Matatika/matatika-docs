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
`all` | No | Boolean | | Whether or not to return both resolved and unresolved notifications
`before` | No | ISO 8601 timestamp | The instant at which the request was made | The instant to return any notifications created before
`since` | No | ISO 8601 timestamp | `2021-02-11T11:12` | The instant to return any notifications created since

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/notifications/view-all-notifications-for-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/notifications/view-all-notifications-for-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Notification](#notification) collection with HAL links.
{% include snippets/api/notifications/view-all-notifications-for-a-workspace/response-body.md %}

---
