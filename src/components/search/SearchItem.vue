<template>
    <el-col :span="8" :offset="0">
        <el-form-item :label="label">
            <slot />
        </el-form-item>
    </el-col>
</template>

<script setup>
const porps = defineProps({
    label: String
})
</script>

<style lang="scss" scoped>

</style>