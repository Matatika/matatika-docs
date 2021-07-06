---
layout: default
title: Jobs
permalink: /api/resources/jobs
parent: Resources
grand_parent: API
nav_order: 13
components: request-md-components/jobs
---

# {{page.title}}

A job is an executing instance of a [pipeline](pipelines) that carries out the [ELT](https://en.wikipedia.org/wiki/Extract,_load,_transform) process for the configured [dataplugin](dataplugins). Jobs can be run manually or on a defined schedule, to inject data into a workspace either instantly or periodically. Only a single job can be run at a time for a given pipeline.
{: .fs-5 }

---

## Objects
{: .no_toc}

### Job

Path | Type | Format | Description
---- | ---- | ------ | -----------
`id` | `String` | Version 4 UUID | The job ID
`created` | `String` | ISO 8601 timestamp | The instant at which the job was created
`type` | `String` | [Job Type](#job-type)
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
`STOPPED` | The job was manually stopped or timed out

### Job Type
{: .d-inline-block }

`String`
{: .float-right .mt-5 }

Value | Description
----- | -----------
`WORKSPACE_INIT` | A workspace initialisation job
`PIPELINE_CONFIG` | A pipeline configuration job
`PIPELINE_ENV` | A pipeline environment job
`PIPELINE_RUN` | A pipeline run job

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
{% include {{page.components}}/delete-a-job.md %}
