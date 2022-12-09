---
title: Managing Config From GitHub
permalink: /how-to-guides/workspace/managing-config-from-github
parent: Workspaces
grand_parent: Tutorials
nav_order: 1

---

# {{page.title}}

- Time required: _5 minutes_

---

## Prerequisites

You must have:

- Admin or owner rights of the [workspace]({{site.baseurl}}/glossary#workspace) you want to use.
- Admin rights for your workspace GitHub repository available through a Matatika premium plan

---

## Introduction

Matatika can support a full DataOps lifecycle where all of your [configuration]({{site.baseurl}}/dataml) is managed through your workspace GitHub repository. To deploy your configuration you can use our [deployments]({{site.baseurl}}/api/resources/deployments) API or configure a GitHub Webhook.

A deployment will update your workspace in the Matatika cloud with your version controlled configuration from your GitHub repository. Creating a stable change management and release process for your workspaces.

In this guide we will show you the steps to set up a GitHub Webhook where each push to your repository will trigger a deployment. To manually deploy your workspace, we recommend you use our [postman collection]({{site.baseurl}}/api/postman-collection) or you can find our API documentation on [deployments]({{site.baseurl}}/api/resources/deployments).

---

## Creating the GitHub Web Hook

1. Go to your workspace settings screen.
2. Go to your Workspace's repository on GitHub.
3. Go to your GitHub repositories `Settings` > `Webhooks` > `Add webhook`
4. Your `Payload URL` will be `{{site.matatika.links.catalog}}/workspaces/<workspace_id>/deployments/github-webhook`
You can get your `<workspace_id>` by going to your workspace and finding the UUID in the URL.
5. Set the Content Type to `application/json`
6. Your Secret is the Deployment Secret from your workspace settings page.
7. Finally click the `Add webhook` button at the bottom

Now whenever you push to your Workspace's repository, any changes made will be deployed automatically to your workspace.

---

## Deployment resources

- [Deployments API Documentation]({{site.baseurl}}/api/resources/deployments)
