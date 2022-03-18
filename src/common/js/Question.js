const Decimal = require("decimal.js");

const Calc = {
  /**
   * 加法
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  add: function (a, b) {
    return new Decimal(a).add(new Decimal(b)).toNumber();
  },
  /**
   * 减法
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  sub: function (a, b) {
    return new Decimal(a).sub(new Decimal(b)).toNumber();
  },
  /**
   * 乘法
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  mul: function (a, b) {
    return new Decimal(a).mul(new Decimal(b)).toNumber();
  },
  /**
   * 除法
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  div: function (a, b) {
    return new Decimal(a).div(new Decimal(b)).toNumber();
  },
  /**
   * 幂
   * @param {number} a 底数
   * @param {number} b 指数
   * @returns {number}
   */
  pow: function (a, b) {
    return new Decimal(a).pow(new Decimal(b)).toNumber();
  },
};

/**
 * 生成随机整数
 * @param {number} max 最大值
 * @param {number} min 最小值，默认1
 * @returns {number} 随机整数
 */
const getRandomInt = function (max, min = 1) {
  return parseInt(Math.random() * (max - min + 1) + min);
};

/**
 * 多项加法
 */
class AddQuestion {
  /**
   * @param {number} ANSWERCOUNT 选项数
   */
  constructor(ANSWERCOUNT = 4) {
    this.ANSWERCOUNT = ANSWERCOUNT;
    this.nums = [];
    this.correctAnswer = 0;
    this.correctAnswerIndex = 0;
    this.answers = [];
    this.answerText = [];
    this.question = "";
    this.gen();
  }

  gen() {
    /** 有效位数 */
    let EFFC = getRandomInt(8, 5);
    /** 小数位数 */
    let DECIC = getRandomInt(EFFC, 0);
    let DIVIDEVALUE = Math.pow(10, DECIC);
    /** 数字个数 */
    let NUMC = getRandomInt(8, 3);
    let ERRORVALUE = Calc.div(
      getRandomInt(100, 1) * Math.pow(10, EFFC - 4) * NUMC,
      DIVIDEVALUE
    );
    this.correctAnswer = 0;
    for (let i = 0; i < NUMC; i++) {
      let num = getRandomInt(Math.pow(10, EFFC), Math.pow(10, EFFC - 2));
      num = Calc.div(num, DIVIDEVALUE);
      this.nums.push(num);
      this.correctAnswer = Calc.add(this.correctAnswer, num);
    }
    this.answers = this.getOptions(
      this.correctAnswer,
      ERRORVALUE,
      this.ANSWERCOUNT
    );
    this.question = this.nums.join(" + ");
    this.answerText = this.answers.map(
      (answer, index) =>
        String.fromCharCode(65 + index) + ". " + answer.toFixed(DECIC)
    );
  }

  /**
   * 获取选项
   * @param {number} correctAnswer 正确答案
   * @param {number} error 答案间的误差
   * @param {number} ANSWERCOUNT 选项数
   * @returns {Array<number>} 选项，从小到大排列
   */
  getOptions(correctAnswer, error, ANSWERCOUNT = 4) {
    let biggerCount = getRandomInt(ANSWERCOUNT - 1, 0);
    let answers = [];
    this.correctAnswerIndex = ANSWERCOUNT - biggerCount - 1;
    answers.push(correctAnswer);
    for (let i = 0; i < biggerCount; i++) {
      let num = Calc.add(correctAnswer, Calc.mul(error, i + 1));
      answers.push(num);
    }
    for (let i = 0; i < ANSWERCOUNT - biggerCount - 1; i++) {
      let num = Calc.sub(correctAnswer, Calc.mul(error, i + 1));
      answers.unshift(num);
    }
    return answers;
  }
}

class MulQuestion {
  /**
   * @param {number} ANSWERCOUNT 选项数
   */
  constructor(ANSWERCOUNT = 4) {
    this.ANSWERCOUNT = ANSWERCOUNT;
    this.m1 = 0;
    this.m2 = 0;
    this.correctAnswer = 0;
    this.correctAnswerIndex = 0;
    this.answers = [];
    this.answerText = [];
    this.question = "";
    this.gen();
  }

