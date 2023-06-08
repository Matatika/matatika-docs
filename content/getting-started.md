---
title: Getting Started
description: Guides for getting started with Matatika cloud, community edition, and Meltano projects.
permalink: /getting-started/
nav_order: 3
has_children: yes
has_toc: false

---

# {{page.title}}

---

<div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 2rem;">
    <div style="display: flex; width: 400px; padding: 50px; border-radius: 10px; border: 2px solid orange;  justify-content: space-between; flex-direction: column; cursor: pointer;" onclick="location.href='{{site.baseurl}}/getting-started/cloud'">
      <div style="width: auto; padding-right: 15px;">
        <p style="font-size: 20px; font-weight: bold;">Cloud</p>
        Matatika cloud data platform
        <ul>
          <li>Hosted in Matatika Azure Cloud</li>
          <li>Hosted PostgreSQL database</li>
          <li>(Or your cloud data warehouse)</li>
          <li>GitHub workspace source</li>
        </ul>
      </div>
      <button style="background-color: orange; border-radius: 4px; border: 1px solid orange; font-size: 15px; color: white; width: 130px; cursor: pointer;" type="button" onclick="location.href='{{site.baseurl}}/getting-started/cloud'">GET STARTED</button>
    </div>
      <div style="display: flex; width: 400px; padding: 50px; border-radius: 10px; border: 2px solid grey; justify-content: space-between; flex-direction: column; cursor: pointer;" onclick="location.href='{{site.baseurl}}/getting-started/community-edition'">
        <div style="width: auto; padding-right: 15px;">
          <p style="font-size: 20px; font-weight: bold;">Community Edition</p>
          Run Matatika where you want
          <ul>
            <li>Local development</li>
            <li>Local PostgreSQL database</li>
            <li>Local Workspaces</li>
          </ul>
        </div>
        <button style="background-color: orange; border-radius: 4px; border: 1px solid orange; font-size: 15px; color: white; width: 130px; cursor: pointer;" type="button" onclick="location.href='{{site.baseurl}}/getting-started/community-edition'">GET STARTED</button>
    </div>

    <div>
        <a href="{{site.baseurl}}/getting-started/meltano" style="color: orange;">Check out our utility for Meltano users</a>
    </div>
</div>