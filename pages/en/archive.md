---
layout: default
title: "Archive"
lang: en
permalink: /en/archive/
---
<section class="page">
  <h1>Archive</h1>
  <ul>
    {% assign posts = site.en | sort: "date" | reverse %}
    {% for post in site.posts %}
      <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> — <span class="muted">{{ post.date | date: "%b %d, %Y" }}</span></li>
    {% endfor %}
  </ul>
</section>
