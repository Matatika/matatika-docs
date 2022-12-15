---
title: Creating A Data Import In Your Workspace
permalink: /how-to-guides/import-data/creating-a-data-import-in-your-workspace
parent: Import Data
grand_parent: How-To Guides
nav_order: 2
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

In this guide, we will quickly go through the high-level steps of how to get a data import set up in your workspace. 

Each data source for a data import require different settings and configurations to work, and information about these specifics will be displayed on the right of your screen as you set up your data import.

---

## Set Up Steps

1. When in your workspace, click the `Lab` button on the menu, select `Plugins` from the menu and go the the `AVAILABLE` tab.
2. Find or search for the [data source](data-sources){:target="_blank"} you want and click the `INSTALL` button. You will be moved to the `INSTALLED` tab.
3. Click the `+ PIPELINE` button next to the your chosen data source plugin.
4. At the top in `Name` you can add a custom name for your pipeline.
5. Expand the settings menu(s) and fill in at least all the required settings which are marked with a `*` or `Connect to Google`.
6. In the second section `Clean, transform and organise`, decide if you want to use our default data import script by leaving `Default Actions` selected, or supply your own custom actions or script.
7. In the third and last section `Automate your import`, you can choose how often your data import should run. There are a few example schedules or you can use `Custom` to create your own.
8. Click `Save`. A green bar will appear at the top of your screen telling you your data import was saved.
9. Head back to the `Pipelines` screen, where for the next 1 to 2 minutes a `config job` will be running on your data import. This will set everything up and commit your new data imports's changes to your workspace repository.
10. Once the `config job` has completed you are free to run your data import, or leave it to its schedule.
