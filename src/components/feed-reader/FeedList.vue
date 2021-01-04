<template>
    <div>
        <h2 class="w3-margin">Feeds</h2>
        <ul v-if="feeds && feeds.length" class="list-reset sticky pin-t border-b border-grey">
            <li v-for = "feed in feeds" :key="feed.title"> 
                <a
                    @click = "selectFeed(feed)"
                    href="#"
                    class = "no-undeline p-2 block border-grey border border-bottom-b-0 text-teal hover:bg-teal-lightest"
                >
                    {{ feeds.title }}
                </a>

            </li>


        </ul>
    </div>
</template>

<script>
export default {
    props: ['feeds'],

    methods: {
        selectFeed(feed) {
            this.$emit('onSeclectFeed', feed)
        }
    }
}
</script>

