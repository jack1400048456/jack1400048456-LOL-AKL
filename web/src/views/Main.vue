<template>
  <div>
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
      <img src="../assets/img/game.png" height="32">
      <div class="px-2 flex-1">
        <div class="text-white">英雄联盟</div>
        <div class="fs-xss text-grey-1">LOL</div>
      </div>
      <button class="btn bg-primary" type="button">LOL</button>
    </div>
    <div class="bg-primary py-2 pt-3"> 
      <div class="nav jc-around nav-inverse pb-1">
        <div class="nav-item active">
          <router-link class="nav-link "  tag='div' to = '/'>首页</router-link>
        </div>
        <div class="nav-item text-white">
          <router-link class="nav-link"  tag='div' to = '/'>菜单</router-link>
        </div>
        <div class="nav-item text-white">
          <router-link class="nav-link"  tag='div' to = '/'>英雄</router-link>
        </div>
      </div>
    </div>
     <router-view></router-view>  
  </div>

</template>

<script>
export default {

}
</script>

<style lang='scss'>
.topbar{
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>