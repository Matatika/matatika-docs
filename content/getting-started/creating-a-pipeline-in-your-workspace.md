---
layout: default
title: Creating A Pipeline In Your Workspace
permalink: /getting-started/creating-a-pipeline-in-your-workspace
parent: Getting Started
nav_order: 9
---

# {{page.title}}

- Time required: *5 minutes*

---

## Prerequisites

You must have:
- Access to a workspace.
- Admin permissions for that workspace.

---

## Introduction

In this guide, we will quickly go through the high-level steps of how to get a pipeline set up in your workspace. 

Each datasource for the pipelines require different settings and configurations to work, and information about these specifics will be displayed on the right of your screen as you set up your pipeline.

---

## Set Up Steps

1. When in your workspace, click your profile image in the top-right of the screen, and select `Datasources` from the drop down menu.
2. Click the `Add Data` button just below your profile image.
3. At the top in `Import name` add a name for your pipeline.
4. Then below that choose your datasource. When you click on one you will see helpful documentation on the right side of your screen.
5. Click `Next`
6. In the first section `Data source settings`, fill in the required settings which are marked with a `*`.
7. In the second section `Clean, transform and organise`, decide if you want to use our default pipeline script but leaving `Default Actions` selected, or select `Advanced` and supply your own custom pipeline script.
8. In the third and last section `Automate your import`, you can choose how often your pipeline should run. There are a few example schedules or you can use `Custom` to create your own.
9. Click `Save`. A green bar will appear at the top of your screen telling you your pipeline was Saved.
10. Head back to the `Datasources` screen, where for the next 1 to 2 minutes a `config job` will be running on your pipeline. This will set everything up and commit your new pipeline's changes to your workspace repository.
11. Once the `config job` has completed you are free to run your pipeline, or leave it to its schedule.
