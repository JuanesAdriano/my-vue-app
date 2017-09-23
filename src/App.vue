<template>
    <div id="app">
        <my-menu title="My App" v-on:button-click="onBtClick">
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>

        </my-menu>
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
    import myMenu from './myMenu.vue'

    export default {


        data() {
            return {
                msg: 'VueVueVues'
            }
        },
        components: {
            myMenu
        },
        methods:{
           onMenuClick:function (e) {
               alert("Clicou no menu!");
           },
            onBtClick:function (message) {
                alert(message);

            }

        }
    }
</script>

<style>
    body {
        font-family: Arial, Helvetica, sans-serif;
    }
</style>