  gen() {
    /** 有效位数 */
    let M1EFFC = getRandomInt(8, 5);
    let M2EFFC = getRandomInt(5, 3);
    /** 小数位数 */
    let M1DECIC = getRandomInt(3, 0);
    let M2DECIC = getRandomInt(3, 2);
    let M1DIVIDEVALUE = Math.pow(10, M1DECIC);
    let M2DIVIDEVALUE = Math.pow(10, M2DECIC);
    this.correctAnswer = 0;
    let num1 = getRandomInt(Math.pow(10, M1EFFC), Math.pow(10, M1EFFC - 3));
    this.m1 = Calc.div(num1, M1DIVIDEVALUE);
    let num2 = getRandomInt(Math.pow(10, M2EFFC), 100);
    this.m2 = Calc.div(num2, M2DIVIDEVALUE);
    this.m2 = Calc.div(this.m2, 100); // 百分数形式
    if (this.m2 < 0.01) this.m2 = Calc.mul(this.m2, 10);
    if (this.m2 > 2) this.m2 = Calc.div(this.m2, 10); // 一般不会大于200%
    this.correctAnswer = Calc.mul(this.m1, this.m2);
    let ERRORMUL = Calc.add(Calc.div(getRandomInt(300, 100), 10000), 1);
    this.answers = this.getOptions(
      this.correctAnswer,
      ERRORMUL,
      this.ANSWERCOUNT
    );
    this.question =
      this.m1 + " x " + Calc.mul(this.m2, 100).toFixed(M2DECIC) + "%";
    this.answerText = this.answers.map(
      (answer, index) =>
        String.fromCharCode(65 + index) + ". " + answer.toFixed(M1DECIC)
    );
  }

  /**
   * 获取选项
   * @param {number} correctAnswer 正确答案
   * @param {number} errorMul 答案间的比值，>1
   * @param {number} ANSWERCOUNT 选项数
   * @returns {Array<number>} 选项，从小到大排列
   */
  getOptions(correctAnswer, errorMul, ANSWERCOUNT = 4) {
    let biggerCount = getRandomInt(ANSWERCOUNT - 1, 0);
    let answers = [];
    this.correctAnswerIndex = ANSWERCOUNT - biggerCount - 1;
    answers.push(correctAnswer);
    for (let i = 0; i < biggerCount; i++) {
      let num = Calc.mul(correctAnswer, Calc.pow(errorMul, i + 1));
      answers.push(num);
    }
    for (let i = 0; i < ANSWERCOUNT - biggerCount - 1; i++) {
      let num = Calc.div(correctAnswer, Calc.pow(errorMul, i + 1));
      answers.unshift(num);
    }
    return answers;
  }
}

class Deci2frac {
  /**
   * @param {number} ANSWERCOUNT 选项数
   */
  constructor(ANSWERCOUNT = 4) {
    this.ANSWERCOUNT = ANSWERCOUNT;
    this.dict = {
      "11.1%": "1/9",
      "12.5%": "1/8",
      "14.3%": "1/7",
      "16.7%": "1/6",
      "20.0%": "1/5",
      "22.2%": "2/9",
      "25.0%": "1/4",
      "28.6%": "2/7",
      "33.3%": "1/3",
      "37.5%": "3/8",
      "40.0%": "2/5",
      "42.9%": "3/7",
      "44.4%": "4/9",
      "50.0%": "1/2",
      "55.6%": "5/9",
      "57.1%": "4/7",
      "60.0%": "3/5",
      "62.5%": "5/8",
      "66.7%": "2/3",
      "71.4%": "5/7",
      "75.0%": "3/4",
      "77.8%": "7/9",
      "80.0%": "4/5",
      "83.3%": "5/6",
      "85.7%": "6/7",
      "87.5%": "7/8",
      "88.9%": "8/9",
    };
    this.correctAnswer = "";
    this.correctAnswerIndex = 0;
    this.pickQuestions = [];
    this.answers = [];
    this.answerText = [];
    this.question = "";
    this.gen();
  }

  gen() {
    let decis = [];
    let fracs = [];
    Object.keys(this.dict).map((key) => {
      decis.push(key);
      fracs.push(this.dict[key]);
    });
    for (let i = 0; i < this.ANSWERCOUNT; i++) {
      let num = getRandomInt(decis.length - 1, 0);
      this.pickQuestions.push(...decis.splice(num, 1));
      this.answers.push(...fracs.splice(num, 1));
    }
    this.correctAnswerIndex = getRandomInt(this.ANSWERCOUNT - 1, 0);
    let questnum = parseFloat(this.pickQuestions[this.correctAnswerIndex]);
    let error = getRandomInt(200, -200);
    questnum = Calc.add(questnum, Calc.div(error, 1000));
    this.question = "与 " + questnum.toFixed(2) + "% 最相近的是";
    this.correctAnswer = this.answers[this.correctAnswerIndex];
    this.answerText = this.answers;
  }
}

module.exports = { AddQuestion, MulQuestion, Deci2frac };
