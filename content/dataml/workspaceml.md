---
title: WorkspacesML
permalink: /dataml/workspacesml/
nav_order: 4
parent: DataML
---

# {{page.title}}

---

Reference documentation for the workspace configuration file.
{: .fs-5 }

Use the Matatika workspace YAML to configure your workspace as code.
{: .fs-5 }

The workspace file is stored in YAML file format, you can read more about the YAML format and its syntax [here](https://yaml.org/){:target="_blank"}.
{: .fs-5 }

---

### Example: `workspace.yml`

```yaml
version: workspaces/v0.1
name: My Workspace Name
image_url: http://www.example.com/pepsi.jpg
dataset_paths:
  - analyze/datasets
channel_paths:
  - analyze/channels
pipeline_paths:
  - pipelines
plugin_paths:
  - plugins
app_properties:
  WELCOME_DATASET_ALIAS: analyze/datasets/welcome
  WELCOME_MESSAGE: Welcome to the workspace
  FEED_VIEW_DEFAULT: listView
  DATASET_WATCH_ALERTS_ALT_TEXT: Select to receive summary of dataset updates
  DATASET_WATCH_ALL_ACTIVITY_ALT_TEXT: Select to receive updates and discussion from this dataset
  DATASET_ASSISTANT_TAB_ALERTS_ALT_TEXT: Updates
  DATASET_ASSISTANT_NO_ALERTS_ALT_TEXT: No updates
  NEWS_DATASET_ALERT_ALT_TEXT: Update
  HELP_DATASET_ALIAS: analyze/datasets/more_information
  TOOLBAR_SEARCH_ALT_TEXT: Search all datasets...
  HOME_PAGE: news
  MENU_ITEM_HOME_ALT_TEXT: My Updates
  MENU_ITEM_CHANNELS_ALT_TEXT: Lists
  MENU_ITEM_HELP_ALT_TEXT: More Information
  HELP_CUSTOM_FA_MENU_ICON: acorn
  ALERTS_HELP_TEXT: Watch for alerts or all activity.
  DISCUSSION_HELP_TEXT: Talk about this dataset!
  RELATED_HELP_TEXT: Datasets related to this one.
  DATASET_VIEW_TAB_ORDER: alerts, discussion, related
```

### Key Information

Key               | Datatype | Information
----------------- | -------- | -----------
`version`         | `String` | The version identifies this artifact type.
`name `           | `String` | Name of your workspace. 
`image_url`       | `String` | The Meltano tasks that will be run.
`dataset_paths`   | `Array`  | Paths for your workspace to deploy datasets from.
`channel_paths`   | `Array`  | Paths for your workspace to deploy channels from.
`pipeline_paths`  | `Array`  | Paths for your workspace to deploy pipelines from.
`plugin_paths`    | `Array`  | Paths for your workspace to deploy plugins from.
`app_properties`  | `Map`    | A map of optional properties to customize your workspace. (See the example above).

---

Further Reading: 

- [API Workspaces]({{site.baseurl}}/api/resources/workspaces)
