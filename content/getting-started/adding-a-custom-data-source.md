---
title: Adding a Custom Data Source
permalink: /getting-started/adding-a-custom-data-source
parent: Getting Started
nav_order: 10
---

# {{page.title}}

- Time required: _15 minutes_

---

## Prerequisites

You must have:

- Admin or owner rights of the [workspace]({{site.baseurl}}/glossary#workspace) you want to use.

---

## Introduction

We support custom [data sources]({{site.baseurl}}/glossary#data-source) being set and used in our [data imports]({{site.baseurl}}/glossary#data-import). You can add your custom data source along with any relevant plugins, like transforms or file bundles all at once.

In this example we will create a custom version of the data source `tap-spreadsheets-anywhere`. We already support this data source, so we will have to make changes to the discovery yaml file we use to create this custom data source. Alongside these changes we will also add a related analyze file bundle containing some [datasets]({{site.baseurl}}/data/data-visualisation/dataset-yaml), so you can immediately see your new custom data source's data.


---

## Adding Your Custom Data Source

We will be naming our "custom" `tap-spreadsheets-anywhere` [data source]({{site.baseurl}}/glossary#data-source) `tap-example-custom-data-source`.

To add this custom data source you first need to navigate to the pipelines screen:

- Click on the `Lab` button.
- Go to the `Pipelines` page.
- Click `+ Import`
- Select the `Custom` tab at the top and click `Connect` on the Custom option.
- In the pop up window you can select your discovery.yml file (can be any name, just need to be in the correct yaml format), or paste in your plugin definition.

For `tap-example-custom-data-source` we will be using:

```yaml
extractors:
  - name: tap-example-custom-data-source
    namespace: tap_example_custom_data_source
    pip_url: git+https://github.com/ets/tap-spreadsheets-anywhere.git
    executable: tap-spreadsheets-anywhere
    capabilities:
      - catalog
      - discover
      - state
    settings:
      - name: tables
        kind: array
files:
  - name: analyze-example-custom-data-source
    namespace: tap_example_custom_data_source
    update:
      analyze/datasets/tap-example-custom-data-source: true
    pip_url: git+https://github.com/Matatika/analyze-example-custom-data-source.git
```

We are including a analyze file bundle that contains Matatika [datasets]({{site.baseurl}}/data/data-visualisation/dataset-yaml) so we can see the data being extracted by the tap in [visualisations]({{site.baseurl}}/data/data-visualisation/charts). By adding this bundle and setting the same namespace we effectively tell our [data import]({{site.baseurl}}/glossary#data-import) that when you configure a `tap-example-custom-data-source` data import, you should also add this bundle.

- Click next and you will now be on a screen that expects the settings for your pipeline.
- Expand the `tap-example-custom-data-source` section.
- Our custom data source will require a Tables array, we will use:
```json
[{
  "path":"https://raw.githubusercontent.com/Matatika/matatika-examples/master/example_adding_a_custom_data_source",
  "name":"imdb_top_20_films",
  "pattern":"imdb_top_20_films.csv",
  "start_date":"2021-01-01T00:00:00Z",
  "key_properties":["rank"],
  "format":"csv" 
}]
```
- For this example we can leave `Section 2 - Clean, transform and organise` on `Default`.
- For this example we can leave `Section 3 - Automate your import` on `Manual`.
- Finally click save

Your new custom [data source]({{site.baseurl}}/glossary#data-source) will be added to your workspace repository, along with any other associated plugins, during a data import config job which when you go back to your data imports screen will be running immediately. This config job will also publish the analyze file bundle's [datasets]({{site.baseurl}}/data/data-visualisation/dataset-yaml) to your [workspace]({{site.baseurl}}/glossary#workspace).

Once the config job has completed, you can run your data import by pressing the start job button. (Solid Arrow).

When the data import job has completed, you will be able to see populated datasets in your workspace.

---

## Adding Your Own Custom Data Source

More resources for adding your own custom data source:

- [Matatika Technical Glossary](https://github.com/Matatika/matatika-examples/tree/master/matatika_technical_glossary#custom-data-source)
- [Matatika Data Imports Custom Scripts]({{site.baseurl}}/data/data-import/custom-scripts)
- [Matatika Examples of Custom Scripts](https://github.com/Matatika/matatika-examples/tree/master/example_data_import_scripts)
