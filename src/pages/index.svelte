<script lang="ts">
	import { onMount } from 'svelte';

  import Counter from "../components/Counter.svelte";
  import TopNav from "../components/TopNav.svelte";
  import WhoAmI from '../components/WhoAmI.svelte';
  import WinWin from '../components/WinWin.svelte';

  import animate from "../libs/animate";

  onMount(() => {
      animate('.hidden');
  })
</script>


<TopNav />

<section>
  <h1>Hello {'{world}'}!<span class="hand">👋</span></h1>
</section>

<WhoAmI />

<section>
  How to write:<br />
  ✅ maintainable JS code<br />
  ✅ scalable web apps<br />
  ...yup that's about it! 🎤⤵<br />
</section>

<section>
  <h2>I share the most important tools, tips, and techniques of top Sr. JS devlopers.</h2>
  <h2>It's consise, easy to follow, and quick to apply.</h2>
</section>

<WinWin />

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


<style>
  .hand {
    display: inline-block;
    font-size: 4rem;
    animation: var(--animation-pulse);
  }

  .read-the-docs {
    color: #888;
  }
</style>
