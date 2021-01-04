<template>
    <div v-if="article">
        <h2 class="mb-4">{{ article.title }}</h2>
        <p>Arduino: 1.8.14 Hourly Build 2020/09/23 10:35 (Mac OS X), Board: "Generic ESP8266 Module, 80 MHz, Flash, Legacy (new can return nullptr), All SSL ciphers (most compatible), dtr (aka nodemcu), 26 MHz, 40MHz, DOUT (compatible), 1MB (FS:64KB OTA:~470KB), 2, nonos-sdk 2.2.1+100 (190703), v2 Lower Memory, Disabled, None, Only Sketch, 115200"</p>

        <div class= "mb-4" v-html="article-content" ></div>

        <a
        :href = "article.link"
        target = "_blank"
        rel = "noopener"
        class = "inline-block bg-teal hover:bg-teal-dark text-blue font-bold py-2 px-4 no-undeline"
        >View original</a>
    </div>
</template>

<script>
export default {
    props: ['article']
}
</script>