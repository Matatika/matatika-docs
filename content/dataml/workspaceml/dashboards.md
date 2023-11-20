---
title: Dashboards
permalink: /dataml/workspaceml/dashboards/
nav_order: 6
parent: WorkspaceML
grand_parent: DataML
---

# {{page.title}}

---

Reference documentation for Dashboards in the Matatika app.
{: .fs-5 }

Dashboards allow you to design a layout for data and datasets in your workspace. They are fully customizable and will render custom `HTML` and `CSS` letting you format them as required.
{: .fs-5 }

---

You can create dashboards of your datasets in the Matataika app, by defining a few settings and then providing your dashboard content in your workspace's `workspace.yml` file.

### Example `workspace.yml`:

{% raw %}
```yaml
version: workspaces/v0.1
default_environment: dev
app_properties:
  WELCOME_DATASET_ALIAS: welcome
  DASHBOARD_PAGE_TITLE: Data Observability Dashboard
  DASHBOARD_CONTENT: |-
    <div style={{'display':'flex', 'padding-bottom': '30px', 'justify-content': 'center'}}>
        <div style={{'border-right': '2px solid #D3D3D3'}}>
            <h2>Test results breakdown</h2>
            <DatasetChart alias="data-observability/test-results-breakdown"/>
        </div>
        <div>
            <h2>Tables health</h2>
            <DatasetLink alias="data-observability/table-health-breakdown">
                <DatasetChart alias="data-observability/tables-health" />
            </DatasetLink>
        </div>
    </div>
  APP_MENU_ITEMS: |-
    [
      {"name": "dashboard", "faIcon": "chart-bar", "label": "Dashboard"},
      {"name": "explore", "faIcon": "hashtag", "label": "Explore"},
      {"name": "channels", "faIcon": "database", "label": "Channels"},
      {"name": "library", "faIcon": "list", "label": "Library"},
      {"name": "starred", "faIcon": "star", "label": "Starred"},
      {"name": "help", "faIcon": "question-circle", "label": "Help"}
    ]
default_data_store: Warehouse
dataset_paths:
  - analyze/datasets
  - .meltano/analyze/datasets
channel_paths:
  - analyze/channels
pipeline_paths:
  - pipelines
plugin_paths:
  - plugins
data_store_paths:
  - datastores
```
{% endraw %}

### Dashboard Settings

Note that these settings are nested under `app_properties`.

Setting | Description 
----------- | --------
`DASHBOARD_PAGE_TITLE` | Dashboard page title
`DASHBOARD_CONTENT` | Your dashboard content as HTML
`APP_MENU_ITEMS` | Currently you have to provide an override for all pages showing in the app, including your new dashboard page. 

A list of `faIcons` for your Dashboard can be found here: [FontAwesome Icons v5](https://fontawesome.com/v5/search). You can use any free icons as your dashboard icon, or to change the icon of an existing page.

### Dashboard Components

Component | Description 
----------- | --------
`DatasetChart` | Allows you to choose any dataset in your workspace by its alias, and render it on your dashboard.
`DatasetLink` | Wraps elements or text and create an internal, (no page reload), link to a dataset in your workspace.
`Back` | Renders a back button.

