<template>
    <div class="navbar">
        <div @click="$router.push('/')">Head Hanter App</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/jobs')">Вакансии</my-button>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.navbar {
    height: 50 px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.navbar__btns{
    margin-left: auto;
    margin: 5px 5px 5px auto;   
}
.second__btn{
    margin-left: 20px;    
}
</style>
        