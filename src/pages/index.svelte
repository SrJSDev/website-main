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
  <h1>Hello {'{world}'}!<span class="hand">๐</span></h1>
</section>

<WhoAmI />

<section>
  How to write:<br />
  โ maintainable JS code<br />
  โ scalable web apps<br />
  ...yup that's about it! ๐คโคต<br />
</section>

<section>
  <h2>I share the most important tools, tips, and techniques of top Sr. JS devlopers.</h2>
  <h2>All my content is concise, simple to follow, and quick to apply.</h2>
  <h2>If you stick to it, you'll feel that AMAZING dopamine rush too! And the confidence to build a high-quality system.</h2>
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
