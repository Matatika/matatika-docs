## View all subscriptions to a workspace

GET
{:.label .label-GET}

/api/workspace/{workspace-id}/subscriptions
{:.path .path-GET}

Returns all subscriptions to the workspace `{workspace-id}`

### Prerequisites
- Workspace `{workspace-id}` must exist

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Subscription](#subscription) object collection with HAL links.

---
