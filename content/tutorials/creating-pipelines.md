---
title: Creating Pipelines
permalink: /tutorials/creating-pipelines/
parent: Tutorials
nav_order: 1

---

# {{page.title}}

---

## Requirements

You will need to be an admin of the [workspace]({{site.baseurl}}/glossary#workspace) you want to add a pipeline to.

## Creating a Data Source (Import) pipeline

Creating a [pipeline]({{site.baseurl}}/glossary#pipeline) using a [Data Source]({{site.baseurl}}/data-sources) plugin, or by creating an Import pipeline will automatically add the Matatika supported plugins for that Data Source. These include pre build data models and [datasets]({{site.baseurl}}/glossary#dataset) that you can see in your app.

1. Go to the `lab` > `Plugins` page > `AVAILABLE` tab.
1. Find or search for any Data Source, click `INSTALL`.
1. On the `INSTALLED` tab, find your data source then click `+ Pipeline`
1. You will now be in the pipeline edit screen
1. Under `Settings` you can find the Data Plugin settings required for the pipeline
1. Click `SAVE` or the drop down and `Save as draft` if you have not filled in all required settings. (You are required to fill in these setting before being able to run the pipeline)
1. Click `Pipelines` in the menu, let the config job complete (automatically runs after save), then you can run your pipeline.

---

## Creating a Custom Pipeline

Creating a [pipeline]({{site.baseurl}}/glossary#pipeline) this way gives you complete control over what other Data Plugins are included.

1. Go to the `lab` > `Plugins` page > `AVAILABLE` tab
1. Find or search for your chosen Data Plugin and click `INSTALL`
1. Go the the `Pipelines` page and click `+ PIPELINE`
1. Give your pipeline a name, click the empty square with the `+` icon
1. In the Component menu, go to the `NEW` tab, find your chosen plugin and click `ADD`
1. Under `Settings` you can find the Data Plugin settings required for the pipeline
1. Click `SAVE` or the drop down and `Save as draft` if you have not filled in all required settings. (You are required to fill in these setting before being able to run the pipeline)
1. Click `Pipelines` in the menu, let the config job complete (automatically runs after save), then you can run your pipeline.

---

## Getting Started Guide

- [Creating a Data Import pipeline in your Workspace]({{site.baseurl}}/getting-started/creating-a-data-import-in-your-workspace)