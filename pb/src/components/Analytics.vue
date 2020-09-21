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
            <div class="one">
                <div class="one-content"><span>151</span></div>
                <span class="one label">Количество брендов</span>
            </div>
            <div class="two">Наличие товаров</div>
            <div class="three">Наличие товаров в магазинах</div>
            <div class="four">Сравнение ср цены</div>
            <div class="five">Количество категорий</div>
            <div class="six">Представлено в магазинах</div>
            <div class="seven">Вкладки</div>
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
    height: 140px;
}

.two {
    grid-area: two;
    background-color: #ffffff;
    height: 140px;
}

.three {
    grid-area: three;
    background-color: #ffffff;
    height: 290px;
}

.four {
    grid-area: four;
    background-color: #ffffff;
    height: 290px;
}

.five {
    grid-area: five;
    background-color: #ffffff;
    height: 140px;
}

.six {
    grid-area: six;
    background-color: #ffffff;
    height: 140px;
}

.seven {
    grid-area: seven;
    background-color: #ffffff;
    height: 65px;
}

.main {
    margin: 10px;
    font-size: 14px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 150px 150px 200px 450px;
    grid-template-areas: 
        "one two three four"
        "five six three four"
        "seven seven seven seven"; 
    grid-gap: 10px;
    height: 365px;
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

.one-content {
    margin: 25% auto;
    font-size: 36px;
    font-weight: bold;
    justify-content: center;
    color: blue;
}

.label {
    font-size: 12px;
    justify-items: center;
    justify-content: center;
    align-content: center;
}
</style>