<template>
    <div>
        <div class="top-row">
            <h5>GitHub Api</h5>
        </div>
        <div class="input-row">
            <div class="input-username">
                <input type="text" placeholder="Enter username">
            </div>
            <div class="input-find">
                <input type="submit" value="Search">
            </div>
        </div>
        <div class="result-row">
            <p>Repos list:</p>
            <ul class="repos-list">
                <div class="lds-spinner hidden"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                <div class="repos-not-found hidden">Not found</div>
            </ul>
        </div>
        <div class="bottom-row">
            <button type="button" @click="declineClickHandler">Close</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'github-modal',
    props: {
        modalData: Object
    },
    methods: {
        declineClickHandler() {
            return this.modalData.showModal = false;
        }
    }
}
</script>

<style>

</style>