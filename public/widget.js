/**
 * Widget Functions
 */
const container = document.getElementsByClassName('c-lap-container')
container[0].style.position = 'fixed'
container[0].style.right = '0'
container[0].style.bottom = '0'

const div = document.createElement('div')
div.id = 'c-lap'

const lapColor = container[0].dataset.lapColor
const lapTextColor = container[0].dataset.lapTextcolor
const lapBg = container[0].dataset.lapBg
const lapId = container[0].dataset.lapId

container[0].appendChild(div)

let widget =
'<div class="c-lap">\
<div class="c-lap-inner">\
  <div class="c-lap-confettis"></div>\
  <a class="c-lap-info" href="https://lap.halsakuragi.com" target="_blank" rel="noopener noreferrer">\
    <svg class="c-lap-info-bg" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\
      <path class="c-lap-info-color" d="M12 1.09616C5.9784 1.09616 1.09619 5.97837 1.09619 12C1.09619 18.0216 5.9784 22.9039 12 22.9039C18.0217 22.9039 22.9039 18.0216 22.9039 12C22.9039 5.97837 18.0217 1.09616 12 1.09616ZM14.2717 17.9964C13.7092 18.2164 13.2621 18.3858 12.9267 18.5012C12.5914 18.6166 12.2056 18.6743 11.7621 18.6743C11.0842 18.6743 10.5541 18.5084 10.1755 18.1767C9.80052 17.8486 9.61302 17.4267 9.61302 16.9147C9.61302 16.7164 9.62744 16.5144 9.65629 16.3089C9.68153 16.0998 9.7284 15.869 9.7897 15.6058L10.4928 13.125C10.5541 12.887 10.6082 12.6635 10.6515 12.4507C10.6947 12.238 10.7128 12.0433 10.7128 11.8666C10.7128 11.5529 10.6479 11.3293 10.5181 11.2067C10.3847 11.0805 10.1359 11.0192 9.76807 11.0192C9.58778 11.0192 9.40028 11.0481 9.20917 11.1022C9.01807 11.1599 8.85581 11.2139 8.71879 11.2644L8.90629 10.5C9.36422 10.3125 9.80412 10.1539 10.226 10.0204C10.6443 9.88703 11.0445 9.81852 11.4159 9.81852C12.0902 9.81852 12.613 9.98438 12.9772 10.3089C13.3414 10.6334 13.5253 11.0589 13.5253 11.5781C13.5253 11.6863 13.5145 11.8774 13.4892 12.1478C13.464 12.4183 13.4171 12.6671 13.3486 12.8978L12.6491 15.3714C12.5914 15.5697 12.5409 15.7969 12.494 16.0493C12.4508 16.3017 12.4291 16.4964 12.4291 16.6262C12.4291 16.9543 12.5012 17.1815 12.6491 17.3005C12.7933 17.4195 13.0493 17.4772 13.4135 17.4772C13.583 17.4772 13.7741 17.4483 13.9904 17.3906C14.2032 17.3293 14.3582 17.2789 14.4556 17.232L14.2717 17.9964ZM14.1455 7.95433C13.8209 8.25722 13.4279 8.40866 12.97 8.40866C12.5121 8.40866 12.1154 8.25722 11.7873 7.95433C11.4592 7.65145 11.2969 7.28366 11.2969 6.85457C11.2969 6.42549 11.4628 6.05409 11.7873 5.7476C12.1154 5.44111 12.5121 5.28967 12.97 5.28967C13.4279 5.28967 13.8209 5.44111 14.1455 5.7476C14.4736 6.05409 14.6359 6.42549 14.6359 6.85457C14.6359 7.28366 14.4736 7.65145 14.1455 7.95433Z"/>\
    </svg>\
  </a>\
  <button class="c-lap-btn" onClick="clap()">\
    <div class="c-lap-btn-inner">\
      <div class="c-lap-btn-svg">\
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">\
          <path d="M16.7981 9.7219C16.4021 9.7219 16.0682 9.41608 16.0395 9.01476L15.4536 0.816173C15.4237 0.396694 15.7395 0.0322862 16.159 0.00182119C16.5743 -0.0268862 16.9429 0.287137 16.9733 0.707202L17.5592 8.90579C17.5891 9.32527 17.2733 9.68968 16.8538 9.72015C16.8345 9.72132 16.8163 9.7219 16.7981 9.7219Z"/>\
          <path d="M20.6285 10.2714C20.5406 10.2714 20.4504 10.2562 20.3631 10.2234C19.9688 10.0769 19.7679 9.63812 19.9143 9.24383L20.8986 6.59513C21.045 6.20085 21.485 5.99872 21.8776 6.14636C22.2718 6.29283 22.4728 6.73105 22.3263 7.12593L21.3421 9.77462C21.2284 10.0816 20.9378 10.2714 20.6285 10.2714Z"/>\
          <path d="M13.2613 10.797C12.9812 10.797 12.7117 10.6423 12.5787 10.3745L10.8334 6.86288C10.646 6.48558 10.7994 6.0286 11.1762 5.84171C11.5535 5.65424 12.0098 5.80773 12.1973 6.18445L13.9426 9.69612C14.1301 10.0734 13.9766 10.5304 13.5999 10.7173C13.4909 10.7724 13.3755 10.797 13.2613 10.797Z"/>\
          <path d="M16.2527 22.5869C15.8525 22.2143 15.3294 22.028 14.7851 22.0391C14.2385 22.059 13.7329 22.2904 13.3603 22.6906L12.8875 23.1979L14.4775 16.1746C14.7253 15.0738 14.0328 13.9753 12.932 13.7251C12.6678 13.6653 12.4036 13.6636 12.151 13.7052C12.0661 12.8522 11.4562 12.1069 10.5751 11.9077C9.70799 11.7138 8.85029 12.1058 8.39917 12.8164C8.21228 12.7028 8.01074 12.6114 7.79163 12.5616C6.69255 12.3126 5.59171 13.0051 5.34213 14.1065L5.31694 14.2172C5.15407 14.1282 4.98182 14.052 4.79142 14.0087C3.6894 13.7603 2.59149 14.4527 2.34777 15.529C2.33606 15.5735 1.17839 20.0138 0.413249 23.3948C-0.390557 26.9481 0.221085 29.2406 0.248035 29.3361C0.341188 29.6735 0.647595 29.8956 0.981538 29.8956C1.04891 29.8956 1.11687 29.8862 1.18483 29.8674C1.59025 29.7561 1.8287 29.3366 1.71621 28.9306C1.71094 28.9107 1.17897 26.9158 1.899 23.7311C2.65828 20.3747 3.81009 15.9572 3.82767 15.8893C3.89153 15.6075 4.17216 15.4317 4.45396 15.4938C4.73576 15.5577 4.91328 15.8389 4.84942 16.1201C4.83536 16.181 4.84414 16.2408 4.84532 16.3017L3.90266 20.4672C3.81009 20.8773 4.06729 21.2851 4.47739 21.3783C4.53422 21.3911 4.59047 21.397 4.64612 21.397C4.99413 21.397 5.30815 21.1574 5.38841 20.8035L6.82788 14.4434C6.89174 14.161 7.1753 13.9829 7.45534 14.0467C7.59185 14.0778 7.70785 14.1598 7.78284 14.2787C7.85666 14.3959 7.88068 14.5354 7.8508 14.6707L6.41075 21.0355C6.31818 21.4456 6.57538 21.8534 6.98548 21.9465C7.39617 22.0426 7.80335 21.7819 7.8965 21.3724L9.33421 15.0158C9.3348 15.014 9.33538 15.0128 9.33538 15.0117C9.33538 15.0099 9.33538 15.0087 9.33597 15.0076L9.61133 13.7907C9.67577 13.5089 9.95581 13.3314 10.2394 13.3935C10.5206 13.4574 10.6975 13.7392 10.6337 14.0204L8.91649 21.6032C8.82392 22.0133 9.08112 22.4211 9.49122 22.5142C9.51993 22.5213 9.54864 22.5207 9.57676 22.5242C9.59141 22.5283 9.60254 22.5388 9.61777 22.5424C10.029 22.6396 10.4362 22.3783 10.5288 21.9682L11.9683 15.6087C12.0327 15.3269 12.3139 15.1482 12.5945 15.2114C12.8764 15.2753 13.0539 15.5577 12.9906 15.8389L10.7801 25.6029C10.7731 25.6334 10.7813 25.6627 10.7784 25.6926C10.7713 25.7535 10.7667 25.8109 10.7743 25.8712C10.7784 25.9023 10.7872 25.931 10.7954 25.9603C10.8123 26.0294 10.8352 26.0945 10.8715 26.1571C10.8821 26.1747 10.895 26.19 10.9067 26.2064C10.9377 26.2515 10.9606 26.3007 11.0022 26.3399C11.0233 26.3599 11.0508 26.3669 11.0731 26.3833C11.0801 26.3886 11.0883 26.3927 11.0959 26.3974C11.1768 26.453 11.2617 26.4917 11.3531 26.5128C11.3537 26.5128 11.3543 26.5134 11.3549 26.5134C11.359 26.5139 11.3625 26.5139 11.3666 26.5145C11.5681 26.5561 11.7738 26.5151 11.9478 26.3944C11.9712 26.3786 11.9946 26.364 12.0157 26.3458C12.0356 26.3288 12.0597 26.3206 12.0778 26.3013L14.474 23.7282C14.5695 23.6256 14.699 23.5665 14.839 23.5612C14.9814 23.5641 15.1114 23.6063 15.214 23.7006C15.4254 23.8975 15.4372 24.2297 15.2544 24.4271C14.7464 24.9444 10.2716 29.5235 9.59902 30.9044C9.41506 31.2829 9.57207 31.7387 9.95054 31.9226C10.0578 31.9748 10.1714 32 10.2833 32C10.5657 31.9994 10.837 31.8418 10.9688 31.5717C11.3935 30.6994 14.4892 27.381 16.3558 25.4799C17.1256 24.6532 17.0788 23.355 16.2527 22.5869Z"/>\
          <path d="M30.3913 22.1065C29.1845 18.8584 27.4462 14.6115 27.438 14.5922C27.0449 13.5359 25.8661 12.9951 24.8057 13.3865C24.6229 13.4544 24.4618 13.5529 24.3118 13.6642L24.272 13.5564C24.081 13.0432 23.7019 12.6354 23.2045 12.4081C22.7077 12.1808 22.1517 12.1603 21.6415 12.3507C21.43 12.4292 21.2419 12.5463 21.0708 12.6834C20.5307 12.0396 19.6284 11.7642 18.7941 12.0718C17.9482 12.3864 17.4426 13.2049 17.4701 14.0608C17.2106 14.0532 16.9498 14.0948 16.7003 14.1885C16.1871 14.3778 15.7787 14.7568 15.5508 15.2536C15.3229 15.7504 15.3018 16.3064 15.4922 16.8196L18.4157 24.6808C18.3712 24.7159 18.3219 24.7423 18.285 24.788C18.0179 25.1131 18.0653 25.593 18.3899 25.8601L19.2089 26.5327C19.2599 26.5749 20.2137 27.3634 21.3848 27.3634C21.7135 27.3634 22.0598 27.3013 22.4078 27.1432C22.7909 26.9692 22.9596 26.5175 22.7862 26.1343C22.6116 25.7511 22.1605 25.5824 21.7774 25.7558C21.2495 25.9949 20.6168 25.6527 20.3332 25.4676L16.92 16.2888C16.8713 16.1576 16.8766 16.0152 16.9352 15.8881C16.9932 15.761 17.0975 15.6643 17.2311 15.6151C17.3623 15.5653 17.5035 15.5717 17.63 15.6292C17.7572 15.6877 17.8538 15.792 17.903 15.9238L20.1756 22.0356C20.3221 22.4299 20.7609 22.6302 21.1546 22.4844C21.1745 22.4767 21.1874 22.4615 21.2062 22.4521C21.2296 22.4457 21.253 22.448 21.2759 22.4398C21.6702 22.2934 21.8711 21.8546 21.7246 21.4603L19.0162 14.1733C18.9154 13.9026 19.0537 13.5997 19.3238 13.5001C19.5939 13.4005 19.8979 13.5382 19.9981 13.8083L20.4328 14.9783C20.4334 14.98 20.4334 14.9812 20.434 14.9824C20.434 14.983 20.4346 14.9835 20.4352 14.9841L22.7066 21.0953C22.853 21.4896 23.2918 21.6917 23.6861 21.5441C24.0804 21.3976 24.2814 20.9588 24.1349 20.5645L21.8617 14.4504C21.8137 14.3198 21.819 14.1786 21.877 14.0514C21.9356 13.9243 22.0393 13.8282 22.1717 13.779C22.3023 13.7298 22.4441 13.7356 22.5712 13.7931C22.6984 13.8516 22.7956 13.9553 22.8442 14.0872L25.1162 20.2024C25.2305 20.5088 25.521 20.6992 25.8304 20.6992C25.9183 20.6992 26.0085 20.684 26.0958 20.6512C26.4901 20.5047 26.691 20.0665 26.5446 19.6716L25.0565 15.6672C25.0494 15.6069 25.05 15.5471 25.0283 15.488C24.9282 15.2173 25.0664 14.9144 25.3359 14.8148C25.606 14.7135 25.9101 14.8517 26.0196 15.1464C26.0372 15.1886 27.7661 19.4127 28.9636 22.6373C30.089 25.6662 29.8383 27.7495 29.8359 27.7671C29.7791 28.1837 30.0709 28.5674 30.4874 28.6248C30.5226 28.6295 30.5571 28.6318 30.5917 28.6318C30.9667 28.6318 31.293 28.3553 31.3457 27.9733C31.3586 27.8749 31.6603 25.5227 30.3913 22.1065Z"/>\
          <path d="M17.6798 26.5848C17.3523 26.3206 16.8725 26.3739 16.6089 26.7002C16.3452 27.0283 16.3968 27.5076 16.7249 27.7712C19.9717 30.3841 20.8054 31.301 21.014 31.6156C21.1605 31.8365 21.403 31.956 21.6491 31.956C21.7938 31.956 21.9403 31.9156 22.0691 31.8295C22.4201 31.5969 22.5156 31.1241 22.283 30.7732C21.9877 30.3279 21.1892 29.4087 17.6798 26.5848Z"/>\
          <path d="M22.5636 23.6995C22.2408 23.7217 21.9971 24.0018 22.0194 24.324C22.0416 24.6468 22.3187 24.8794 22.6439 24.8689C24.8303 24.7007 26.8885 27.8023 26.909 27.8339C27.0215 28.0044 27.2084 28.097 27.3988 28.097C27.5095 28.097 27.6214 28.0653 27.7204 27.9997C27.9905 27.8216 28.0649 27.459 27.8874 27.1889C27.7884 27.0383 25.4203 23.5032 22.5636 23.6995Z"/>\
        </svg>\
      </div>\
      <p class="c-lap-btn-count">&nbsp;</p>\
    </div>\
  </button>\
</div>\
<div class="c-lap-clap">拍手を贈る</div>\
<div class="c-lap-count">+1</div>\
<div class="c-lap-count-bubble-wrapper"></div>\
</div>\
<link rel="preconnect" href="https://fonts.gstatic.com">\
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet">'

