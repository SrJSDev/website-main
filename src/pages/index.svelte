<script>
    import svelteLogo from '../assets/poor-mugshot.png'
    import Counter from '../components/Counter.svelte'
    import TopNav from '../components/TopNav.svelte'
  </script>
  
  <main>
    <TopNav />

    <div>
      <a href="https://srjs.dev" target="_blank" rel="noreferrer">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
    </div>

    <h1>Welcome to</h1>
    <h1>Sr. JS Dev!</h1>

    <section class="top-intro">
        Online educator,<br/>
        mentor,<br/>
        and consultant--<br/>
        teaching practical,<br/>
        advanced topics<br/>
        to people like you on<br/>
        how to write:<br/>
        maintainable JS code,<br/> 
        scalable apps,<br/>
        ...that's it!<br/>
    </section>
  
    <div class="card">
      <Counter />
    </div>
  
    <p class="read-the-docs">
      Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
    </p>
  </main>
  
  <style>
    section.top-intro {
        max-width: 50vw;
        margin: 0 auto;
        text-align: right;
    }
    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
    }
    /* .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.svelte:hover {
      filter: drop-shadow(0 0 2em #ff3e00aa);
    } */
    .read-the-docs {
      color: #888;
    }
  </style>
  