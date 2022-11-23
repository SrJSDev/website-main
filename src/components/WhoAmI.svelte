<section class="font-code hidden">
  <div class="text">
    <h2>Who Am I?</h2>
    <h2>A full-stack web developer<br />with 15+ years of industry experience.</h2>
    An online educator,<br />
    mentor,<br />
    and consultant-<br />
    teaching practical,<br />
    advanced topics<br />
    to developers<br />
    (like you!)
  </div>
  <div>
    <img
      src="/mug-ovals1.webp"
      class="mug-shot svelte"
      alt="author mug-shot"
    />
  </div>
</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
  }
  section > * {
    flex: 1;
    flex-grow: 1;
    display: inline;
    min-width: 200px;
  }

  .text {
    text-align: right;
  }

  .mug-shot {
    cursor: pointer;
    max-width: 100%;
    padding: 1.5em;
    will-change: filter;
    transition: 0.3s all;
  }
  .mug-shot:hover {
    filter: drop-shadow(0 0 2em #ddd);
    transform: scale(1.1);
  }
</style>