<script lang="ts">
  import Counter from '../components/Counter.svelte'
  import TopNav from '../components/TopNav.svelte'
</script>

<main>
  <TopNav />

  <h1>Welcome to</h1>
  <h1>Sr. JS Dev</h1>

  Hi 👋!<br/>
  <a href="https://srjs.dev" target="_blank" rel="noreferrer">
    <img
      src="/mug-small-transparent-rounded.webp"
      class="mug-shot svelte" alt="author mug-shot"
    />
  </a>

  <section class="top-intro code">
      <h2>Who Am I?</h2>
      I'm an online educator,<br/>
      mentor,<br/>
      and consultant--<br/>
      teaching practical,<br/>
      advanced topics<br/>
      to people like you on<br/>
      how to write:<br/>
      ✅ maintainable JS code<br/>
      ✅ scalable web apps<br/>
      ...yup that's about it! 🎤⤵<br/>
  </section>

  <div class="card">
    <Counter />
  </div>

  <p class="read-the-docs">
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>!
  </p>
</main>

<style>
  section.top-intro {
      max-width: 50vw;
      margin: 0 auto;
      text-align: right;
  }
  .mug-shot {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: .5s all;
  }
  .mug-shot:hover {
    filter: drop-shadow(0 0 2em #ddd);
    transform: scale(1.2);
  }
  .read-the-docs {
    color: #888;
  }
</style>
