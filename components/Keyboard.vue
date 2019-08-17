<template>
  <div style="background:silver;">
    <div>
      <div style="height:40px;text-align:center;font-size:30px;color:black;">{{inputedString}}</div>
    </div>
    <div style="text-align: center;">
      <div style="display:inline-block;">
        <div class="buttons">
          <button
            @click.self="inputClick"
            v-bind:disabled="buttonDisabled.a"
            style="grid-row: 1;grid-column:10;"
          >あ</button>
          <button
            @click.self="inputClick"
            v-bind:disabled="buttonDisabled.i"
            style="grid-row: 2;grid-column:10;"
          >い</button>
          <button
            @click.self="inputClick"
            v-bind:disabled="buttonDisabled.u"
            style="grid-row: 3;grid-column:10;"
          >う</button>
          <button
            @click.self="inputClick"
            v-bind:disabled="buttonDisabled.e"
            style="grid-row: 4;grid-column:10;"
          >え</button>
          <button
            @click.self="inputClick"
            v-bind:disabled="buttonDisabled.o"
            style="grid-row: 5;grid-column:10;"
          >お</button>
          <button
            @click.self="inputClick"
            v-bind:disabled="buttonDisabled.ka"
            style="grid-row: 1;grid-column:9;"
          >か</button>
          <button
            @click.self="inputClick"
            v-bind:disabled="buttonDisabled.ki"
            style="grid-row: 2;grid-column:9;"
          >き</button>
          <button
            @click.self="inputClick"
            v-bind:disabled="buttonDisabled.ku"
            style="grid-row: 3;grid-column:9;"
          >く</button>
          <button
            @click.self="inputClick"
            v-bind:disabled="buttonDisabled.ke"
            style="grid-row: 4;grid-column:9;"
          >け</button>
          <button
            @click.self="inputClick"
            v-bind:disabled="buttonDisabled.ko"
            style="grid-row: 5;grid-column:9;"
          >こ</button>

          <button
            @click.self="inputClick"
            v-bind:disabled="buttonDisabled.sa"
            style="grid-row: 1;grid-column:8;"
          >さ</button>
          <button
            @click.self="inputClick"
            v-bind:disabled="buttonDisabled.si"
            style="grid-row: 2;grid-column:8;"
          >し</button>
          <button
            @click.self="inputClick"
            v-bind:disabled="buttonDisabled.su"
            style="grid-row: 3;grid-column:8;"
          >す</button>
          <button
            @click.self="inputClick"
            v-bind:disabled="buttonDisabled.se"
            style="grid-row: 4;grid-column:8;"
          >せ</button>
          <button
            @click.self="inputClick"
            v-bind:disabled="buttonDisabled.so"
            style="grid-row: 5;grid-column:8;"
          >そ</button>

          <button
            @click.self="inputClick"
            v-bind:disabled="buttonDisabled.ta"
            style="grid-row: 1;grid-column:7;"
          >た</button>
          <button
            @click.self="inputClick"
            v-bind:disabled="buttonDisabled.ti"
            style="grid-row: 2;grid-column:7;"
          >ち</button>
          <button
            @click.self="inputClick"
            v-bind:disabled="buttonDisabled.tu"
            style="grid-row: 3;grid-column:7;"
          >つ</button>
          <button
            @click.self="inputClick"
            v-bind:disabled="buttonDisabled.te"
            style="grid-row: 4;grid-column:7;"
          >て</button>
          <button
            @click.self="inputClick"
            v-bind:disabled="buttonDisabled.to"
            style="grid-row: 5;grid-column:7;"
          >と</button>

          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.na" style="grid-row: 1;grid-column:6;">な</button>
          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.ni" style="grid-row: 2;grid-column:6;">に</button>
          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.nu" style="grid-row: 3;grid-column:6;">ぬ</button>
          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.ne" style="grid-row: 4;grid-column:6;">ね</button>
          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.no" style="grid-row: 5;grid-column:6;">の</button>

          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.ha" style="grid-row: 1;grid-column:5;">は</button>
          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.hi" style="grid-row: 2;grid-column:5;">ひ</button>
          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.hu" style="grid-row: 3;grid-column:5;">ふ</button>
          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.he" style="grid-row: 4;grid-column:5;">へ</button>
          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.ho" style="grid-row: 5;grid-column:5;">ほ</button>

          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.ma" style="grid-row: 1;grid-column:4;">ま</button>
          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.mi" style="grid-row: 2;grid-column:4;">み</button>
          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.mu" style="grid-row: 3;grid-column:4;">む</button>
          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.me" style="grid-row: 4;grid-column:4;">め</button>
          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.mo" style="grid-row: 5;grid-column:4;">も</button>

          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.ya" style="grid-row: 1;grid-column:3;">や</button>
          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.yu" style="grid-row: 3;grid-column:3;">ゆ</button>
          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.yo" style="grid-row: 5;grid-column:3;">よ</button>

          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.ra" style="grid-row: 1;grid-column:2;">ら</button>
          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.ri" style="grid-row: 2;grid-column:2;">り</button>
          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.ru" style="grid-row: 3;grid-column:2;">る</button>
          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.re" style="grid-row: 4;grid-column:2;">れ</button>
          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.ro" style="grid-row: 5;grid-column:2;">ろ</button>

          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.wa" style="grid-row: 1;grid-column:1;">わ</button>
          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.wo" style="grid-row: 2;grid-column:1;">を</button>
          <button @click.self="inputClick" v-bind:disabled="buttonDisabled.wn" style="grid-row: 3;grid-column:1;">ん</button>

          <button @click.self="inputBs" v-bind:disabled="buttonDisabled.bs" style="grid-row: 4;grid-column:1;">BS</button>
          <button @click.self="inputClear" v-bind:disabled="buttonDisabled.clear" style="grid-row: 5;grid-column:1;">CL</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
