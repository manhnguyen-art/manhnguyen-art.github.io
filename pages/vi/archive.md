---
layout: default
lang: vi
title: "Lưu trữ"
permalink: /vi/archive/
alt_url: /en/archive/
---
# Lưu trữ (VI)

<ul>
{% assign posts = site.vi | sort: "date" | reverse %}
{% for post in posts %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <small>— {{ post.date | date: "%Y-%m-%d" }}</small>
  </li>
{% endfor %}
</ul>
