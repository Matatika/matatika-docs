---
layout: default
title: Pipelines
permalink: /api/resources/pipelines
parent: Resources
grand_parent: API
nav_order: 12
components: request-md-components/pipelines
---

# {{page.title}}

A pipeline is a workspace-specific configuration or definition for extracting, loading and transforming data from a given [datasource](datasources) - following the concept of [ELT](https://en.wikipedia.org/wiki/Extract,_load,_transform). Pipelines can be run as [jobs](jobs) to load data into a workspace.
{: .fs-5 }

---

## Example Resource
{: .no_toc }

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}
{:.path .path-GET}

{% include snippets/api/pipelines/view-a-pipeline/response-body.md %}

## Objects
{: .no_toc }

### Pipeline

Path | Type | Format | Description
---- | ---- | -----------
`id` | `String` | Version 4 UUID) | The pipeline ID 
`name` | `String` | | The pipeline name
`created` | `String` | ISO 8601 timestamp | When the pipeline was created
`lastModified` | `String` | ISO 8601 timestamp | When the pipeline was last modified
`properties` | [`Properties`](#properties) object | | The properties to run the pipeline with, defined by the pipeline [datasource](datasources) `settings`
`dataSource` | `String` | | The pipeline target [datasource](datasources) `name`
`schedule` | `String` | Cron | The interval at which to launch a new job e.g. `0 0 9-17 * * MON-FRI` launches a job on the hour nine-to-five weekdays
`script` | `String` | Bash | Custom script to be executed as the pipeline job

### Properties

For a [datasource](datasources) with `n` [`settings`](datasources#setting):

Path | Type | Description
---- | ---- | -----------
`settings[0].name` | `settings[0].kind` | Refer to `settings[0].description`
`settings[1].name` | `settings[1].kind` | Refer to `settings[1].description`
`settings[2].name` | `settings[2].kind` | Refer to `settings[2].description`
... | ...
`settings[n-1].name` | `settings[n-1].kind` | Refer to `settings[n-1].description`

---

#### Requests

- TOC
{: toc }

#### See Also

- [View all running or completed jobs for a pipeline](jobs#view-all-running-or-completed-jobs-for-a-pipeline)
- [Create a job from a pipeline](jobs#create-a-job-from-a-pipeline)
- [Subscribe to a pipeline](subscriptions#subscribe-to-a-pipeline)

---

{% include {{page.components}}/view-all-pipelines-in-a-workspace.md %}
{% include {{page.components}}/view-a-pipeline.md %}
{% include {{page.components}}/initialise-a-pipeline-in-a-workspace.md %}
{% include {{page.components}}/create-or-update-a-pipeline-in-a-workspace.md %}
{% include {{page.components}}/delete-a-pipeline.md %}

