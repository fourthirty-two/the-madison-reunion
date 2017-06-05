---
layout: page
title: "Eventss"
---
<div class="grid-items">
  <div id="gallery1">
    {% for events in site.june-14 %}
    <h1>{{ events.time }}</h1>
      <div class="grid-item">


          Location:{{events.Room-A }}


      </div>
      <p>hi</p>
    {% endfor %}
  </div>
</div>