widget += `
<style>
:root {
  --lap-color: #${lapColor};
  --lap-bg: #${lapBg};
  --lap-text-color: #${lapTextColor};
  --lap-color-alpha: #${lapColor}12;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}

p {
  margin-block-start: unset;
  margin-block-end: unset;
}

.c-lap {
  position: fixed;
  bottom: 32px;
  right: 32px;
  cursor: pointer;
  touch-action: manipulation;
}

@media (min-width: 640px) {
  .c-lap {
    bottom: 40px;
    right: 40px;
  }
}

@media (min-width: 728px) {
  .c-lap {
    bottom: 56px;
    right: 56px;
  }
}

.c-lap-info {
  position: absolute;
  left: 0;
  top: 50%;
  padding-right: 16px;
  transform: translate3d(-100%,-50%,0);
  display: none;
  opacity: 0;
  cursor: help;
}

.c-lap:hover .c-lap-info {
  display: inline-block;
  opacity: 1;
}

.c-lap-info-bg {
  fill: var(--lap-color);
}

.c-lap-info-color {
  fill: var(--text-bg);
}

.c-lap-btn {
  position: relative;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1.6px solid var(--lap-color);
  transition: background-color .16s ease, box-shadow .2s ease;
  background-color: var(--lap-bg);
  transition: transform .08s ease;
  z-index: 999;
}

.c-lap-inner {
  align-items: center;
  justify-content: center;
}

.c-lap-btn-count {
  font-size: 12px;
  font-weight: 600;
  color: var(--lap-color);
  font-family: 'Montserrat', sans-serif !important;
  line-height: 18px !important;
}

.c-lap-count {
  position: absolute;
  top: -12px;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  z-index: 998;
  margin-top: -32px;
  margin-left: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 600;
  background-color: #E5E7EB;
  transition: opacity .16s ease;
  transform: scale(1);
  font-family: 'Montserrat', sans-serif !important;
  pointer-events: none;
}

.c-lap-count.c-lap-count-visible {
  opacity: 1;
}

.c-lap-count-bubble {
  opacity: 1;
  position: absolute;
  top: -12px;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  z-index: 998;
  margin-top: -32px;
  margin-left: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 600;
  background-color: #E5E7EB;
  transition: opacity .2s ease;
  font-family: 'Montserrat', sans-serif !important;
  pointer-events: none;
  animation: x 2s ease-in-out, y 2s ease;
}

.c-lap-clap {
  position: absolute;
  padding-top: 8px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  width: 100%;
  color: var(--lap-text-color);
  opacity: 0;
  transition: opacity .2s ease;
  pointer-events: none;
}

.c-lap-btn-svg {
  fill: var(--lap-color);
}

.c-lap:hover .c-lap-btn {
  background-color: var(--lap-color);
  color: var(--lap-bg) !important;
  box-shadow: 0 0 0 8px var(--lap-color-alpha);
}

.c-lap:hover .c-lap-btn-svg {
  fill: var(--lap-bg);
}

.c-lap:hover .c-lap-btn-count {
  color: var(--lap-bg);
}

.c-lap:hover .c-lap-clap {
  opacity: 1;
}

.c-lap-confettis {
  position: absolute;
  width: 100%;
  height: 100%;
}

i.confetti {
  position: absolute;
  display: block;
  left: 50%;
  top: 50%;
  width: 4px;
  height: 8px;
  background: #000;
  opacity: 1;
}

@keyframes x {
  0% {
    transform: translateX(0) rotate(0deg);
  }
  40% {
    transform: translateX(20px) rotate(4deg);
  }
  100% {
    transform: translateX(-8px) rotate(-2deg);
  }
}

@keyframes y {
  0% {
    top: -12px;
  }
  40% {
    opacity: 1;
  }
  100% {
    top: -160px;
    opacity: 0;
  }
}

@keyframes bang {
  0% {
    transform: translate3d(0,0,0);
  }
}

@keyframes opacity {
  96% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
`.toString().replace(/(\n)/g, '')

