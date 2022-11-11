<script lang="ts">
</script>

<nav>
    <ul class="links">
        <li><a href="/">Home<a/></li>
        <li><a href="/about">About<a/></li>
        <li><a href="/blog">Blog<a/></li>
        <li><a href="https://www.youtube.com/channel/UClu80kwRi7KVUherGeilGQQ">YouTube<a/></li>
        <li><a href="/news-letter">News Letter<a/></li>
    </ul>
</nav>

<style>
    nav ul {
        display: flex;
        flex-direction: row;
    }
    nav ul.links {
        justify-content: flex-end;
    }

    li {
        list-style: none;
        padding: .2rem;
        cursor: pointer;
    }

    li::after {
        content: ' | ';
    }
    li:last-child::after {
        content: '';
    }
</style>