const charLimit = 10;
export default Vue.extend({
  data: function () {
    return {
      inputedString: "",
      buttonDisabled: {
        a: false,
        i: false,
        u: false,
        e: false,
        o: false,
        ka: false,
        ki: false,
        ku: false,
        ke: false,
        ko: false,
        sa: false,
        si: false,
        su: false,
        se: false,
        so: false,
        ta: false,
        ti: false,
        tu: false,
        te: false,
        to: false,
        na: false,
        ni: false,
        nu: false,
        ne: false,
        no: false,
        ha: false,
        hi: false,
        hu: false,
        he: false,
        ho: false,
        ma: false,
        mi: false,
        mu: false,
        me: false,
        mo: false,
        ya: false,
        yu: false,
        yo: false,
        ra: false,
        ri: false,
        ru: false,
        re: false,
        ro: false,
        wa: false,
        wo: false,
        wn: false,
        bs: false,
        clear: false
      }
    }
  },
  mounted: function () {
  },
  methods: {
    updateEnableCharList: function (charList: string[] | null) {
      let allEnable = charList === null;//リストがゼロの時は全部有効
      this.buttonDisabled.a = !(allEnable || charList!.includes("あ"));
      this.buttonDisabled.i = !(allEnable || charList!.includes("い"));
      this.buttonDisabled.u = !(allEnable || charList!.includes("う"));
      this.buttonDisabled.e = !(allEnable || charList!.includes("え"));
      this.buttonDisabled.o = !(allEnable || charList!.includes("お"));

      this.buttonDisabled.ka = !(allEnable || charList!.includes("か"));
      this.buttonDisabled.ki = !(allEnable || charList!.includes("き"));
      this.buttonDisabled.ku = !(allEnable || charList!.includes("く"));
      this.buttonDisabled.ke = !(allEnable || charList!.includes("け"));
      this.buttonDisabled.ko = !(allEnable || charList!.includes("こ"));

      this.buttonDisabled.sa = !(allEnable || charList!.includes("さ"));
      this.buttonDisabled.si = !(allEnable || charList!.includes("し"));
      this.buttonDisabled.su = !(allEnable || charList!.includes("す"));
      this.buttonDisabled.se = !(allEnable || charList!.includes("せ"));
      this.buttonDisabled.so = !(allEnable || charList!.includes("そ"));

      this.buttonDisabled.ta = !(allEnable || charList!.includes("た"));
      this.buttonDisabled.ti = !(allEnable || charList!.includes("ち"));
      this.buttonDisabled.tu = !(allEnable || charList!.includes("つ"));
      this.buttonDisabled.te = !(allEnable || charList!.includes("て"));
      this.buttonDisabled.to = !(allEnable || charList!.includes("と"));

      this.buttonDisabled.na = !(allEnable || charList!.includes("な"));
      this.buttonDisabled.ni = !(allEnable || charList!.includes("に"));
      this.buttonDisabled.nu = !(allEnable || charList!.includes("ぬ"));
      this.buttonDisabled.ne = !(allEnable || charList!.includes("ね"));
      this.buttonDisabled.no = !(allEnable || charList!.includes("の"));

      this.buttonDisabled.ha = !(allEnable || charList!.includes("は"));
      this.buttonDisabled.hi = !(allEnable || charList!.includes("ひ"));
      this.buttonDisabled.hu = !(allEnable || charList!.includes("ふ"));
      this.buttonDisabled.he = !(allEnable || charList!.includes("へ"));
      this.buttonDisabled.ho = !(allEnable || charList!.includes("ほ"));

      this.buttonDisabled.ma = !(allEnable || charList!.includes("ま"));
      this.buttonDisabled.mi = !(allEnable || charList!.includes("み"));
      this.buttonDisabled.mu = !(allEnable || charList!.includes("む"));
      this.buttonDisabled.me = !(allEnable || charList!.includes("め"));
      this.buttonDisabled.mo = !(allEnable || charList!.includes("も"));

      this.buttonDisabled.ya = !(allEnable || charList!.includes("や"));
      this.buttonDisabled.yu = !(allEnable || charList!.includes("ゆ"));
      this.buttonDisabled.yo = !(allEnable || charList!.includes("よ"));

      this.buttonDisabled.ra = !(allEnable || charList!.includes("ら"));
      this.buttonDisabled.ri = !(allEnable || charList!.includes("り"));
      this.buttonDisabled.ru = !(allEnable || charList!.includes("る"));
      this.buttonDisabled.re = !(allEnable || charList!.includes("れ"));
      this.buttonDisabled.ro = !(allEnable || charList!.includes("ろ"));

      this.buttonDisabled.wa = !(allEnable || charList!.includes("わ"));
      this.buttonDisabled.wo = !(allEnable || charList!.includes("を"));
      this.buttonDisabled.wn = !(allEnable || charList!.includes("ん"));
    },
    inputClick: function (v: MouseEvent) {
      const inputChar = (v.target as HTMLButtonElement).innerText;
      if (this.inputedString.includes(inputChar)) {
        return;
      }
      this.inputedString += inputChar;
      if (charLimit < this.inputedString.length) {
        this.inputedString = this.inputedString.substring(this.inputedString.length - charLimit);
      }
      this.$emit("input", this.inputedString);
    },
    inputBs: function (v) {
      if (this.inputedString != "") {
        this.inputedString = this.inputedString.substring(0, this.inputedString.length - 1);
        this.$emit("input", this.inputedString);
      }
    },
    inputClear: function (v) {
      this.inputedString = "";
      this.$emit("input", this.inputedString);
    },
  },
})
</script>

<style lang="scss" scoped>
.buttons {
  display: grid;
  > button {
    width: 40px;
    height: 40px;
    font-size: 20px;
    background-color:buttonface;
    border:2px outset buttonface;
    color:black;
    &:disabled{
      color:graytext;
    }
  }
}
</style>