div.insertAdjacentHTML('beforeend', widget)

/**
 * Lap Functions
 */
let clapCount = 0
let _clapCount = 0
let isClapping = false
const lapConfettisDom = document.getElementsByClassName('c-lap-confettis')
const lapCountDom = document.getElementsByClassName('c-lap-count')
const lapCountBubbleWrapperDom = document.getElementsByClassName('c-lap-count-bubble-wrapper')
const lapClapDom = document.getElementsByClassName('c-lap-clap')
const lapBtn = document.getElementsByClassName('c-lap-btn')
const intervals = []

const pow = Math.pow; const floor = Math.floor; const abs = Math.abs; const log = Math.log
const abbrev = 'kmb'

function round (n, precision) {
  const prec = Math.pow(10, precision)
  return Math.round(n * prec) / prec
}

function format (n) {
  let base = floor(log(abs(n)) / log(1000))
  const suffix = abbrev[Math.min(2, base - 1)]
  base = abbrev.indexOf(suffix) + 1
  return suffix ? round(n / pow(1000, base), 2) + suffix : '' + n
}

const checkIsClapping = function () {
  if (clapCount === _clapCount) {
    return endClap()
  } else {
    return _clapCount = clapCount
  }
}

const deleteBubble = function () {
  lapCountBubbleWrapperDom[0].children[0].remove()
}

