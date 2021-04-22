---
layout: default
title: Jobs
permalink: /resources/jobs
parent: Resources
nav_order: 13
components: request-md-components/jobs
---

# {{page.title}}

A job is an executing instance of a [pipeline](pipelines) that carries out the [ELT](https://en.wikipedia.org/wiki/Extract,_load,_transform) process for the configured [datasource](datasources). Jobs can be run manually or on a defined schedule, to inject data into a workspace either instantly or periodically. Only a single job can be run at a time for a given pipeline.
{: .fs-5 }

---

## Objects
{: .no_toc}

### Job

Path | Type | Format | Description
---- | ---- | ----------- | -----
`id` | `String` | Version 4 UUID | The subscription ID
`exitCode` | `Integer` | Process exit status | The job task exit code
`startTime` | `String` | ISO 8601 timestamp | Timestamp denoting when the job run started
`endTime` | `String` | ISO 8601 timestamp | Timestamp denoting when the job run ended
`status` | `String` | [Status](#status) | The job status
`taskName` | `String` | | The job task name (`null` unless header `enable-task-details true` is provided)
`exitMessage` | `String` | | The job task exit message (`null` unless header `enable-task-details true` is provided)
`arguments` | `Array` of `String` | | The job arguments (`null` unless header `enable-task-details true` is provided)
`errorMessage` | `String` | | The job error message (`null` unless header `enable-task-details true` is provided)

{% include snippets/api/jobs/view-a-job/response-body.md %}

## Formats
{: .no_toc}

### Status
{: .d-inline-block }

`String`
{: .float-right .mt-5 }

Value | Description
----- | -----------
`RUNNING` | Job is running
`COMPLETE` | Job finished with no errors
`ERROR` | Job finished with errors
`UNKNOWN` | Job status is unknown

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
