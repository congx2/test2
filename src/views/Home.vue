<template>
  <div class="home">
    <div class="advantage-list">
      <div class="sr">
        <div class="advantage-item">
          <div class="icon-wrap">
            <div
              class="circle"
              :style="{ backgroundImage: `url(${advantageIcon.icon1.circle})` }"
            ></div>
            <div
              class="sector"
              :style="{ backgroundImage: `url(${advantageIcon.icon1.sector})` }"
            ></div>
          </div>
        </div>
      </div>
      <div class="sr">
        <div class="advantage-item">
          <div class="icon-wrap"></div>
        </div>
      </div>
      <div class="sr">
        <div class="advantage-item">
          <div class="icon-wrap"></div>
        </div>
      </div>
    </div>
    <div class="case-list">
      <div class="sr">
        <div class="case-item fliper-wrap" @click="caseItemClickHandler">
          <div class="fliper">
            <div class="front">
              <div class="mark">寄件服务</div>
              <div class="pic">
                <img src="~@/assets/images/home-case-pic1.jpg" alt="" />
              </div>
              <div class="txt">
                <div class="title">同城跑腿</div>
                <div class="desc">
                  窃格瓦拉同城通过小程序入驻，拓展业务品牌度，提升用户的忠诚度。
                </div>
              </div>
              <div class="index index-left">
                <div class="value">1000万+</div>
                <div class="label">流量推荐</div>
              </div>
              <div class="index index-right">
                <div class="value">200万+</div>
                <div class="label">订单转化</div>
              </div>
            </div>
            <div class="back">
              <div class="mark">寄件服务</div>
              <img
                class="qrcode"
                src="~@/assets/images/home-case-qrcode1.jpg"
                alt=""
              />
              <div class="tips">「微信扫一扫，立即体验」</div>
              <div class="txt">
                <div class="title">同城跑腿</div>
                <div class="desc">
                  窃格瓦拉同城通过小程序入驻，拓展业务品牌度，提升用户的忠诚度。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sr">
        <div class="case-item fliper-wrap" @click="caseItemClickHandler">
          <div class="fliper">
            <div class="front">
              <div class="mark">电商购物</div>
              <div class="pic">
                <img src="~@/assets/images/home-case-pic2.jpg" alt="" />
              </div>
              <div class="txt">
                <div class="title">唯品会特卖</div>
                <div class="desc">
                  与窃格瓦拉会员做深度捆版，做联合推广活动，提升用户的精准性和转化
                </div>
              </div>
              <div class="index index-left">
                <div class="value">100万+</div>
                <div class="label">精准会员合作</div>
              </div>
              <div class="index index-right">
                <div class="value">3%+</div>
                <div class="label">用户转化</div>
              </div>
            </div>
            <div class="back">
              <div class="mark">电商购物</div>
              <img
                class="qrcode"
                src="~@/assets/images/home-case-qrcode1.jpg"
                alt=""
              />
              <div class="tips">「微信扫一扫，立即体验」</div>
              <div class="txt">
                <div class="title">唯品会特卖</div>
                <div class="desc">
                  与窃格瓦拉会员做深度捆版，做联合推广活动，提升用户的精准性和转化
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sr">
        <div class="case-item fliper-wrap" @click="caseItemClickHandler">
          <div class="fliper">
            <div class="front">
              <div class="mark">3C回收</div>
              <div class="pic">
                <img src="~@/assets/images/home-case-pic3.jpg" alt="" />
              </div>
              <div class="txt">
                <div class="title">转转回收</div>
                <div class="desc">
                  争对窃格瓦拉用户做差异化折扣策略，提升业务转化
                </div>
              </div>
              <div class="index index-left">
                <div class="value">50万+</div>
                <div class="label">精准导流</div>
              </div>
              <div class="index index-right">
                <div class="value">8万+</div>
                <div class="label">下单转化</div>
              </div>
            </div>
            <div class="back">
              <div class="mark">3C回收</div>
              <img
                class="qrcode"
                src="~@/assets/images/home-case-qrcode1.jpg"
                alt=""
              />
              <div class="tips">「微信扫一扫，立即体验」</div>
              <div class="txt">
                <div class="title">转转回收</div>
                <div class="desc">
                  争对窃格瓦拉用户做差异化折扣策略，提升业务转化
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sr">
        <div class="case-item fliper-wrap" @click="caseItemClickHandler">
          <div class="fliper">
            <div class="front">
              <div class="mark">闲置回收</div>
              <div class="pic">
                <img src="~@/assets/images/home-case-pic4.jpg" alt="" />
              </div>
              <div class="txt">
                <div class="title">旧衣回收</div>
                <div class="desc">飞蚂蚁通过小程序入驻，提升业务的商业能力</div>
              </div>
              <div class="index index-left">
                <div class="value">100万+</div>
                <div class="label">用户点击</div>
              </div>
              <div class="index index-right">
                <div class="value">10万+</div>
                <div class="label">回收订单转化</div>
              </div>
            </div>
            <div class="back">
              <div class="mark">闲置回收</div>
              <img
                class="qrcode"
                src="~@/assets/images/home-case-qrcode1.jpg"
                alt=""
              />
              <div class="tips">「微信扫一扫，立即体验」</div>
              <div class="txt">
                <div class="title">旧衣回收</div>
                <div class="desc">飞蚂蚁通过小程序入驻，提升业务的商业能力</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import advantage1IconCircle from "@/assets/images/advantage1-icon-circle.png";
