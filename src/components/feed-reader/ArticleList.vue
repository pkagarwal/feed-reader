<template>

    <div>
        <h2 class="mb-4">Articles</h2>
            <ul v-if="articles && articles.length"
            class="list-reset sticky pin-t border-b border-grey"
            >
                <li v-for="item in articles" :key="item.title">
                        <a
                            @click = "selectArticle(item)"
                            href="#"
                            class="no-underline p-2 block border-grey border border-b-8 text-teal hover:bg-teal-lightest"
                            >
                            {{ item.title }}
                        </a>

                </li>

            </ul>
    </div>
</template>

<script>
export default {
    props: ['articles'],
    methods: {
        selectArticle(article) {
            this.$emit('onSelectArticle', article)
        }
    }
}
</script>