## Initialise a new datastore in a workspace

POST
{:.label .label-POST}

/api/workspaces/{workspace-id}/datastores
{:.path .path-POST}

Initialises a new datastore in the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Response
{: .d-inline-block }

200
{:.label .label-POST}

[Datastore](#datastore) with HAL links.

---
