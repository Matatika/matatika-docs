## View all datastores in a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/datastores
{:.path .path-GET}

Returns the datastores in the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Datastore](#datastore) collection with HAL links.

---
