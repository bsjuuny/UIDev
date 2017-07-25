# vue-test

> vue.js

├--- config  
├--- dist  
    ├--- static  
        ├--- css  
        ├--- js  
├--- node_modules  
	├--- webpack : 모듈 번들러.  
	├--- vue-cli : vue.js의 기능을 미리 사용할 수 있도록 정의해 놓은 것.  
	├--- babel-polyfill : 미지원 환경에서도 해당 내용을 지원하게끔 하는 것.  
	├--- lodash : 자바스크립트 유틸리티성 라이브러리.  
	├--- scss : CSS 전처리기.  
	├--- axios : Promise 기반 HTTP Client  
	├--- browserify : 의존성 관리 및 번들  
        ├--- jquery : jquery  
        ├--- vue-echarts-v3 : 차트 관련 자바스크립트  
	├--- ...  
├--- src  
	├--- assets  
		├--- etc : 기타 파일  
		├--- scss : SCSS 파일  
	├--- components  
	├--- router  
├--- static  
├--- test  
	├--- e2d  
	├--- unit  


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
