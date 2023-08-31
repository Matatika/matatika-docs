---
title: Setup your Development Environment
permalink: /how-to-guides/setup-your-development-environment
parent: How-To Guides
---

# {{page.title}}

*Time required: **10 minutes***

---

## Prerequisites
- [`git`](https://github.com/git-guides/install-git){:target="_blank"} or [GitHub Desktop](https://desktop.github.com/){:target="_blank"}

---

## Introduction
Within an organisation, it is necessary to manage the importing and transforming of data into analytics-ready models, as well as the collaboration on code artifacts (e.g. sources, pipelines, models, datasets). To manage these changes safely, teams need to develop and test changes in an isolated development environment.

A Matatika [workspace]({{site.baseurl}}/glossary#workspace) manages the configuration of your project for a specific environment, and project code is committed to a Git repository with full version control. Keeping these concepts separate means that we can have environments for different tasks - whether that's development, testing, or the most stable - production. This leads to a very portable and simple way to develop and debug - you can run our entire platform on your local machine with the Matatika Community Edition (CE), using Docker Compose or inside VS Code, or even in just a simple Python virtual environment.

## Meltano
A Matatika workspace project can be treated as a standalone Meltano project. Once the workspace repository has been cloned locally, `meltano` commands can be run against the project as normal - for example, to add configuration to the `meltano.yml` or run a pipeline manually with `meltano run`. Any local changes can then be committed and pushed back to the remote repository, where they will be picked up deployed to the workspace in the Matatika platform.

> See [how to manage workspace configuration from GitHub]({{site.baseurl}}/how-to-guides/manage-workspaces/managing-config-from-github) for more information

## Community Edition
The workspace repository contains deployable Matatika entities defined as [Data Management Language (DataML)]({{site.baseurl}}/dataml) artifacts. Additionally, a workspace natively understands and interprets Meltano plugin `.lock` files and `meltano.yml` schedules, jobs, plugins and configuration as Matatika entities. The Matatika CE can be used to run an instance of the Matatika platform and test changes to workspace entities and DataML artifacts outside of Matatika Cloud.

> See the [Matatika CE getting started guide]({{site.baseurl}}/getting-started/community-edition) for more information

### VS Code
Using VS Code, the Matatika CE can be run as a set of dev containers (instead of directly through Docker Compose):

1. Clone the Matatika CE repository and open in VS Code
1. Click "Reopen in Container" in reply to the "Folder contains a Dev Container configuration file. Reopen folder to develop in a container (learn more)." pop-up

    > Alternatively, you can click the "Open a Remote Window" button on the bottom-left and select "Reopen in Container" from the command palette drop-down

Once the container development environment has been initialised, VS Code will be mounted at the `workspaces` directory. You can clone, make changes, commit and push to any workspace within VS Code.
