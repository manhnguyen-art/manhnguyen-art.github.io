<section class="hero">
    <h1>Chia sẻ những điều không thể được tìm thấy theo cách thông thường</h1>
    <p class="muted">Góc nhìn khoa học kết hợp với chủ nghĩa kinh nghiệm</p>
</section>

<section class="posts">
  <h2>Latest Posts</h2>
  <div class="cards">
    {%- for post in site.posts limit:12 -%}
    <article class="card">
      <a class="card__link" href="{{ post.url | relative_url }}">
        <h3 class="card__title">{{ post.title }}</h3>
        <p class="card__meta">{{ post.date | date: "%b %d, %Y" }} • {{ post.category | default: "note" }}</p>
        <p class="card__excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</p>
      </a>
    </article>
    {%- endfor -%}
  </div>
  <p class="more"><a href="{{ '/pages/archive/' | relative_url }}">View all →</a></p>
</section>
