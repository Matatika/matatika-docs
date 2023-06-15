---
title: Prerequisites
permalink: /instant-insights/tap-github/prerequisites
parent: GitHub
grand_parent: Instant Insights
nav_order: 1

---

# GitHub {{page.title}}

---

## Requirements

There are two settings that you are required to provide to use our Github data source. These are your Personal Access Token and you chosen Repositories


### Personal Access Token

To start with you will need to follow the instructions in the [Creating a Personal Access Token Docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). This will take you through creating and scoping a Classic Personal Access Token for our data source to use to get your information.

You will need to allow the required scopes to allow us to access your data. For example if you want to get information about a private repository you will need to grant that scope when you create your Personal Access Token.

### Repositories

This setting requires one or more repositories in the following format of an array of strings.

Example: `["Matatika/matatika-ce"]` or `["Matatika/matatika-ce", "Matatika/matatika-docs"]`
