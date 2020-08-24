---
layout: default
title: Workspaces
permalink: /endpoints/workspaces
parent: Endpoints
nav_order: 2
components: request-md-components/workspaces
---

# {{page.title}}
{: .no_toc }

Workspaces allow users to operate within isolated instances of the Matatika service. This is useful for seperating profiles based on the data they require access to.
{: .fs-5 }

---

#### Requests
{: .no_toc }

- TOC
{: toc }

---

{% include {{page.components}}/view-all-ws.md %}
{% include {{page.components}}/view-ws.md %}
{% include {{page.components}}/initialise-ws.md %}
{% include {{page.components}}/create-update-ws.md %}
{% include {{page.components}}/delete-ws.md %}
{% include {{page.components}}/view-ws-members.md %}
{% include {{page.components}}/view-ws-member.md %}
{% include {{page.components}}/view-ws-invitations.md %}
{% include {{page.components}}/create-ws-invitation.md %}
{% include {{page.components}}/cancel-ws-invitation.md %}
{% include {{page.components}}/view-ws-channels.md %}
{% include {{page.components}}/view-ws-datasets.md %}
{% include {{page.components}}/view-ws-datasets-by-channel-id.md %}
{% include {{page.components}}/view-ws-datasets-by-channel-name.md %}
{% include {{page.components}}/publish-ws-dataset.md %}
