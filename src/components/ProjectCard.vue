<script>
export default {
    name: 'ProjectCard',
    props: ['project','url_Img'],

    data() {
        return {
        }
    },
}

</script>

<template>
    <div class="card">
        <template v-if="project.cover_image.startsWith('uploads')">
            <img :src="url_Img + 'storage/' + project.cover_image" alt="">
        </template>
        <template v-else>
            <img :src="project.cover_image" alt="">
        </template>
        <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <div class="card-text">{{ project.start_date }}</div>
        </div>
    </div>
</template>

<style></style>