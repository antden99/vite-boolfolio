<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object,
    },

    data() {
        return {
        }
    },
}

</script>

<template>
    <div class="card">
        <img :src="project.cover_image" class="card-img-top" alt="Card image">
        <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <div class="card-text">{{ project.start_date }}</div>
        </div>
    </div>
</template>

<style></style>