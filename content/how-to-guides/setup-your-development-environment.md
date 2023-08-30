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
At its core, a workspace is a [Meltano](https://meltano.com/){:target="_blank"}
 project. Once the workspace repository has been cloned locally, `meltano` commands can be run against the project as normal - for example, to add configuration to the `meltano.yml` or run a pipeline manually with `meltano run`. Any local changes can then be committed and pushed back to the remote repository, where they will be picked up deployed to the workspace in the Matatika platform.

> See [how to manage workspace configuration from GitHub]({{site.baseurl}}/how-to-guides/manage-workspaces/managing-config-from-github) for more information

## Community Edition
The workspace repository also contains deployable Matatika [Data Management Language (DataML)]({{site.baseurl}}/dataml) artifacts. The Matatika Community Edition (CE) can be used to run an instance of the Matatika platform and test changes to workspace DataML artifacts locally.

> See the [CE getting started guide]({{site.baseurl}}/getting-started/community-edition) for more information

### VS Code
Using VS Code, you can run the CE as a set of dev containers:

1. Clone the CE repository and open in VS Code
1. Click "Reopen in Container" in reply to the "Folder contains a Dev Container configuration file. Reopen folder to develop in a container (learn more)." pop-up

    > Alternatively, you can click the "Open a Remote Window" button on the bottom-left and select "Reopen in Container" from the command palette drop-down

Once the container development environment has been initialised, VS Code will be mounted at the `workspaces` directory. You can clone, make changes, commit and push to any workspace within VS Code.
