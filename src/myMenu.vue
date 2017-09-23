
<template>
    <div >
        <h4>{{title}}</h4><br>
        <button @click="onBtClick">EU?</button>
        <div>
            <slot></slot>
        </div>
    </div>

</template>


<script>
    export default {
        props:{
            propNumb: Number,
            title: Text,

        },
        methods:{
            onMenuClick: function () {
                this.$emit('menu-click');
            },
            onBtClick: function () {
                this.$emit('button-click', "ta comigo ta com deus", "ta lgd")
            }
        }

    }
</script>

<style>

</style>
