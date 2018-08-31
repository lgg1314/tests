<template>
    <div class="hello">
        <ul>
            <li>    </li>
            <li>    </li>
            <li>    </li>
        </ul>
    </div>
</template>

<script>
import * as Tool from '@/tool'
export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    mounted() {

    }
};
</script>

<style scoped>
li{
    width: 250px;
    height: 100px;
    background: red;
    float: left;
    list-style: none;
}
</style>
