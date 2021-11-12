<template>
    <li>
        <span class="repos-name">{{ name }}</span>
        <a href="{ link }" class="repos-link" target="_blank">Link</a>
        <span class="copy-link">Copy</span>
    </li>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>