<template>
    <my-card :title="title" :icon='icon'>
        <div class="nav jc-between  ">
            <div class="nav-item " v-for="(category,i) in categories" :key="i" :class="{active:active===i}"
                @click="$refs.list.swiper.slideTo(i)">
                <div class="nav-link">{{category.name}}</div>
            </div>
        </div>
         <div class="card-body mt-1">
                <swiper  ref="list" :options="{autoHeight:true}" @slide-change="()=> active =$refs.list.swiper.realIndex">
                    <swiper-slide v-for="(category,i) in categories" :key="i">
                        <slot name="items" :category="category"></slot>
                    </swiper-slide>
                </swiper>
            </div>
    </my-card>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                require: true
            },
            title: {
                type: String,
                require: true
            },
            categories: {
                type: Array,
                require: true
            }
        },
        data() {
            return {
                active: 0
            }
        }
    }
</script>

<style lang="scss">

</style>