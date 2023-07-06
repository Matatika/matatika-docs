---
title: Promoting Changes with DataOps
permalink: /how-to-guides/manage-workspaces/promoting-changes-with-dataops
parent: Manage Workspaces
grand_parent: How-To Guides
nav_order: 3

---

# {{page.title}}

*Time required: **10 minutes***

---

## Prerequisites
You must have already:

- Signed up for a Matatika account

---

## Introduction
DataOps is an [Agile](https://asana.com/resources/agile-methodology){:target="_blank"} approach to managing and improving the efficiency, quality and reliability of data within an organisation. Using environments and multiple workspaces, it is possible to implement a development-to-production DataOps workflow for a project.

## Promoting changes between workspaces
1. Create a workspace for development (e.g. `My Workspace (dev)`)
    1. Open the drop-down menu
    1. Select `New workspace`
    1. Provide a workspace name in the `Name *` field
    1. Click `Save`
1. Create another workspace for staging (e.g. `My Workspace (staging)`)
1. Set the staging workspace active environment to `staging` in workspace settings
    1. Open the drop-down menu
    1. Select `Settings`
    1. Provide the name of the active environment in the `Active environment` field
    1. Click `Save`
1. Create another workspace for production (e.g. `My Workspace`)
1. Set the production workspace active environment to `prod`
1. Make changes and test in the development workspace
1. When ready, merge changes from the development workspace into the staging workspace (the repository URL for each workspace can be found in workspace settings)
    ```sh
    git clone git@github.com:MatatikaBytes/My-Workspace-staging-kklcdol
    cd My-Workspace-staging-kklcdol

    git remote add dev git@github.com:MatatikaBytes/My-Workspace-dev-zgtzhjd
    git pull -X theirs --allow-unrelated-histories dev main

    # ensure everything is correct before pushing
    git push
    ```
1. When ready, merge changes from the staging workspace into the production workspace
    ```sh
    git clone git@github.com:MatatikaBytes/My-Workspace-setarqi
    cd My-Workspace-setarqi

    git remote add staging git@github.com:MatatikaBytes/My-Workspace-staging-kklcdol
    git pull -X theirs --allow-unrelated-histories staging main

    # ensure everything is correct before pushing
    git push
    ```

---
