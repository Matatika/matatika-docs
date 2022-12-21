---
title: Create a Custom Pipeline
permalink: /how-to-guides/automate-data/create-a-custom-pipeline
parent: Automate Data
grand_parent: How-To Guides
nav_order: 1
---

# {{page.title}}

- Time required: _5 minutes_

---

## Prerequisites

You must have already:

- Signed up for a Matatika account
- Created a workspace through the [Matatika app]({{site.matatika.links.app}}) or API

---

## Introduction

In this how-to guide, we will go through the steps of creating a custom pipeline. 

With a custom pipeline you are in complete control of all the plugins being run and in what order. We use custom pipeline to run reports, send emails and even some to just run tests.

---

### Set Up Steps

1. In your workspace, go to the Lab, then the Pipelines page.
2. Click the `+ PIPELINE` button in the top right of the page.
3. Fill in the name field then click the empty square with the plus sign.
4. Find the plugin you want to add in either the `EXISTING` or `NEW` tabs.
- You will need to install the plugins you want to use, find out how here: [Adding A Plugin To Your Workspace]({{site.baseurl}}/how-to-guides/import-data/adding-a-plugin-to-your-workspace){:target="_blank"}
5. Repeat step 4 adding as many plugins as you want.
6. Expand the `Settings` menu and then each of the plugins you have added.
7. Fill in at least all the required `*` settings for each plugin.
8. In the second section `Clean, transform and organise`, decide if you want to use our default data import script by leaving `Default Actions` selected, or supply your own custom actions or script.
9. In the third and last section `Automate your import`, you can choose how often your data import should run. There are a few example schedules or you can use `Custom` to create your own.
10. Click `Save`. A green bar will appear at the top of your screen telling you your data import was saved.
11. Head back to the `Pipelines` screen, where for the next 1 to 2 minutes a `config job` will be running on your data import. This will set everything up and commit your new data imports's changes to your workspace repository.
12. Once the `config job` has completed you are free to run your data import, or leave it to its schedule.

---

## Import Pipelines

When using data sources in your pipeline you can create a type of pipeline called an import pipeline. By using an import pipeline Matatika will automatically add the Matatika supported plugins for that data source. These include pre build data models and [datasets]({{site.baseurl}}/glossary#dataset) that you can see in your app. 

Find out how to create a import pipeline here: [Create a Data Import Pipeline]({{site.baseurl}}/how-to-guides/import-data/create-a-data-import-pipeline)
