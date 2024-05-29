---
title: PipelineML
permalink: /dataml/pipelineml/
nav_order: 3
parent: DataML
has_children: true
---

# {{page.title}}

---

Reference documentation for orchestration actions that import and process data.
{: .fs-5 }

Use the Matatika pipeline YAML to orchestrate data actions in your workspace as code.
{: .fs-5 }

Pipeline definitions are stored as YAML file format, you can read more about the YAML format and its syntax [here](https://yaml.org/){:target="_blank"}.
{: .fs-5 }

---

### Example: `pipelines/report_pipeline.yml`

```yaml
version: pipelines/v0.1
data_components:
- notebook
- sendgrid
actions:
- notebook:run-convert
- sendgrid:send
properties:
  notebook.path: notebook/data_quality_report.ipynb
timeout: 1500
schedule: 0 0 0 * * 0
triggered_by:
- other-pipelines
- deploy
```

### Key Information

Key               | Datatype  | Information
----------------- | --------- | -----------
`version`         | `String`  | The version identifies this artifact type.
`data_components` | `Array`   | The meltano.yml data component name.
`actions`         | `Array`   | The Meltano tasks that will be run as defined in your meltano.yml or Plugins.
`inline_script`   | `String`  | Custom [Bash](https://www.gnu.org/software/bash/) script.  Overrides actions if supplied.
`timeout`         | `Integer` | A timeout value in seconds that prevents pipelines from running for too long. A pipeline running longer that the timeout setting is automatically stopped by Matatika.
`properties`      | `Map`     | A map of properties, with Data Component name and setting as the key and the value e.g. `data-component-name.setting=value`, that configures the pipeline environment.
`schedule`        | `String`  | The automated schedule for this pipeline, in a standard cron format with seconds.  `0 0 9-17 * * MON-FRI` on the hour nine-to-five weekdays.
`triggered_by`    | `Array` of `String` | Pipelines or workspace tasks that will trigger the pipeline on successful completion.<br>Supported values for workspace tasks (case-insensitive):{::nomarkdown}<ul><li>{:/nomarkdown}`deploy` - workspace [deployment]({{site.baseurl}}/api/resources/deployments){::nomarkdown}</li></ul>{:/nomarkdown}

---

Further Reading: 

- [API Pipelines]({{site.baseurl}}/api/resources/pipelines)
