<template>
    <div>
        <a @click="callUsers" class="waves-effect waves-light btn">Chamar usuários</a>
        <a @click="countUsers" class="waves-effect waves-light btn">Contar usuários</a>
        <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>outro botão</a>

        <hr/>
        <pre>
        {{users | json}}
    </pre>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                users: null
            }
        }

        methods: {
            callUsers: function () {
                this.$http({url: '/users.json', method: 'GET'}).
                then(function (response) {

                })
            }
        }
    }
</script>