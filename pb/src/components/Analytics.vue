<template>
    <div class="container">
        <aside>
            <div class="select">
                <fieldset class="select-group">
                <legend class="select-label">Бренд</legend>
                <select class="select-list" name="select-brand" id="brand">
                    <option value="all">Все</option>
                    <option value=""></option>
                </select>
                </fieldset>
            </div>
            
            <div class="select">
                <fieldset class="select-group">
                <legend class="select-label">Категория</legend>
                <select class="select-list" name="select-brand" id="brand">
                    <option value="all">Все</option>
                    <option value=""></option>
                </select>
            </fieldset>
            </div>

            <div class="select">
                <fieldset class="select-group">
                <legend class="select-label">Магазин</legend>
                <select class="select-list" name="select-brand" id="brand">
                    <option value="all">Все</option>
                    <option value=""></option>
                </select>
            </fieldset>
            </div>
            
            <div class="select">
                <fieldset class="select-group">
                <legend class="select-label">Дата обновления</legend>
                <select class="select-list" name="select-brand" id="brand">
                    <option value="all">Все</option>
                    <option value=""></option>
                </select>
            </fieldset>
            </div>

            <div class="select">
                <fieldset class="select-group">
                <legend class="select-label">SKU</legend>
                <select class="select-list" name="select-brand" id="brand">
                    <option value="all">Все</option>
                    <option value=""></option>
                </select>
            </fieldset>
            </div>
        </aside>
        <div class="main">
            <div class="one">Доля бренда в категории</div>
            <div class="two">Представлено в магазинах</div>
            <div class="three">Наличие в магазинах</div>
            <div class="four">Количество раз в стопе</div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Analytics'
}
</script>

<style scoped>
* {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
.container {
    display: flex;
    background-color: #f3f3f3;
    height: 400px;
}
aside {
    width: 300px;
    font-size: 14px;
}

.one {
    grid-area: one;
    background-color: #ffffff;
}

.two {
    grid-area: two;
    background-color: #ffffff;
}

.three {
    grid-area: three;
    background-color: #ffffff;
}

.four {
    grid-area: four;
    background-color: #ffffff;
}

.main {
    margin: 10px;
    font-size: 14px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 250px 250px 450px;
    grid-template-areas: 
        "one two three"
        "one four three"; 
    grid-gap: 10px;
    height: 290px;
}

.select {
    width: 95%;
    height: 65px;
    background-color: #ffffff;
    margin: 10px auto;
    padding-top: 5px;
}

.select-group {
    height: 60px;
    display: flex;
    justify-content: flex-start;
    font-weight: bold;
    padding-left: 15px;
    padding-top: 10px;
    border: 0 none;
}

.select-label {
    display: flex;
    text-align: left;
}

.select-list {
    width: 98%;
    height: 25px;
}
</style>