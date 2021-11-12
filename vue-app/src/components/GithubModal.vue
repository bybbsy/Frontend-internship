<template>
    <form method="GET" @submit.prevent="searchForRepo">
        <div class="top-row">
            <h5>GitHub Api</h5>
        </div>
        <div class="input-row">
            <div class="input-username">
                <input type="text" placeholder="Enter username" name="input-repo-name" v-model="username">
            </div>
            <div class="input-find">
                <input type="submit" value="Search">
            </div>
        </div>
        <div class="result-row">
            <p>Repos list:</p>
            <ul class="repos-list" v-if="searching">
                <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </ul>
            <ul class="repos-list" v-if="reposList.length">
                <GithubModalRepo v-for="(repos, index) in reposList"
                    :key="index"
                    :name="repos.name"
                    :link="repos.clone_url"
                    />
            </ul>
            <ul v-else-if="emptyArray">
                <div class="repos-not-found">Not found</div>
            </ul>
        </div>
        <div class="bottom-row">
            <button type="button" @click="declineClickHandler">Close</button>
        </div>
    </form>
</template>

<script>
import GithubModalRepo from '@/components/GithubModalRepo.vue'

export default {
    name: 'github-modal',
    props: {
        modalData: Object
    },
    data: function() {
        return {
            username: null,
            reposList: [],
            searching: false,
            emptyArray: false
        }
    },
    methods: {
        declineClickHandler() {
            return this.modalData.showModal = false
        },
        async searchForRepo() {
            const URL = `https://api.github.com/users/${this.username}/repos`;
             
            this.searching = true;
            this.emptyArray = false;
            this.reposList = [];
            
            const result = await fetch(URL);
            let data = await result.json();
            
            this.reposList = data;
            this.emptyArray = data.length > 0 ? false : true;
            this.searching = false;
        },
        catchError(reason = "Error code is not defined") {
            throw new Error(`Something went wrong. Error code: ${reason}`)
        }
    },
    components: {
        GithubModalRepo
    }
}
</script>

<style>

</style>