function random (max) {
  return Math.random() * (max - 0) + 0
}

function createConfetti () {
  const c = document.createDocumentFragment()
  const lc = document.createElement('c-lap-contetti')
  for (let i = 0; i < 20; i++) {
    const styles = 'transform: translate3d(' + (random(80) - 40) + 'px, ' + (random(80) - 40) + 'px, 0) rotate(' + random(360) + 'deg);\
                     background: hsla(' + random(360) + ',90%,50%,1);\
                     animation: bang 240ms ease forwards, opacity 240ms ease-in-out forwards;'
    const e = document.createElement('i')
    e.className = 'confetti'
    e.style.cssText = styles.toString()
    lc.appendChild(e)
  }
  lapConfettisDom[0].appendChild(lc)
  setTimeout(function () {
    lapConfettisDom[0].children[0].remove()
  }, 240)
}

function clap () {
  if (!isClapping) intervals.push(setInterval(checkIsClapping, 800))
  isClapping = true
  clapCount++
  document.body.classList.add('c-lap-visible')
  lapCountDom[0].classList.add('c-lap-count-visible')
  lapBtn[0].style.webkitTransform = 'scale(0.96)'
  setTimeout(function () {
    lapBtn[0].style.webkitTransform = 'scale(1)'
  }, 80)
  lapCountDom[0].innerText = `+${clapCount}`
  createConfetti()
  if (clapCount >= 30) {
    endClap()
  } else if (clapCount > 0) {
    lapClapDom[0].innerText = ''
  }
}

