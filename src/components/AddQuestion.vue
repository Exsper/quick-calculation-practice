<template>
  <div>
    <div id="summary">
      <table class="summaryTable">
        <tr>
          <td>第 {{ nowCount }} 题</td>
          <td>答对 {{ statInfo.right }} 次</td>
          <td>答错 {{ statInfo.wrong }} 次</td>
          <td>
            正确率：
            <span class=".ani"> {{ percentshow.toFixed(0) }} </span>%
          </td>
        </tr>
      </table>
      <table class="summaryTable">
        <tr>
          <td>平均用时： {{ averageTime.toFixed(2) }} 秒</td>
          <td>用时： {{ time.toFixed(2) }} 秒</td>
        </tr>
      </table>
    </div>
    <div id="question">
      <p class="qes">{{ questionText }}</p>
    </div>
    <br />
    <div id="options">
      <button
        :disabled="showResult"
        :class="resultClass1"
        @click="checkAnswer(0)"
      >
        {{ optionsText[0] }}
      </button>
      <br />
      <button
        :disabled="showResult"
        :class="resultClass2"
        @click="checkAnswer(1)"
      >
        {{ optionsText[1] }}
      </button>
      <br />
      <button
        :disabled="showResult"
        :class="resultClass3"
        @click="checkAnswer(2)"
      >
        {{ optionsText[2] }}
      </button>
      <br />
      <button
        :disabled="showResult"
        :class="resultClass4"
        @click="checkAnswer(3)"
      >
        {{ optionsText[3] }}
      </button>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
const { AddQuestion } = require("../common/js/Question");
export default {
  name: "Question",
  data() {
    return {
      questionText: "",
      optionsText: [],
      qu: AddQuestion,
      showResult: false,
      isRight: [false, false, false, false],
      isWrong: [false, false, false, false],
      percentshow: 0,
      nowCount: 0,
      time: 0,
      averageTime: 0,
    };
  },
  computed: {
    resultClass1() {
      return {
        right: this.showResult && this.isRight[0],
        wrong: this.showResult && this.isWrong[0],
      };
    },
    resultClass2() {
      return {
        right: this.showResult && this.isRight[1],
        wrong: this.showResult && this.isWrong[1],
      };
    },
    resultClass3() {
      return {
        right: this.showResult && this.isRight[2],
        wrong: this.showResult && this.isWrong[2],
      };
    },
    resultClass4() {
      return {
        right: this.showResult && this.isRight[3],
        wrong: this.showResult && this.isWrong[3],
      };
    },
    statInfo() {
      return this.$store.state.add;
    },
  },
  methods: {
    creatQuestion() {
      this.showResult = false;
      this.qu = new AddQuestion();
      this.questionText = this.qu.question;
      this.optionsText = this.qu.answerText;
      this.isRight = [false, false, false, false];
      this.isWrong = [false, false, false, false];
      this.isRight[this.qu.correctAnswerIndex] = true;
      this.nowCount = this.$store.state.add.total + 1;
      this.time = 0;
      this.timer = setInterval(() => {
        this.time += 0.01;
      }, 10);
    },
    checkAnswer(answerIndex) {
      clearInterval(this.timer);
      if (answerIndex === this.qu.correctAnswerIndex) {
        this.$store.commit("addCount", {
          type: "add",
          isRight: true,
          time: this.time,
        });
      } else {
        this.$store.commit("addCount", {
          type: "add",
          isRight: false,
          time: this.time,
        });
        this.isWrong[answerIndex] = true;
      }
      this.showResult = true;
      gsap.to(this, {
        duration: 0.5,
        percentshow: this.$store.state.add.percent || 0,
      });
      gsap.to(this, {
        duration: 0.5,
        averageTime: this.$store.state.add.averageTime || 0,
      });
      setTimeout(() => {
        this.creatQuestion();
      }, 3000);
    },
  },

  created: function () {
    this.creatQuestion();
  },
};
</script>
<style scoped>
button {
  background-color: white;
  border-color: gray;
  border-radius: 15px;
  color: black;
  font-family: Arial;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  width: 250px;
  cursor: pointer;
}

button.right {
  background-color: greenyellow;
}

button.wrong {
  background-color: red;
}

.qes {
  font-size: 32px;
}

#summary {
  text-align: center;
}
.summaryTable {
  margin: auto;
  border: 0px;
}

.summaryTable > tr > td {
  width: 200px;
}
</style>
