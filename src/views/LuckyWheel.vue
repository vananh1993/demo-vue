<template lang="html">
    <div id="app">
        <div class="wheel__wrapper">
            <button class="wheel__controller" @click="turning" :disabled='isShowResult'>
                <h6 class="controller__label">PRESS</h6>
            </button>
            <div class="content__wrapper" ref="roulette" @transitionend="turningEnd">
                <div class="sector__wrapper">
                    <div class="sector" :class="awardIdx === i && isShowResult? 'is-highlight' : ''" v-for="(p, i) in prizes" :style="`transform: rotate(${0.25 - (1/length)/2 - i*(1/length)}turn) skew(${90 - 360/length}deg)`"></div>
                </div>
                <div class="label__wrapper">
                    <div class="label" v-for="(p, i) in prizes" :style="`transform: translateX(-50%) rotate(${-i*(1/length)}turn)`" :class="awardIdx === i && isShowResult ? 'is-highlight' : ''">
                        <!-- <i class="icon" :class="p.icon"></i> -->
                        <h2 class="text">{{ p.text }}</h2>
                    </div>
                </div>
            </div>
            <div class="result__wrapper" :class="isShowResult ? 'is-show': ''">
                <div class="result__inner">
                    <div class="congratute">WELL DONE!</div>
                    <div class="result__text">
                        <h1 class="prefix-award">YOU GET A FREE...</h1>
                        <h1 class="award">{{ result }}!</h1>
                    </div>
                </div>
                <div class="result-bg-dec__wrapper">
                    <!-- <i v-for="i in 8" class="result-bg-dec" :class="prizes[awardIdx].icon"></i> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    // const result = 'Award';
    // const isDisabled = true;
    export default {
        // el: '#app',
        computed: {
            length() {
                return this.prizes.length;
            },
            result() {
                if (this.awardIdx === -1) {
                    return null;
                } else {
                    return this.prizes[this.awardIdx]?.text;
                }
            },
            awardIdx() {
                return Math.floor(this.targetDegrees / this.stepDegrees);
                return (Math.round((this.turn - Math.floor(this.turn)) * this.length) % this.length);
            },
            stepDegrees() {
                return 360 / this.length;
            },
            targetIndex() {
                return this.prizes.findIndex((i) => i.text === this.resultText);
            },
            targetDegrees() {
                return this.targetIndex * this.stepDegrees;
            },
            wheelDegrees() {
                return this.targetDegrees + Math.ceil((Math.random() + 3) * 4) * 360;
            }
        },
        data() {
            return {
                resultText: null,
                prizes: [],
                r: 0,
                isShowResult: false
            };
        },
        methods: {
            turning() {
                this.isShowResult = false;
                this.r = Math.random();
                this.$refs.roulette.style.transform = `rotate(${this.wheelDegrees}deg)`;
                this.$refs.roulette.classList.add("turning");
            },
            turningEnd() {
                this.$refs.roulette.classList.remove("turning");
                this.isShowResult = true;
            }
        },
        async created() {
            const {
                data
            } = await axios.get('./data/wheel.json');
            const resultData = await axios.get('./data/resultWhell.json').then(response => (this.resultText = response.data.result))
            this.prizes = data;
            // this.resultText = resultData;
            // console.log(this.resultText);
            // this.resultText = data.filter((i) => i.isResult)[0].text;
        },
        mounted() {}
    }
