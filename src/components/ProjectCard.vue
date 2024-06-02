<script>
export default {
    name: 'ProjectCard',
    props: ['project', 'url_Img'],

}

</script>

<template>
    <div class="card ">
        <img :src="url_Img + 'storage/' + project.cover_image" alt="" v-if="project.cover_image.startsWith('uploads')"
            class="card-img-top">
        <img :src="project.cover_image" alt="" v-else class="card-img-top">

        <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <div class="card-text">{{ project.start_date }}</div>
        </div>
    </div>
</template>

<style>
.card-img-top {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
}
</style>