---
title: Pipelines
permalink: /api/resources/pipelines
parent: Resources
grand_parent: API
nav_order: 13
components: request-md-components/pipelines
---

# {{page.title}}

A pipeline is a workspace-specific configuration or definition for extracting, loading and transforming data from a given [dataplugin](dataplugins) - following the concept of [ELT](https://en.wikipedia.org/wiki/Extract,_load,_transform){:target="_blank"}. Pipelines are run as [jobs](jobs) to load data into a workspace, either manually or on a predetermined schedule. Only a single pipeline can be run at any given time.
{: .fs-5 }

---

## Objects
{: .no_toc }

### Pipeline

Path | Type | Format | Description
---- | ---- | ------ | -----------
`id` | `String` | Version 4 UUID | The pipeline ID 
`status` | `String` | [Pipeline Status](#pipeline-status)
`name` | `String` | | The pipeline name
`schedule` | `String` | Cron | The interval at which to launch a new job e.g. `0 0 9-17 * * MON-FRI` launches a job on the hour nine-to-five weekdays
`timeout` | `Integer` | Unsigned | The number of seconds after which the job will terminate - if set to `0`, an implicit default value of 300 seconds is used
`script` | `String` | Bash | Custom script to be executed as the pipeline job
`created` | `String` | ISO 8601 timestamp | When the pipeline was created
`lastModified` | `String` | ISO 8601 timestamp | When the pipeline was last modified
`properties` | [`Properties`](#properties) | | The properties to run the pipeline with, defined by the pipeline [dataplugin](dataplugins) `settings`
`dataSource` | `String` | | The pipeline data source [dataplugin](dataplugins) `name`
`dataStore` | `String` | Version 4 UUID | The pipeline datastore `id`
`_embedded.dataSource` | [`DataPlugin`](dataplugins#dataplugin) | | The pipeline data source [dataplugin](dataplugins)
`_embedded.dataStore` | `DataStore` | | The pipeline data store
`_embedded.'latest job'` | [`Job`](jobs#job) | | The latest [job](jobs) run from the pipeline

{% include snippets/api/pipelines/view-a-pipeline/response-body.md %}

### Properties

For each setting `s` in the [dataplugin](dataplugins) [`settings`](dataplugins#setting):

Path | Type | Description
---- | ---- | -----------
`s.name` | `s.kind` | Refer to `s.description`

## Formats
{: .no_toc}

### Pipeline Status
{: .d-inline-block }

Value | Description
----- | -----------
`READY` | The pipeline completed processing resource changes
`PROVISIONING` | The pipeline is processing resource changes
`FAILED` | The pipeline failed to process resource changes

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
{% include {{page.components}}/create-or-update-a-pipeline-as-a-draft.md %}
{% include {{page.components}}/validate-a-pipeline-configuration-in-a-workspace.md %}
{% include {{page.components}}/verify-a-pipeline.md %}
{% include {{page.components}}/delete-a-pipeline.md %}
