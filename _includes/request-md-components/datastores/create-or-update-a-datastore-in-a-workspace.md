## Create or update a datastore in a workspace

PUT
{:.label .label-PUT}

/api/workspaces/{workspace-id}/datastores/{datastore-id}
{:.path .path-PUT}

Creates or updates the datastore `{datastore-id}` in the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request

#### Body
[Datastore](#datastore) resource.

### Response
{: .d-inline-block }

201 / 200
{:.label .label-PUT}

[Datastore](#datastore) with HAL links.

---