import advantage1IconSector from "@/assets/images/advantage1-icon-sector.png";

export default {
  name: "Home",
  components: {},
  computed: {
    advantageIcon() {
      const icon1 = {
        circle: advantage1IconCircle,
        sector: advantage1IconSector,
      };
      return {
        icon1,
      };
    },
  },
  methods: {
    findParent(el, scopedClass) {
      let parent = el;
      while (parent) {
        if (parent.classList.contains(scopedClass)) {
          return parent;
        }
        parent = parent.parentNode;
      }
      return parent;
    },
    caseItemClickHandler(e) {
      const scopedClass = "fliper-wrap";
      const el = this.findParent(e.target, scopedClass);
      if (!el) {
        return;
      }
      const activeClass = "is-flip";
      if (el.classList.contains(activeClass)) {
        el.classList.remove(activeClass);
      } else {
        el.classList.add(activeClass);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 50px 0;
}

.advantage-list {
  padding: 162px 0 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  user-select: none;
  background-color: #f8f8fa;

  .sr {
    margin-right: 32px;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
  }

  .advantage-item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: flex-start;
    width: 345px;
    height: 352px;
    border-radius: 8px;
    background: #ffffff;
  }

  .icon-wrap {
    position: relative;
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;

    .circle {
      position: relative;
      width: 70px;
      height: 70px;
      background: transparent center center / 100% auto no-repeat;

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #ffffff;
        transform: translate(-50%, -50%);
      }
    }

    .sector {
      width: 50px;
      height: 50px;
      background: transparent center center / 100% 100% no-repeat;
    }
  }
}

.case-list {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  user-select: none;

  .sr {
    margin-right: 32px;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
  }

  .case-item {
    position: relative;
    width: 251px;
    height: 448px;
    perspective: 1000px;
    transition: transform 350ms;
    &:hover {
      transform: scale(1.1);
    }
    &.is-flip {
      transform: scale(1);
      .fliper {
        transform: rotateY(180deg);
      }
    }

    .fliper,
    .front,
    .back {
      width: 100%;
      height: 100%;
    }

    .fliper {
      position: relative;
      transform-style: preserve-3d;
      transition: all 650ms;
    }

    .front,
    .back {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      box-sizing: border-box;
      border-radius: 8px;
      line-height: 150%;
      overflow: hidden;
      backface-visibility: hidden;
      box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.04);
    }

    .front {
      z-index: 2;
      background-color: #fff;
      .pic {
        width: 251px;
        height: 251px;
        overflow: hidden;
        img {
          display: block;
          width: 100%;
        }
      }

      .txt {
        box-sizing: border-box;
        padding: 24px 16px;
        line-height: 150%;
        color: #222222;
        background-color: #fff;
      }

      .title {
        margin-bottom: 8px;
        font-weight: 500;
        font-size: 18px;
      }

      .desc {
        font-size: 14px;
        color: #808080;
      }

      .index {
        position: absolute;
        bottom: 16px;
        font-size: 14px;
      }

      .index-left {
        left: 16px;
      }

      .index-right {
        right: 16px;
      }

      .label {
        font-size: 12px;
        color: #808080;
      }
    }

    .back {
      padding: 38px 18px;
      background-color: #eaeaec;
      transform: rotateY(180deg);

      .qrcode {
        display: block;
        width: 100%;
      }

      .tips {
        margin-top: 16px;
        font-size: 14px;
        text-align: center;
        color: #222222;
      }

      .txt {
        position: absolute;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
        width: 100%;
        height: 142px;
        padding: 0 16px;
        text-align: center;
        background-color: #fff;
      }

      .title {
        padding: 24px 0 16px;
        font-weight: 500;
        font-size: 18px;
        color: #222222;
      }
      .desc {
        font-weight: normal;
        font-size: 14px;
        text-align: center;
        color: #808080;
      }
    }

    .mark {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 84px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      font-size: 12px;
      color: #fff;
      border-radius: 0 0 14px 0;
      background-color: rgba(#222222, 0.7);
    }
  }
}
</style>