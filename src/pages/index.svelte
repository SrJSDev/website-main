<script lang="ts">
	import { onMount } from 'svelte';

  import Counter from "../components/Counter.svelte";
  import TopNav from "../components/TopNav.svelte";

  import animate from "../libs/animate";

  onMount(() => {
      // animate(".read-the-docs");
      animate('.hidden');
  })
</script>

<main>
  <TopNav />

  <h1>Hello {'{world}'}!<br />👋</h1>

  <section class="top-intro font-code hidden">
    <div class="text">
      <h2>Who Am I?</h2>
      With 15+ years of dev experience<br />
      I'm an online educator,<br />
      mentor,<br />
      and consultant--<br />
      teaching practical,<br />
      advanced topics<br />
      to developers like you on<br />
      how to write:<br />
      ✅ maintainable JS code<br />
      ✅ scalable web apps<br />
      ...yup that's about it! 🎤⤵<br />
    </div>
    <div>
      <img
        src="/mug-ovals1.webp"
        class="mug-shot svelte"
        alt="author mug-shot"
      />
    </div>
  </section>

  <div class="card">
    <Counter label="Visitors" />
  </div>

  <p class="read-the-docs hidden">
    Check out <a
      href="https://hashnode.com/@srjsdev"
      target="_blank"
      rel="noreferrer">Hashnode</a
    > blog posts!
  </p>
</main>

<style>
  section.top-intro {
    display: flex;

  }
  section.top-intro div {
    flex: 1;
  }
  section.top-intro .text {
    max-width: 50vw;
    margin: 0 auto;
    text-align: right;
    transform: translateX(-25%);
  }
  .mug-shot {
    height: 20em;
    padding: 1.5em;
    will-change: filter;
    transition: 0.3s all;
  }
  .mug-shot:hover {
    filter: drop-shadow(0 0 2em #ddd);
    transform: scale(1.1);
  }
  .read-the-docs {
    color: #888;
  }
</style>
