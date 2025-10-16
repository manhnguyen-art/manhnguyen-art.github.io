---
layout: default
title: "Lưu trữ"
lang: vi
permalink: /vi/archive/
---
<section class="page">
  <h1>Archive</h1>
  <ul>
    {% assign posts = site.vi | sort: "date" | reverse %}
    {% for post in site.posts %}
      <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> — <span class="muted">{{ post.date | date: "%b %d, %Y" }}</span></li>
    {% endfor %}
  </ul>
</section>
