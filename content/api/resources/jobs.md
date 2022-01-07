---
layout: default
title: Jobs
permalink: /api/resources/jobs
parent: Resources
grand_parent: API
nav_order: 14
components: request-md-components/jobs
---

# {{page.title}}

A job is an arbitrary task with some stored state, pertaining to the governing [workspace](workspaces). Typically, jobs are orchestrated by [pipeline](pipelines) operations, but can also represent tasks for the user to complete.
{: .fs-5 }

---

## Objects
{: .no_toc}

### Job

Path | Type | Format | Description
---- | ---- | ------ | -----------
`id` | `String` | Version 4 UUID | The job ID
`created` | `String` | ISO 8601 timestamp | The instant at which the job was created
`type` | `String` | [Job Type](#job-type) | The descriptor for the process undertaken by the job
`exitCode` | `Integer` | Process exit status | The job exit code
`status` | `String` | [Job Status](#job-status) | The job status
`startTime` | `String` | ISO 8601 timestamp | The instant at which the job run started
`endTime` | `String` | ISO 8601 timestamp | The instant at which the job run ended

{% include snippets/api/jobs/view-a-job/response-body.md %}

## Formats
{: .no_toc}

### Job Status
{: .d-inline-block }

`String`
{: .float-right .mt-5 }

Value | Description
----- | -----------
`QUEUED` | The job is queued
`RUNNING` | The job is running
`COMPLETE` | The job finished with no errors
`ERROR` | The job finished with errors
`STOPPED` | The job timed out or was manually stopped

### Job Type
{: .d-inline-block }

`String`
{: .float-right .mt-5 }

Value | Description
----- | -----------
`WORKSPACE_INIT` | A system task to create a Meltano project in a [workspace](workspaces) repository - automatically run when a workspace is created
`PIPELINE_CONFIG` | A system task to configure the Meltano project and publish [datasets](datasets) with reference to a [pipeline](pipelines) - automatically run when a pipeline is created, or a pipeline with a [`status`](pipelines#pipeline-status) of `FAILED` is updated
`PIPELINE_VERFIY` | A system task to isplay and test the configuration of a [pipeline](pipelines)
`PIPELINE_RUN` | A system task to run a [pipeline](pipelines) to load data into the [workspace](workspace)  default [datastore](datastores), or some other destination external to the platform - manually run by the user or automatically run on the defined `schedule`
`PROFILE_COLLABORATE` | A user task to send an [invitation](invitations)
`PROFILE_IMPORT` | A user task to create a [pipeline](pipelines)

---

#### Requests

- TOC
{: toc }

---

{% include {{page.components}}/view-all-running-or-completed-jobs-for-a-workspace.md %}
{% include {{page.components}}/view-all-running-or-completed-jobs-for-a-pipeline.md %}
{% include {{page.components}}/view-a-job.md %}
{% include {{page.components}}/view-the-logs-of-a-job.md %}
{% include {{page.components}}/create-a-job-from-a-pipeline.md %}
{% include {{page.components}}/stop-a-job.md %}
{% include {{page.components}}/delete-a-job.md %}
