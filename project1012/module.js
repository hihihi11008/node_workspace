/*
Node.js가 전세계적으로 엺풍을 일으킨 이유는/ 
가장 큰 이유는, 바로 모듈때문이다!!! 

모듈이란  ? 우리가 지금까지  자바스크립트 라이브러리를, 파일로 저장해놓은 단위 
node.js 모듈의 특징 : 전세계 많은 개발자들이 각자 자신이 개발한 모듈을 공유하고 있따 
                            따라서 지금 이순간에도 새로운 모듈이 계속 추가되고 있다 
[모듈의 유형 ]
1) 내장 모듈 
    os 모듈
    url 모듈 
    file system 모듈 (★★★)
2) 사용자 정의 모듈
*/
//자바스크립트와는 달리 모듈을 가져올때는 require()함수를 이용해야 한다. 
/*
var os = require("os"); //이미 내장된 모듈 중 os 모듈을 가져오기 !! 
console.log(os.hostname()); //컴퓨터 이름 
console.log(os.cpus()); //cpu 이름 
*/

// //url 모듈 : url 의 정보를 분석해주는 모듈 
// var url = require("url");

// //url을 분석하여 그 결과를 result 변수에 담아보자 
// var result=url.parse("https://terms.naver.com/search.nhn?query=banana");
// // console.log(result);
// console.log("검색어는 ", result.query);

//로컬상의 파일을 읽어 오거나, 쓸 수 있는 모듈 
var fs = require("fs");
//지정한 경로의 파일을 읽어서, 다읽혀지면 두번째 인수인 익명함수를 호출한다 
//이렇게 특정 이벤트가 발생할떄 시스템에 의해 역으로 호출되는 유형의 함수를 
//callback함수라 한다 
//콜백함수의 첫번째 매개 변수(error) : 에러 정보를 담고 있는 객체 반환 
//콜백함수의 두번째 매개 변수(data) : 실제 읽어들인 파일의 내용을 담고 있다 
fs.readFile("./data/memo.txt", "utf-8", function(error, data){
    console.log("파일을 모두 읽기 완료했어요 ");
    console.log(data);
});