function endClap () {
  const xhr = new XMLHttpRequest()
  xhr.open('PUT', `https://api.lap.halsakuragi.com/counts/${lapId}`)
  xhr.setRequestHeader('content-type', 'application/json')
  xhr.send(JSON.stringify({
    count: clapCount
  }))
  const lapCount = document.getElementsByClassName('c-lap-btn-count')
  lapCount[0].innerText = format(Number(lapCount[0].innerText) + clapCount)
  document.body.classList.remove('c-lap-visible')
  lapCountDom[0].classList.remove('c-lap-count-visible')
  lapCountBubbleWrapperDom[0].insertAdjacentHTML('beforeend', `<div class="c-lap-count-bubble">+${clapCount}</div>`)
  setTimeout(deleteBubble, 2000)
  lapClapDom[0].innerText = '拍手を贈る'
  lapCountDom[0].innerText = `+${1}`
  clapCount = 0
  _clapCount = 0
  isClapping = false
  clearInterval(intervals.shift())
}

window.onload = function () {
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const count = JSON.parse(xhr.responseText)
        const lapCount = document.getElementsByClassName('c-lap-btn-count')
        lapCount[0].innerText = format(count.count)
      }
    }
  }
  xhr.open('GET', `https://api.lap.halsakuragi.com/counts/${lapId}`)
  xhr.send(null)
}
