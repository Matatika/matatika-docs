## View a pipeline

GET
{:.label .label-GET}

/api/pipelines/{pipeline-id}
{:.path .path-GET}

Returns the pipeline `{pipeline-id}`.

### Prerequisites
- Pipeline `{pipeline-id}` must exist

### Request

#### Body
No request body required.

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Pipeline object](#pipeline-object) with HAL links.

---
