<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="../assets/img/imagesZoe3.jpg" class="width-1">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/imagesZoe3.jpg" class="width-1">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/imagesZoe3.jpg" class="width-1">
      </swiper-slide>
      <div class="swiper-pagination pagination-home" slot="pagination"></div>
    </swiper>
    <!-- swiper of end -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
        <!-- icon of end -->
      </div>
    </div>

    <!-- <my-card title="咨询" icon='menu1' :categories='newcats'>
      <div class="card-body">
        <div class="border mt-4 mx-3"></div>
        <div class="nav pt-4 px-1 jc-between">
          <div class="nav-item active">
            <div class="nav-link ">热门</div>
          </div>
          <div class="nav-item">
            <div class="nav-link ">热门</div>
          </div>
          <div class="nav-item ">
            <div class="nav-link ">热门</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">新闻</div>
          </div>
        </div>
      </div>
      <div class="card-body mt-1">
        <swiper>
          <swiper-slide v-for="n in 5" :key="n">
            <div v-for="m in 5" :key="m" class="mt-3 mx-1">
              <span>[新闻]</span>
              <span>|</span>
              <span>aaaaaaaaaaaaaaaaaa</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </my-card> -->

    <my-list-card title="新闻" icon='menu1' :categories='newcats'>
      <template #items="{category}">
        <div v-for="(news,i) in category.newslist" :key="i" class="mt-3 mx-1 d-flex">
          <span class="text-info ">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="text-grey flex-1 text-ellipsis">{{news.title}}</span>
          <span class="text-grey ">{{news.createdAt |date}}</span>
        </div>
      </template>
    </my-list-card>
    <my-list-card title="英雄" icon='card-hero' :categories='herocats'>
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin:0px -0.5rem">
          <div v-for="(heroes,i) in category.herolist" :key="i" class="p-2 text-center" style="width:20%">
            <img :src="heroes.avatar"  class="width-1" >
            <div>{{heroes.name}}</div>
          </div>
        </div>
      </template>
    </my-list-card>


    <div class="card bg-white p-2 mt-3">
      <div class="card-header d-flex ai-center">
        <i class="iconfont icon-menu1"></i>
        <div class="fs-xl d-flex flex-1 px-2">咨询</div>
        <i class="iconfont icon-menu"></i>
      </div>
    </div>


  </div>
</template>

<script>
  import dayjs from "dayjs";
  export default {
    filters: {
      date(v) {
        return dayjs(v).format('MM/DD')
      }
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.pagination-home',
            autoplay: 1500
          }
        },
        newcats: [],
        herocats: []
      }
    },
    methods: {
      async fetchNewCats() {
        const fetch = await this.$http.get('news/list')
        this.newcats = fetch.data
      },
      async fetchHeroCats() {
        const fetch = await this.$http.get('hero/list')
        this.herocats = fetch.data
      },

    },
    created() {
      this.fetchNewCats()
      this.fetchHeroCats()
    }
  }
</script>

<style lang='scss'>
  @import '../assets/scss/variable.scss';

  .pagination-home {
    .swiper-pagination-bullet {
      background: #fff;

      &.swiper-pagination-active {
        background: map-get($colors, 'info')
      }
    }
  }

  .nav-icons {
    .nav-item {
      width: 25%;
      border-left: 1px solid $borde-color;
    }

    &:nth-clild(4n+1) {
      border-left: none
    }
  }
</style>