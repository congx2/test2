<template>
  <div class="official-qa">
    <el-button @click="click">Toggle</el-button>
    <div class="q">{{ qa.q }}</div>
    <div v-if="!showAll" class="a" :class="aClasses">
      <div ref="content" class="content">
        <p v-for="(s, i) in a" :key="i">{{ s }}</p>
      </div>
    </div>
    <el-collapse-transition>
        <div v-show="showAll" class="a" :class="aClasses" :style="{ height }">
            <div ref="content" class="content">
              <p v-for="(s, i) in a" :key="i">{{ s }}</p>
            </div>
        </div>
      </el-collapse-transition>
  </div>
</template>

<script>
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

export default {
  name: 'OfficialQa',
  components: { [CollapseTransition.name]: CollapseTransition},
  props: {
    qa: {
      type: Object,
      default: () => ({
        q: '筛选把剩下撒下撒才是悲惨擦拭擦拭才卡上村撒流程按时吃',
        a: ``
      })
    }
  },
  data() {
    return {
      isMounted: false,
      height: 0,
      txt: '随着疫情对线上经济的推动',
      actualHeight: 0,
      collapse: false,
      showAll: false
    }
  },
  computed: {
    a() {
      // const a = this.qa.a
      const a = this.defaultContent
      if (Array.isArray(a)) {
        return a.map(this.toStr)
      }
      return [this.toStr(a)]
    },
    aClasses() {
      return {
        'is-one-row': false,
        'is-limit': this.isLimit
      }
    },
    lineHeight() {
      return 25
    },
    limitRows() {
      return 5
    },
    isLimit() {
      return this.actualHeight > this.limitHeight
    },
    limitHeight() {
      return this.limitRows * this.lineHeight
    },
    isOneRow() {
      return this.actualHeight <= this.lineHeight
    },
    defaultContent() {
      return `随着疫情对线上经济的推动，电商直播爆发性增长，预计到2022年直播用户规模将会达到6.6亿人。
2021年也就是今年，直播用户规模已经达到6.35亿人。整个电商直播市场已经达到近万亿的规模，在今年还有望突破1.2万亿元，其中以淘宝、抖音和快手为主的三大直播电商平台占据主要成交金额。这样的新消费爆品，比如说在个护家清行业的留香珠、洗衣凝珠，宠物行业的猫狗保健品等。
直播是一个比较泛的概念，因此就衍生出“直播+”的模式，比如秀场直播、游戏直播、还有我们今天要讲的电商直播等，目前直播类型也越来越多元化，发展出教育类、文化科普类等。随着疫情对线上经济的推动，电商直播爆发性增长，预计到2022年直播用户规模将会达到6.6亿人。
2021年也就是今年，直播用户规模已经达到6.35亿人。整个电商直播市场已经达到近万亿的规模，在今年还有望突破1.2万亿元，其中以淘宝、抖音和快手为主的三大直播电商平台占据主要成交金额。这样的新消费爆品，比如说在个护家清行业的留香珠、洗衣凝珠，宠物行业的猫狗保健品等。
直播是一个比较泛的概念，因此就衍生出“直播+”的模式，比如秀场直播、游戏直播、还有我们今天要讲的电商直播等，目前直播类型也越来越多元化，发展出教育类、文化科普类等。随着疫情对线上经济的推动，电商直播爆发性增长，预计到2022年直播用户规模将会达到6.6亿人。
2021年也就是今年，直播用户规模已经达到6.35亿人。整个电商直播市场已经达到近万亿的规模，在今年还有望突破1.2万亿元，其中以淘宝、抖音和快手为主的三大直播电商平台占据主要成交金额。这样的新消费爆品，比如说在个护家清行业的留香珠、洗衣凝珠，宠物行业的猫狗保健品等。
直播是一个比较泛的概念，因此就衍生出“直播+”的模式，比如秀场直播、游戏直播、还有我们今天要讲的电商直播等，目前直播类型也越来越多元化，发展出教育类、文化科普类等。随着疫情对线上经济的推动，电商直播爆发性增长，预计到2022年直播用户规模将会达到6.6亿人。
2021年也就是今年，直播用户规模已经达到6.35亿人。整个电商直播市场已经达到近万亿的规模，在今年还有望突破1.2万亿元，其中以淘宝、抖音和快手为主的三大直播电商平台占据主要成交金额。这样的新消费爆品，比如说在个护家清行业的留香珠、洗衣凝珠，宠物行业的猫狗保健品等。
直播是一个比较泛的概念，因此就衍生出“直播+”的模式，比如秀场直播、游戏直播、还有我们今天要讲的电商直播等，目前直播类型也越来越多元化，发展出教育类、文化科普类等。随着疫情对线上经济的推动，电商直播爆发性增长，预计到2022年直播用户规模将会达到6.6亿人。
2021年也就是今年，直播用户规模已经达到6.35亿人。整个电商直播市场已经达到近万亿的规模，在今年还有望突破1.2万亿元，其中以淘宝、抖音和快手为主的三大直播电商平台占据主要成交金额。这样的新消费爆品，比如说在个护家清行业的留香珠、洗衣凝珠，宠物行业的猫狗保健品等。
直播是一个比较泛的概念，因此就衍生出“直播+”的模式，比如秀场直播、游戏直播、还有我们今天要讲的电商直播等，目前直播类型也越来越多元化，发展出教育类、文化科普类等。随着疫情对线上经济的推动，电商直播爆发性增长，预计到2022年直播用户规模将会达到6.6亿人。
2021年也就是今年，直播用户规模已经达到6.35亿人。整个电商直播市场已经达到近万亿的规模，在今年还有望突破1.2万亿元，其中以淘宝、抖音和快手为主的三大直播电商平台占据主要成交金额。这样的新消费爆品，比如说在个护家清行业的留香珠、洗衣凝珠，宠物行业的猫狗保健品等。`
    }
  },
  mounted() {
    // this.isMounted = true
    // this.updateContent()
    // console.log('mounted h: ', this.getContentHeight(this.$refs.content))
    // this.$nextTick(() => {
    //   const h = this.getContentHeight(this.$refs.content)
    //   console.log('mounted nextTick h: ', h)
    // })
    // setInterval(() => {
    //   this.updateContent()
    // }, 3000)
  },
  updated() {
    // const h = this.getContentHeight(this.$refs.content)
    // console.log('updated isMounted: ', this.isMounted)
    // console.log('updated h: ', h)
    // this.$nextTick(() => {
    //   const h = this.getContentHeight(this.$refs.content)
    // console.log('updated nextTick isMounted: ', this.isMounted)
    // console.log('updated nextTick h: ', h)
    // })
    
  },
  methods: {
    random(min, max) {
      return Math.round(Math.random() * (max - min) + min)
    },
    toStr(s) {
      try {
        return s.toString()
      } catch (error) {
        return ''
      }
    },
    getContentHeight(el = this.$refs.content) {
      if (!el) {
        return 0
      }
      const h = el.offsetHeight
      const limit = h > this.limitHeight
      this.actualHeight = h
      this.height = (limit ? this.limitHeight : h) + 'px'
      return h
    },
    updateContent() {
      const n = this.random(1, this.defaultContent.length - 1)
      // this.txt = this.defaultContent.slice(0, n)
    },
    click() {
      this.showAll = !this.showAll
    }
  }
}
</script>

<style scoped>
.official-qa {
  font-size: 14px;
  line-height: 25px;
  color: #808080;
}

.official-qa .q,
.official-qa .a {
  position: relative;
  box-sizing: border-box;
  padding-left: 44px;
}

.official-qa .q {
  height: 28px;
  line-height: 28px;
  margin-bottom: 24px;
  font-size: 18px;
  color: #222222;
}

.official-qa .a {
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient:vertical;
}

.official-qa .a.is-one-row {
  line-height: 28px;
}

.official-qa .a.is-one-row::before {
  top: 0;
}

.official-qa .q::before,
.official-qa .a::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 28px;
  height: 28px;
  line-height: 28px;
  border-radius: 3px;
  font-size: 16px;
  text-align: center;
  color: #fff;
  background: #FF3A3A;
}

.official-qa .q::before {
  content: 'Q';
}

.official-qa .a::before {
  content: 'A';
  top: 6px;
  background-color: #808080;
}

.official-qa .a * {
  margin: 0;
  padding: 0;
}

</style>