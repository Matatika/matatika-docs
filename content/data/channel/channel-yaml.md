---
layout: default
title: Channel YAML
permalink: /data/channel/channel-yaml
parent: Channel
grand_parent: Data
nav_order: 1
---

# {{page.title}}

---

The Matatika channel file is a way to create channels in your workspace. These channels can be used to "group up" related datasets.
{: .fs-5 }

Our channel files are stored as YAML files, you can read more about the YAML format and its syntax [here](https://yaml.org/).
{: .fs-5 }

---

### Channel YAML Layout

```yaml
version: channels/v0.1
name: <channel_alias>
description: <channel_description>
image: <channel_image>
```

### Channel YAML Example

```yaml
version: channels/v0.1
name: Google Analytics
description: Google Analytics
picture: https://www.matatika.com/wp-content/uploads/2020/03/google_analytics-icon.svg
```

### Channel Key Information

Channel Key | Datatype |  Information
----------- | -------- | -----------
`version` | `String` | The version determines how the CLI handles publishing the channel. 
`name` | `String`  | Alias of your channel. Unique to the workspace, used for updating and verify channel updates.
`description` | `String` | Text displayed in the Matatika platform below the channel icon.
`image` | `String` | An image url or local reference for your channel icon. If left empty, will use the icon of the user who created the channel.

## String Formatting

You may use any of the following string formats:
```yaml
description: My Channel

description: 'My Channel'

description: "My Channel"

description: |-
    My Channel
    Multi-line string, remember to indent
```

---

Further Reading: 

- [Glossary Channels]({{site.baseurl}}/glossary#channel)
- [API Channels]({{site.baseurl}}/api/resources/channels)