---
layout: default
title: Creating A Data Import In Your Workspace
permalink: /getting-started/creating-a-data-import-in-your-workspace
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

In this guide, we will quickly go through the high-level steps of how to get a data import set up in your workspace. 

Each data source for a data import require different settings and configurations to work, and information about these specifics will be displayed on the right of your screen as you set up your data import.

---

## Set Up Steps

1. When in your workspace, click your profile image in the top-right of the screen, and select `Data Imports` from the drop down menu.
2. Click the `Import` button just below your profile image.
3. At the top in `Import name` add a name for your data import.
4. Then below that choose your data source. When you click on one you will see helpful documentation on the right side of your screen.
5. Click `Next`
6. In the first section `Data source settings`, fill in the required settings which are marked with a `*`.
7. In the second section `Clean, transform and organise`, decide if you want to use our default data import script but leaving `Default Actions` selected, or select `Advanced` and supply your own custom script.
8. In the third and last section `Automate your import`, you can choose how often your data import should run. There are a few example schedules or you can use `Custom` to create your own.
9. Click `Save`. A green bar will appear at the top of your screen telling you your data import was saved.
10. Head back to the `Data Imports` screen, where for the next 1 to 2 minutes a `config job` will be running on your data import. This will set everything up and commit your new data imports's changes to your workspace repository.
11. Once the `config job` has completed you are free to run your data import, or leave it to its schedule.
