## Subscribe to a pipeline

POST
{:.label .label-POST}

/api/pipelines/{pipeline-id}/subscriptions
{:.path .path-POST}

Subscribes the authenticated user profile to the pipeline `{pipeline-id}`.

### Prerequisites
- Pipeline `{pipeline-id}` must exist

### Response
{: .d-inline-block }

200
{:.label .label-POST}

[Subscription](#subscription) object with HAL links.

---