</script>
<style lang="scss" scoped>
    @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:700i");

    #app {
        font-family: "Segoe UI", "Avenir", Helvetica, Arial, sans-serif, 微軟正黑體;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #5858b9;
        overflow: hidden;
        position: relative;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        // outline: 1px solid coral;
    }

    .wheel__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        // min-width: 1000px;
        overflow: hidden;

        .wheel__controller {
            position: fixed;
            width: 128px;
            height: 230px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, calc(-50% - 51px));
            z-index: 3;
            // background-image: url("~@/assets/lucky-wheel/hand.svg");
            background-repeat: no-repeat;
            background-position: center bottom;
            background-size: contain;
            background-color: transparent;
            border: 0px;
            // overflow: visible;
            display: flex;
            align-items: flex-end;
            padding: 10px;
            overflow: hidden;

            &[disabled="disabled"] {

                // opacity: 0.5;
                .controller__label {
                    background: gray;
                    color: #727272;
                }
            }

            .controller__label {
                background-color: #1f1172;
                width: 100%;
                height: 107px;
                border-radius: 50%;
                color: #ff00ba;
                font-size: 28px;
                font-weight: bold;
                text-align: center;
                line-height: 107px;
            }
        }

        .result__wrapper {
            position: absolute;
            width: 100%;
            height: 237px;
            font-weight: bold;
            background-color: #343baa;
            letter-spacing: -1px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: none;
            opacity: 0;
            overflow: hidden;

            &.is-show {
                opacity: 1;
                transition: opacity 0.3s;
            }

            .result__inner {
                width: 100%;
                max-width: 1100px;
                padding-left: 50px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .congratute {
                    flex: 0 0 182px;
                    font-size: 72px;
                    color: white;
                    text-align: left;
                    letter-spacing: -2px;
                    line-height: 1.1;
                }

                .result__text {
                    flex: 0 0 255px;

                    .prefix-award {
                        color: white;
                        font-size: 32px;
                        font-weight: lighter;
                    }

                    .award {
                        width: fit-content;
                        font-size: 72px;
                        line-height: 85px;
                        color: #ff00ba;
                        position: relative;
                        letter-spacing: -3px;

                        &::after {
                            content: "";
                            position: absolute;
                            bottom: 1px;
                            left: 0;
                            width: 100%;
                            height: 4px;
                            background-color: #ff00ba;
                        }
                    }
                }
            }

            .result-bg-dec__wrapper {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;

                .result-bg-dec {
                    font-size: 42px;
                    opacity: 0.3;
                    color: #1f1172;
                    position: absolute;

                    &:nth-child(1) {
                        left: -20px;
                        top: 60%;
                        transform: rotate(30deg);
                    }

                    &:nth-child(2) {
                        top: 3px;
                        left: 22%;
                        transform: rotate(-30deg);
                    }

                    &:nth-child(3) {
                        bottom: -16px;
                        left: 240px;
                    }

                    &:nth-child(4) {
                        top: -12px;
                        left: 6%;
                        transform: rotate(30deg);
                    }

                    &:nth-child(5) {
                        top: -5px;
                        right: 20%;
                    }

                    &:nth-child(6) {
                        bottom: -10px;
                        right: 16%;
                        transform: rotate(-30deg);
                    }

                    &:nth-child(7) {
                        right: -3px;
                        top: 20px;
                        transform: rotate(30deg);
                    }

                    &:nth-child(8) {
                        right: 5%;
                        top: 50%;
                    }
                }
            }
        }

        .content__wrapper {
            width: calc(100% - 40px);
            max-width: 540px;
            border-radius: 50%;
            position: absolute;
            overflow: hidden;
            z-index: 2;
            transition: all 0;

            &.turning {
                transition: all 1s cubic-bezier(0, 0.48, 0.13, 1);
            }

            .sector__wrapper {
                position: absolute;
                top: 2.5%;
                left: 2.5%;
                width: 95%;
                height: 95%;
                border-radius: 50%;
                overflow: hidden;

                .sector {
                    position: absolute;
                    width: 50%;
                    height: 50%;
                    left: 50%;
                    top: 50%;
                    margin-top: -50%;
                    margin-left: -50%;
                    transform-origin: 100% 100%;
                    font-size: 24px;
                    display: flex;
                    border: 1px solid black;

                    &:nth-child(odd) {
                        background-color: #f0beff;
                    }

                    &:nth-child(even) {
                        background-color: #343baa;
                    }

                    &.is-highlight {
                        background-color: #ff00ba;
                    }
                }
            }

            .label__wrapper {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;

                .label {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    height: 50%;
                    padding: 50px;
                    transform-origin: 50% 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    &:nth-child(odd) {
                        color: #343baa;
                    }

                    &:nth-child(even) {
                        color: #f0beff;
                    }

                    &.is-highlight {
                        color: white;
                    }

                    .text,
                    .icon {
                        font-size: 32px;
                        font-weight: bold;
                        letter-spacing: -1.5px;

                        @media only screen and (max-width: 600px) {
                            font-size: 15px;
                        }
                    }

                    .icon {
                        font-size: 44px;
                    }
                }
            }

            &::after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                // background: url("~@/assets/lucky-wheel/wheel-outside.svg") no-repeat;
                background-position: center center;
                background-size: contain;
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }

            &::before {
                content: "";
                display: block;
                padding-top: 100%;
                border-radius: 50%;
            }
        }
    }
</style>
