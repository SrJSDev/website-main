<script>
  export let label = "Count"
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<h4>Interactivator v2.0 👇</h4>
<button on:click={increment}>
  {label}: {count}
</button>
