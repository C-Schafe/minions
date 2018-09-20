!function(){
    window.code = `
/*
* 面试官 您好！
**************
* 我叫蒋明阳，自学前端半年
*************************
* 下面我来展示下用CSS画一个小黄人~
*********************************
*/
/*首先画个身体*/
.body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffd978;
    height: 43.75vmin;
    width: 35vmin;
    border-radius: 24vmin 24vmin 3.3vmin 3.3vmin;
    overflow: hidden;
    position: relative;
    z-index: -2;
}
/*来俩眼睛*/
.left-eye-ball,.right-eye-ball {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    height: 9vmin;
    width: 9vmin;
    border-radius: 50%;
    background-color: #fff;
}
.left-pupil,.right-pupil {
    border: 1px solid #2c324a;
    height: 4.62vmin;
    width: 4.62vmin;
    background-color: #2c324a;
    border-radius: 50%;
    transform: translateY(-0.54vmin);
    position: relative;
}
.left-pupil:after,.right-pupil:after {
    content: "";
    display: block;
    height: 2.95vmin;
    width: 2.95vmin;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: -1vmin;
    right: -1vmin;
}
.left-eyes,.right-eyes {
    position: absolute;
    top: 7.57vmin;
}
.left-eyes {
    left: 2.16vmin;
}
.right-eyes {
    right: 2.16vmin;
}

/*带上眼镜*/
.left-inner-circle,.right-inner-circle {
    border: 1.47vmin solid #7c8ca6;
    border-radius: 50%;
}
.left-outer-circle,.right-outer-circle {
    border: 1.96vmin solid #bec9e5;
    border-radius: 50%;
}
/*画上眼镜的细节*/
.glass-holder {
    width: 32.35vmin;
    height: 5.70vmin;
    background-color: #7e8ca7;
    border-radius: 0.88vmin;
    position: absolute;
    top: 12.78vmin;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
}
.holder-line {
    height: 1.28vmin;
    background-color: #50617b;
    width: 100%;
}
.belt {
    background-color: #2c324a;
    height: 3.92vmin;
    width: 100%;
    position: absolute;
    top: 13.57vmin;
    left: 0;
}
/*添加镜框的齿轮*/
.left-gear,.right-gear {
    height: 18.68vmin;
    width: 2.46vmin;
    background-color: #7e8ca7;
    border-radius: 10vmin;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -1.47vmin;
    z-index: -1;
}
.left-gear:before,.left-gear:after,.right-gear:before,.right-gear:after {
    content: "";
    display: block;
    height: 10vmin;
    width: 2.46vmin;
    background-color: #7e8ca7;
    position: absolute;
    border-radius: 10vmin;
}
.left-gear:before,.left-gear:after {
    right: 2.5vmin;
}
.left-gear:before {
    top: 1vmin;
    transform: rotate(-45deg);
}
.left-gear:after {
    bottom: 1vmin;
    transform: rotate(45deg);
}
.right-gear:before,.right-gear:after {
    left: 2.5vmin;
}
.right-gear:before {
    top: 1vmin;
    transform: rotate(45deg);
}
.right-gear:after {
    bottom: 1vmin;
    transform: rotate(-45deg);
}
/*画个嘴*/
.eyes-and-glass {

}
.mouth {
    border: 1vmin solid #2b3149;
    height: 6vmin;
    width: 10vmin;
    border-radius: 100%/100%;
    position: absolute;
    top: 22vmin;
    z-index: -1;
}
.mouth:before {
    content: "";
    display: block;
    height: 5vmin;
    width: 11vmin;
    background-color: #ffd978;
    position: absolute;
    top: -2vmin;
    left: -1.5vmin;
}
/*穿上衣服*/
/*shirt-wrapper定位*/
.shirt-wrapper {
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: flex-end;
}
/*衣服主体*/
.shirt {
    height: 11.80vmin;
    width: 23.6vmin;
    background-color: #839fd3;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    /*bottom: 0;*/
}
.shirt-bottom {
    height: 4.42vmin;
    width: 100%;
    background-color: #839fd3;
    position: absolute;
    bottom: 0;
    z-index: -1;
}
/*左右口袋*/
.shirt-bottom-left {
    height: 4.42vmin;
    width: 5.89vmin;
    background-color: #677fae;
    border: 0.98vmin solid #51627c;
    border-top: none;
    border-left: none;
    border-radius: 0 0 75% 0/0 0 100% 0;
}
.shirt-bottom-right {
    height: 4.42vmin;
    width: 5.89vmin;
    background-color: #677fae;
    border: 0.98vmin solid #51627c;
    border-top: none;
    border-right: none;
    border-radius: 0 0 0 75%/0 0 0 100%;
}
/*中间口袋*/
.main-shirt .pocket {
    height: 7.57vmin;
    width: 9.34vmin;
    background-color: #677fae;
    border-radius: 1vmin;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 0.3vmin solid #51627c;
}
.main-shirt .pocket .pocket-inner-circle {
    height: 5.9vmin;
    width: 5.9vmin;
    background-color: #2b314b;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main-shirt .pocket .square {
    height: 4.1vmin;
    width: 4.1vmin;
    background-color: #677fae;
    transform: rotate(45deg);
    display: flex;
    justify-content: center;
    align-items: center;
}
.main-shirt .pocket .square .small-circle {
    height: 1.96vmin;
    width: 1.96vmin;
    background-color: #2b314b;
    border-radius: 50%;
}
.main-shirt .pocket .square .small-circle:after {
    content: "";
    display: block;
    height: 0.4vmin;
    width: 2.5vmin;
    background-color: #677fae;
    border-radius: 1vmin;
    transform: translateX(0.8vmin) translateY(-0.2vmin) rotate(-45deg);
}
.main-shirt .pocket .square .small-circle:before {
    content: "";
    display: block;
    height: 0.2vmin;
    width: 2.5vmin;
    background-color: #2b314b;
    border-radius: 1vmin;
    transform: translateX(0.8vmin) translateY(-0.2vmin) rotate(-45deg);
    position: relative;
    top: -0.1vmin;

}
/*背带*/
.shirt-top-left {
    height: 2.78vmin;
    width: 15vmin;
    background-color: #677fae;
    position: absolute;
    left: -10vmin;
    bottom: 13.5vmin;
    transform: rotate(45deg);
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.shirt-top-right {
    height: 2.78vmin;
    width: 15vmin;
    background-color: #677fae;
    position: absolute;
    right: -10vmin;
    bottom: 13.5vmin;
    transform: rotate(-45deg);
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
/*纽扣*/
.button {
    height: 2.3vmin;
    width: 2.3vmin;
    background-color: #2d314a;
    margin: 0 .5vmin;
    border-radius: 50%;
}
.shirt-top-left .button:before, .shirt-top-right .button:before,
.shirt-top-left .button:after, .shirt-top-right .button:after {
    content: "";
    display: block;
    height: 1.3vmin;
    width: 0.3vmin;
    background-color: #fff;
    border-radius: 1vmin;
    position: absolute;
}
.shirt-top-left .button:before, .shirt-top-right .button:before{
    top: 20%;
}
.shirt-top-left .button:before {
    right: 11%;
    transform: rotate(45deg);
}
.shirt-top-right .button:before {
    left: 11%;
    transform: rotate(-45deg);
}
.shirt-top-left .button:after, .shirt-top-right .button:after {
    top: 21%;
}
.shirt-top-left .button:after {
    right: 11%;
    transform: rotate(-45deg);
}
.shirt-top-right .button:after {
    left: 11%;
    transform: rotate(45deg);
}
/*手和手套*/
.hands {
    border: 2.95vmin solid #ffd978;
    height: 17vmin;
    width: 42vmin;
    position: absolute;
    top: 25vmin;
    z-index: -3;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%/100%;
}
.hands:before, .hands:after {
    content: "";
    display: block;
    background-color: #2c324a;
    height: 5vmin;
    width: 5vmin;
    position: absolute;
    bottom: -1.5vmin;
    transform: rotate(45deg);
    border-radius: 1vmin;
}
.hands:after {
    right: -1.5vmin;
}
.hands:before {
    left: -1.5vmin;
}
/*裤子*/
.pants-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 35vmin;
}
.pants-top {
    margin: 0;
    height: 4.5vmin;
    width: 31.46vmin;
    background-color: #839fd3;
    border-radius: 0 0 20% 20%/0 0 100% 100%;
}
/*裤腿*/
.pants {
    width: 35vmin;
    display: flex;
    flex-wrap: nowrap;
    position: relative;
    height: 3.44vmin;
}
.pants .pants-left, .pants .pants-right {
    height: 3.44vmin;
    width: 5.41vmin;
    background-color: #677fae;
    position: absolute;
}
.pants .pants-right {
    right: 10.22vmin;
    border-radius: 0 0 0 0.5vmin;
}
.pants .pants-left {
    left: 10.22vmin;
    border-radius: 0 0 0.5vmin 0;
}
.pants .pants-left:before, .pants .pants-right:before {
    content: "";
    display: block;
    height: 0;
    width: 0;
    position: absolute;
    border: 1.8vmin solid #677fae;
}
.pants .pants-right:before {
    left: 100%;
    border-right: 1.8vmin solid transparent;
    border-bottom: 1.8vmin solid transparent;
}
.pants .pants-left:before {
    right: 100%;
    border-left: 1.8vmin solid transparent;
    border-bottom: 1.8vmin solid transparent;
}
.pants .pants-center {
    height: 2vmin;
    width: 4vmin;
    background-color: #677fae;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
.pants .pants-center:before {
    content: "";
    display: block;
    height: 2vmin;
    width: 3.8vmin;
    position: absolute;
    background-color: #276c94;
    border-radius: 50%;
    top: 1vmin;
    left: 0.2vmin;
}
/*鞋子*/
.shoes {
    display: flex;
    justify-content: center;
}
.shoes .left-shoe{
    height: 2.95vmin;
    width: 8.36vmin;
    background-color: #2c324a;
    border-radius: 10vmin 0 2vmin 0;
}
.shoes .right-shoe{
    height: 2.95vmin;
    width: 8.36vmin;
    background-color: #2c324a;
    margin-left: 3vmin;
    border-radius: 0 10vmin 0 2vmin;
}
/*阴影*/
.shadow {
    height: 2.95vmin;
    width: 30.48vmin;
    margin: 0 auto;
    background-color: #2c4a6c;
    border-radius: 50%;
    position: relative;
    top: -1.5vmin;
    z-index: -1;
}
/*
* 好啦，一个可爱的小黄人就画好啦~
*/
    `
}.call()