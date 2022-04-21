<template>
    <div>
      <div class="tabs">
        <div class="tab" v-for="(items,index) in titleList" :key="index" :id="'id'+index" :style="{borderBottom: activeTab===index?borderBo:''}" >
          <div @click="changeTab(index,'id'+index)">
            {{ items.title }}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "tabsSwipe",
      props:{
          borderBo:{
            type: String,
            default:'1px solid #E60012'
          },
        titleList:{
          type: Array,
          default: ()=>[
            {
              value: 0,
              title: '导航栏一'
            }, {
              value: 1,
              title: '导航栏二'
            }, {
              value: 2,
              title: '导航栏三'
            }, {
              value: 3,
              title:'导航栏四'
            }, {
              value: 4,
              title: '导航栏一'
            }, {
              value: 5,
              title: '导航栏4'
            }]
        }
      },
        components: {
        },
        data(){
            return{
              activeTab: 0,

            }
        },
      mounted() {
      },
      methods:{
          //切换状态
          changeTab(index,id) {
            var idd=document.getElementById(id)
            idd.scrollIntoView({behavior:'auto', block: 'start', inline: 'nearest'})
            this.activeTab = index
            this.$emit('checkTab',index)
          },
        }

    }
</script>

<style scoped>
  ::-webkit-scrollbar {
    width: 0 !important;height: 0;display:none;
  }
  .tabs{
    display:flex;
    overflow:auto;
    background: white
  }
  .tab{
    width: auto;
    padding: 15px 22px;white-space: nowrap;
    text-align: center; background: white;

  }
</style>
