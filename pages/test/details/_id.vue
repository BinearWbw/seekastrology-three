<template>
  <div class="details">
    <div class="details_main">
      <div class="details_main_left">
        <div class="details_main_left_top">
          <div class="details_main_left_top_menu">
            <a href="javascript:history.back(-1)">Quizzes</a> >
            <a href="" style="color: #ffffff">Quizzes Details</a>
          </div>
          <div class="details_main_left_top_content" v-if="!showResult">
            <div class="details_main_left_top_content_name">
              {{ dataInfo.name }}
            </div>
            <div
              class="details_main_left_top_content_desc"
              v-html="dataInfo.desc"
            ></div>
            <div class="details_main_left_top_content_questions">
              {{ currentQuestionIndex + 1 }}.{{
                dataInfo.questions[currentQuestionIndex].question
              }}
            </div>
            <div class="details_main_left_top_content_answer">
              <div
                class="details_main_left_top_content_answer_item"
                v-for="(item, index) in dataInfo.questions[currentQuestionIndex]
                  .answers"
                :key="index"
                :class="[
                  {
                    'green-border':
                      index == trueIndex && dataInfo.quest_type == 1,
                  },
                  {
                    'red-border':
                      index != trueIndex &&
                      checkedAnswer == index &&
                      dataInfo.quest_type == 1,
                  },
                ]"
              >
                <label
                  ><input
                    class="radio"
                    type="radio"
                    name="radio"
                    :value="index"
                    v-model="checkedAnswer"
                    @change="chooseAnswer(item, index)"
                    :disabled="disabledFlag"
                  />
                  <span>{{ item.answer }}</span>
                </label>
              </div>
            </div>
            <div class="details_main_left_top_content_btm">
              <div class="details_main_left_top_content_btm_count">
                <span id="currentQuestion">{{ currentQuestionIndex + 1 }}</span
                >/{{ dataInfo.questions.length }}
              </div>
              <div
                class="details_main_left_top_content_btm_resultbtn"
                id="RESULTBTN"
                @click="getQuizResult()"
                v-if="
                  currentQuestionIndex + 1 == dataInfo.questions.length &&
                  nextFlag
                "
              >
                Get Your Result
              </div>
              <div
                v-else
                class="details_main_left_top_content_btm_btn"
                @click="nextQuestion"
                id="NEXTBTN"
                :class="
                  nextFlag &&
                  currentQuestionIndex + 1 < dataInfo.questions.length
                    ? ''
                    : 'stop-next'
                "
              >
                Next >>
              </div>
            </div>
          </div>
          <div v-else>
            <div
              class="details_main_left_top_result"
              v-if="dataInfo.quest_type == 1"
            >
              <div class="details_main_left_top_result_score">
                Result:<span> {{ result.score }}</span>
              </div>
            </div>
            <div class="details_main_left_top_result" v-else>
              <div class="details_main_left_top_result_title">
                {{ result.title }}
              </div>
              <div class="details_main_left_top_result_desc">
                {{ result.desc }}
              </div>
            </div>
            <div
              id="RETAKE"
              class="details_main_left_top_result_retake"
              @click="retake()"
            >
              Retake This Result
            </div>
          </div>
        </div>
        <google-ad class="google_ad"></google-ad>
        <div class="details_main_left_btm">
          <div class="details_main_left_btm_title">MOST POPULAR QUIZZES</div>
          <div class="details_main_left_btm_list">
            <a
              :href="`${getIntersperseUrl}/test/details/${item.name
                .trim()
                .replace(/[^\w\d]/g, '-')
                .toLowerCase()}-${item.id}/`"
              class="details_main_left_btm_list_item"
              v-for="(item, index) in btmList"
              :key="item.id"
            >
              <div class="details_main_left_btm_list_item_img">
                <nuxt-img
                  :src="item.icon || '/'"
                  fit="cover"
                  :alt="item.name"
                ></nuxt-img>
              </div>
              <div class="details_main_left_btm_list_item_text">
                <div class="details_main_left_btm_list_item_text_name">
                  {{ item.name }}
                </div>
              </div>
            </a>
          </div>
        </div>
        <google-ad class="google_ad"></google-ad>
      </div>
      <div class="details_main_right">
        <google-ad class="google_ad"></google-ad>
        <google-ad class="google_ad"></google-ad>
      </div>
    </div>
    <div class="foot_components">
      <transition name="fade">
        <!-- <InternalSite></InternalSite> -->
        <el-daily-horoscope></el-daily-horoscope>
      </transition>
      <transition name="fade">
        <home-your-choice></home-your-choice>
      </transition>
      <transition name="fade">
        <tarot-all-tarot></tarot-all-tarot>
      </transition>
      <transition name="fade">
        <el-pairing></el-pairing>
      </transition>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      currentQuestionIndex: 0, //当前问题下标，默认0
      // dataInfo: {
      //   name: 'What’s In Your Immediate Future',
      //   desc: '<p>Will you find love, job success, more friends, or increased fortune? Select the answer that sounds most like you.</p>',
      //   quest_type: 2, //题目类型 (1 -> score; 2 -> bucket) 1是对错 2是最终分数
      //   questions: [
      //     //问题数组
      //     {
      //       //回答选项列表
      //       answers: [
      //         { answer: 'Someone you like', bucket: 0, correct: true },
      //         { answer: 'Someone you like', bucket: 0, correct: false },
      //         { answer: 'Someone you like', bucket: 0, correct: false },
      //         { answer: 'Someone you like', bucket: 0, correct: false },
      //       ],
      //       explanation: ['string'],
      //       hint: ['string'],
      //       icon: 'string',
      //       question: "When you daydream, you're usually thinking about:", //问题标题
      //     },
      //     {
      //       //回答选项列表
      //       answers: [
      //         { answer: 'string', bucket: 0, correct: true },
      //         { answer: 'string', bucket: 0, correct: false },
      //         { answer: 'string', bucket: 0, correct: false },
      //         { answer: 'string', bucket: 0, correct: false },
      //       ],
      //       explanation: ['string'],
      //       hint: ['string'],
      //       icon: 'string',
      //       question: 'string', //问题标题
      //     },
      //   ],
      //   quest_type: 2,
      //   //题目类型 (1 -> score; 2 -> bucket) 1为对错题，及时反馈 2为最终分数
      // },
      // btmList: [
      //   {
      //     id: 1,
      //     name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
      //     icon: require('../../../assets/img/resources/d_03.png'),
      //   },
      //   {
      //     id: 2,
      //     name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
      //     icon: require('../../../assets/img/resources/d_03.png'),
      //   },
      //   {
      //     id: 3,
      //     name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
      //     icon: require('../../../assets/img/resources/d_03.png'),
      //   },
      //   {
      //     id: 4,
      //     name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
      //     icon: require('../../../assets/img/resources/d_03.png'),
      //   },
      //   {
      //     id: 5,
      //     name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
      //     icon: require('../../../assets/img/resources/d_03.png'),
      //   },
      //   {
      //     id: 6,
      //     name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
      //     icon: require('../../../assets/img/resources/d_03.png'),
      //   },
      //   {
      //     id: 7,
      //     name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
      //     icon: require('../../../assets/img/resources/d_03.png'),
      //   },
      //   {
      //     id: 8,
      //     name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
      //     icon: require('../../../assets/img/resources/d_03.png'),
      //   },
      // ],
      answers: [], //用户选择的每道问题答案
      nextFlag: false, //下一题状态
      checkedAnswer: -1, //用户点击答案的下标
      trueIndex: -1, //正确答案下标
      showResult: false, //展示结果
      result: {}, //返回的数据
      disabledFlag: false, //禁用单选框状态
    }
  },
  async asyncData({ error, route, $apiList, params, $utils }) {
    try {
      let totalNum = 0,
        totalPage = 1,
        search = {
          page: 1,
          size: 10,
        }
      let [dataInfo, btmList] = await Promise.all([
        /**顶部问答 */
        $apiList.test
          .getQuizDetail({
            origin: process.env.origin,
            id: params.id.replace(
              /^.*?(\d*)$/,
              (str, match, index) => match || '0'
            ),
          })
          .then((res) => {
            return res || null
          }),
        /**底部列表 */
        $apiList.test
          .getRecList({
            origin: process.env.origin,
            rand: true,
          })
          .then((res) => {
            return res?.list || null
          }),
      ])

      return {
        dataInfo,
        btmList,
        totalNum,
        totalPage,
        search,
      }
    } catch (e) {
      error({ statusCode: e.code, message: e.msg })
    }
  },
  methods: {
    /**重新做题 */
    retake() {
      //改变showResult
      this.showResult = false
      //将currentQuestionIndex改为0，回到第一题
      this.currentQuestionIndex = 0
      //更改radio禁用状态，用户可以点击
      this.disabledFlag = false
      //禁用下一题按钮
      this.nextFlag = false
      //重置单选框选中状态
      this.checkedAnswer = -1
      //重置正确答案下标
      this.trueIndex = -1
      //重置回答数组
      this.answers = []
    },
    /**获取最终分数或者正确答案和描述 */
    getQuizResult() {
      this.$apiList.test
        .getQuizResult({
          origin: process.env.origin,
          id: this.dataInfo.id,
          answers: this.answers,
        })
        .then((res) => {
          this.showResult = true
          console.log(res)
          this.result = res
        })
    },
    /**选择答案 */
    chooseAnswer(item, index) {
      //1为对错 2为非对错题
      if (!this.disabledFlag) {
        //对错
        if (this.dataInfo.quest_type == 1) {
          /**
           * 如果用户选择的不正确：
           * 1.将用户选择的答案标记红色边框
           * 2.标正确答案标记绿色变边框
           * 否则：
           * 将用户选择的答案标记绿色边框
           */
          //获取用户点击的下标
          this.checkedAnswer = index
          //获取本道题对的答案下标
          this.trueIndex = this.dataInfo.questions[
            this.currentQuestionIndex
          ].answers.findIndex((item) => item.correct === true)
          //判断回答数组当前下标是否为undefined，如果是才赋值
          if (this.answers[this.currentQuestionIndex] == undefined) {
            this.answers[this.currentQuestionIndex] = item.bucket
            //不让用户重新选答案,禁用radio
            this.disabledFlag = true
          }
        } else {
          //非对错题-直接赋值 用户可改变选择的答案
          this.answers[this.currentQuestionIndex] = item.bucket
        }
      }
      //选择答案后才能点击下一题
      this.nextFlag = true
    },
    /**下一题 */
    nextQuestion() {
      if (!this.nextFlag) {
        return
      }
      if (this.currentQuestionIndex + 1 == this.dataInfo.questions.length) {
        return
      }
      //更改radio禁用状态
      this.disabledFlag = false
      //禁用下一题按钮
      this.nextFlag = false
      //重置单选框选中状态
      this.checkedAnswer = -1
      //重置正确答案下标
      this.trueIndex = -1
      //翻页
      this.currentQuestionIndex++
    },
    /**获取问题详情 */
    // getDataInfo(item) {
    //   //重置状态
    //   this.retake()
    //   this.$apiList.test
    //     .getQuizDetail({
    //       origin: process.env.origin,
    //       id: item.id,
    //     })
    //     .then((res) => {
    //       this.dataInfo = res
    //     })
    //   // 实现滚动效果
    //   let top = document.documentElement.scrollTop || document.body.scrollTop
    //   const timeTop = setInterval(() => {
    //     document.body.scrollTop = document.documentElement.scrollTop = top -= 50
    //     if (top <= 0) {
    //       clearInterval(timeTop)
    //     }
    //   }, 10)
    // },
  },
  computed: {
    ...mapGetters(['getIntersperseUrl']),
  },
}
</script>
<style lang="scss" scope>
@use 'sass:math';
$block: 220px;
$spacing: 55px;

.green-border {
  border: 1px solid #4beb6e !important;
}

.red-border {
  border: 1px solid #ff3e3e !important;
}
.stop-next {
  color: rgba(255, 255, 255, 0.7) !important;
  background: transparent !important;
  border: 1px solid rgba(255, 255, 255, 0.7) !important;
  pointer-events: none !important;
}
.details {
  width: 100%;
  &_main {
    width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 96px;
    &_left {
      width: 1046px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &_top {
        padding: 24px 118px 103px 118px;
        background: rgba(1, 1, 2, 0.9);
        border-radius: 30px;
        width: 100%;
        &_menu {
          padding-top: 24px;
          a {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            /* identical to box height, or 133% */
            color: rgba(255, 255, 255, 0.7);
          }
        }
        &_content {
          margin-top: 48px;
          &_name {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 30px;
            color: rgba(255, 255, 255, 0.7);
          }
          &_desc {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: rgba(255, 255, 255, 0.7);
            margin-top: 16px;
          }
          &_questions {
            margin-top: 48px;
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 30px;
            color: #ffffff;
          }
          &_answer {
            display: grid;
            grid-template-columns: repeat(2, 338px);
            grid-gap: 16px;
            margin-top: 16px;
            &_item {
              width: 338px;
              min-height: 60px;
              background: rgba(255, 255, 255, 0.1);
              border-radius: 18px;
              display: flex;
              align-items: center;
              padding: 10px 10px;
              border: 1px solid transparent;
              cursor: pointer;
              label {
                font-family: 'Rubik';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 22px;
                color: #ffffff;
                width: 100%;
                display: flex;
                align-items: center;
                word-break: break-all;
                cursor: pointer;
                height: 100%;
                span {
                  width: 100%;
                  cursor: pointer;
                  // word-break: break-all;
                }
                input {
                  margin-left: 31px;
                  margin-right: 22px;
                  border: 1px solid rgba(255, 255, 255, 0.6);
                  height: 18px;
                  width: 18px;
                  background: rgba(255, 255, 255, 0.1);
                  border-radius: 50%;
                  appearance: none;
                  -webkit-appearance: none; /**隐藏原生控件**/
                  flex-shrink: 0;
                  cursor: pointer;
                  &:checked {
                    position: relative;
                    &::before {
                      display: block;
                      position: absolute;
                      content: '';
                      background: url('../../../assets/img/resources/checked.png')
                        no-repeat center center;
                      width: 21px;
                      height: 16px;
                    }
                  }
                }
              }
            }
          }
          &_btm {
            margin-top: 32px;
            display: flex;
            align-items: center;
            &_count {
              font-family: 'Rubik';
              font-style: normal;
              font-weight: 400;
              font-size: 22px;
              line-height: 30px;
              color: rgba(255, 255, 255, 0.7);
            }
            &_btn {
              margin-left: 6px;
              width: 119px;
              height: 44px;
              left: 171px;
              top: 302px;
              background: #ffffff;
              border-radius: 42px;
              font-family: 'Rubik';
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 22px;
              color: #000000;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
            }
            &_resultbtn {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 179px;
              height: 44px;
              background: #9747ff;
              border-radius: 42px;
              font-family: 'Rubik';
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 22px;
              color: #ffffff;
              margin-left: 9px;
              cursor: pointer;
            }
          }
        }
        &_result {
          margin-top: 46px;
          &_score {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 30px;
            /* identical to box height, or 136% */
            color: #ffffff;
            span {
              color: #9747ff;
            }
          }
          &_title {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 30px;
            color: rgba(255, 255, 255, 0.7);
          }
          &_desc {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: rgba(255, 255, 255, 0.7);
            margin-top: 16px;
          }
          &_retake {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 300px;
            height: 46px;
            background: rgba(1, 1, 2, 0.9);
            border-radius: 30px;
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            color: rgba(255, 255, 255, 0.7);
            border: 1px solid rgba(255, 255, 255, 0.7);
            margin-top: 50px;
            cursor: pointer;
          }
        }
      }
      &_btm {
        width: 100%;
        margin-top: 48px;
        &_title {
          font-family: 'Cinzel Decorative';
          font-style: normal;
          font-weight: 700;
          font-size: 26px;
          line-height: 36px;
          text-transform: uppercase;
          color: #ffffff;
        }
        &_list {
          display: grid;
          grid-template-columns: repeat(4, 220px);
          grid-gap: 55px;
          margin-top: 24px;
          &_item {
            display: block;
            width: 220px;
            &_img {
              width: 220px;
              height: 220px;
              object-fit: cover;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
            &_text {
              margin-top: 16px;
              &_name {
                font-family: 'Rubik';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 22px;
                text-align: center;
                color: rgba(255, 255, 255, 0.7);
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
              }
            }
          }
        }
      }
      .google_ad {
        width: 924px;
        height: 114px;
        background: #555761;
        margin-top: 48px;
        overflow: hidden;
      }
    }
    &_right {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .google_ad {
        width: 300px;
        height: 600px;
        background: #555761;
        margin-bottom: 96px;
        overflow: hidden;
      }
    }
  }
}
@media (max-width: (4 * $block + 3 * $spacing + 354px)) {
  .details {
    &_main {
      width: 90%;
      &_left {
        width: 70%;
        &_top {
          padding: 24px 60px 50px;
          &_content {
            &_answer {
              grid-gap: 6px;
            }
          }
        }
        .google_ad {
          width: 100%;
        }
        &_btm {
          &_list {
            grid-template-columns: repeat(3, 220px);
            justify-content: center;
          }
        }
      }
    }
  }
}
@media (max-width: (3 * $block + 2 * $spacing + 354px + 100px)) {
  .details {
    &_main {
      &_left {
        &_top {
          padding: 12px 30px 25px;
        }
        &_btm {
          &_list {
            grid-gap: 20px;
          }
        }
      }
    }
  }
}
@media (max-width: (3 * $block + 2 * $spacing + 354px)) {
  .details {
    &_main {
      &_left {
        &_top {
          &_content {
            &_answer {
              grid-template-columns: repeat(1, 338px);
            }
          }
        }
        &_btm {
          &_list {
            grid-gap: 20px;
          }
        }
      }
      &_right {
        .google_ad {
          width: 90%;
        }
      }
    }
  }
}
@media (max-width: (3 * $block + 2 * $spacing + 300px)) {
  .details {
    &_main {
      &_left {
        &_top {
          &_content {
            &_answer {
              grid-gap: 20px;
            }
          }
        }
        &_btm {
          &_list {
            grid-template-columns: repeat(2, 220px);
          }
        }
      }
    }
  }
}
@media (max-width: (2 * $block + 1 * $spacing + 350px)) {
  .details {
    &_main {
      &_right {
        align-items: flex-start;
        margin-left: 20px;
        .google_ad {
          width: 70%;
        }
      }
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .details {
    &_main {
      width: 100%;
      padding: 0 16 * $pr;
      &_left {
        width: 100%;
        &_top {
          padding: 0 16 * $pr;
          &_menu {
            margin-top: 24 * $pr;
            padding: 0;
            a {
              font-size: 12 * $pr;
              line-height: 16 * $pr;
            }
          }
          &_content {
            margin-top: 32 * $pr;
            &_name,
            &_desc {
              display: none;
            }
            &_questions {
              font-size: 22 * $pr;
              line-height: 30 * $pr;
            }
            &_answer {
              grid-gap: 8 * $pr;
              grid-template-columns: repeat(1, 311 * $pr);
              margin-top: 16 * $pr;
              &_item {
                width: 311 * $pr;
                height: 60 * $pr;
                border-radius: 18 * $pr;
                label {
                  font-size: 16 * $pr;
                  line-height: 22 * $pr;
                  input {
                    margin-left: 31 * $pr;
                    margin-right: 22 * $pr;
                    height: 18 * $pr;
                    width: 18 * $pr;
                    &:checked {
                      &::before {
                        width: 18 * $pr;
                        height: 18 * $pr;
                      }
                    }
                  }
                }
              }
            }
            &_btm {
              justify-content: flex-end;
              &_count {
                font-family: 'Rufina';
                font-style: normal;
                font-weight: 400;
                font-size: 22 * $pr;
                line-height: 30 * $pr;
              }
              &_btn {
                width: 119 * $pr;
                height: 44 * $pr;
                font-size: 16 * $pr;
                line-height: 22 * $pr;
                border-radius: 42 * $pr;
                margin-left: 12 * $pr;
              }
            }
          }
        }
        .google_ad {
          width: 343 * $pr;
          height: 299 * $pr;
        }
        &_btm {
          margin-top: 48 * $pr;
          &_title {
            font-size: 22 * $pr;
            line-height: 30 * $pr;
          }
          &_list {
            grid-gap: 5 * $pr;
            grid-template-columns: repeat(2, 169 * $pr);
            margin-top: 22 * $pr;
            &_item {
              width: 169 * $pr;
              &_img {
                width: 169 * $pr;
                height: 169 * $pr;
                object-fit: cover;
              }
              &_text {
                margin-top: 8 * $pr;
                &_name {
                  font-size: 14 * $pr;
                  line-height: 18 * $pr;
                }
              }
            }
          }
        }
      }
      &_right {
        display: none;
      }
    }
  }
}
</style>
