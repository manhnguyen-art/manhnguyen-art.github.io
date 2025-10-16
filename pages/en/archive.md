---
layout: default
lang: en
title: "Archive"
permalink: /en/archive/
alt_url: /vi/archive/
---
# Archive (EN)

<ul>
{% assign posts = site.en | sort: "date" | reverse %}
{% for post in posts %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <small>— {{ post.date | date: "%Y-%m-%d" }}</small>
  </li>
{% endfor %}
</ul>
