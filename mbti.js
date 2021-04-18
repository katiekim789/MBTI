var i = 1;
//문제
var testNum = {
  1:{
    'title':'문제 1번',
    'description':'처음 회사에 입사했다! 들어가고 싶은 팀은 어떤 팀?',
    'type':'EI',
    'A':'성과만 잘나오면 되는거 아냐? 좋은 성과 내는 팀',
    'B':'사람이 최고지! 좋은 사람이 모인 팀'
  },
  2:{
    'title':'문제 2번',
    'description':'떨리는 첫 출근, 무슨 옷을 입을까?',
    'type':'EI',
    'A':'이미 전날 다 골라뒀지롱!',
    'B':'오늘 Feel 가는대로!'
  },
  3:{
    'title':'문제 3번',
    'description':'회사에서 첫 업무를 준다면 어떤 업무가 좋아?',
    'type':'EI',
    'A':'가이드 라인이 명확한 업무',
    'B':'내 생각을 자유롭게 펼칠 수 있는 업무'
  },
  4:{
    'title':'문제 4번',
    'description':'일을 시작할 때 가장 먼저 하는 일',
    'type':'SN',
    'A':'기한엄수가 중요하지! 스케줄링부터',
    'B':'일단 자료조사하면서 감부터 잡자'
  },
  5:{
    'title':'문제 5번',
    'description':'기다리던 점심시간인데 아무도 안일어난다? 내 선택은?',
    'type':'SN',
    'A':'누가 물어보기 전까지 눈치보다며 가만히 쭈굴이처럼 있는다',
    'B':'밥 안드시냐고 옆 사람에게 넌지듯이 물어본다'
  },
  6:{
    'title':'문제 6번',
    'description':'내가 전혀 모르는 분야의 보고서를 받았다면?',
    'type':'SN',
    'A':'꼼꼼하고 정확하게 읽어본다',
    'B':'보고서 전체 의미를 파악해본다'
  },
  7:{
    'title':'문제 7번',
    'description':'보고서를 봐도 모르겠다.. 선배는 무조건 외우라고 하는데, 내 속마음은?',
    'type':'TF',
    'A':'하나도 이해안가는데 어떻게 외우지?',
    'B':'일단 외우라고 하니 외워본다'
  },
  8:{
    'title':'문제 8번',
    'description':'팀플로 진행하는 프로젝트가 잡혔다!',
    'type':'TF',
    'A':'팀플? 너무 두럽다.. 잘 진행될 수 있을까?',
    'B':'팀플! 좋아좋아'
  },
  9:{
    'title':'문제 9번',
    'description':'팀원들과 내 의견이 많이 다를 때',
    'type':'TF',
    'A':'논리적으로 내 생각이 맞다는 걸 증명하자!',
    'B':'내 의견을 상대방이 기분 나쁘지 않게 전달하는게 중요하지'
  },
  10:{
    'title':'문제 10번',
    'description':'동기가 선배에게 혼나고 있다. "엉망진창이네! 이걸 이딴식으로 하면 어떻게?" 이때 나는?',
    'type':'JP',
    'A':'동기가 더 혼나지 않게 좋은 정보들을 전달해준다.',
    'B':'"어떻게 엉망진찬이란 말을?"라며 동기를 위로해준다.'
  },
  11:{
    'title':'문제 11번',
    'description':'선배가 자꾸 사적으로 말을 건다',
    'type':'JP',
    'A':'어색하고 부담스럽다. 자리를 피하고 싶다.',
    'B':'쿵짝이 잘 맞아서 내 TMI 이야기를 마구 푼다.'
  },
  12:{
    'title':'문제 12번',
    'description':'다사다난했던 나의 첫 출근의 끝자락! 퇴근하기 전 나는?',
    'type':'JP',
    'A':'다음 날 TO DO 리스트를 정리하고 간다',
    'B':'자리만 대충 정리하고 집으로 GO GO!'
  }
}

//결과
var result = {
  'INTJ': {'mbti': 'INTJ', 'explain': '용의주도한 전략가'},
  'INTP': {'mbti': 'INTP', 'explain': '논리적인 사색가'},
  'ENTJ': {'mbti': 'ENTJ', 'explain': '대담한 통솔자'},
  'ENTP': {'mbti': 'ENTP', 'explain': '뜨거운 논쟁을 즐기는 변론가'},
  'INFJ': {'mbti': 'INFJ', 'explain': '선의의 옹호자'},
  'INFP': {'mbti': 'INFP', 'explain': '열정적인 중재자'},
  'ENFJ': {'mbti': 'ENFJ', 'explain': '정의로운 사회운동가'},
  'ENFP': {'mbti': 'ENFP', 'explain': '재기발랄한 활동가'},
  'ISTJ': {'mbti': 'ISTJ', 'explain': '청렴결백한 논리주의자'},
  'ISFJ': {'mbti': 'ISFJ', 'explain': '용감한 수호자'},
  'ESTJ': {'mbti': 'ESTJ', 'explain': '엄격한 관리자'},
  'ESFJ': {'mbti': 'ESFJ', 'explain': '사교적인 외교관'},
  'ISTP': {'mbti': 'ISTP', 'explain': '만능 재주꾼'},
  'ISFP': {'mbti': 'ISFP', 'explain': '호기심 많은 예술가'},
  'ESTP': {'mbti': 'ESTP', 'explain': '모험을 즐기는 사업가'},
  'ESFP': {'mbti': 'ESFP', 'explain': '자유로운 영혼의 연예인'},
  'INTJ': {'mbti': 'INTJ', 'explain': '용의주도한 전략가'}
};

//테스트시작
function run(){
  document.querySelector('#run').style.display="none";
  document.querySelector('#test').style.display="block";
  next();
}

function retry(){
  document.querySelector('#result').style.display="none";
  document.querySelector('#test').style.display="block";
  i = 1;
  EI.value=SN.value=TF.value=JP.value=0;
  next();
}

// 카카오 스크립트 initialize.
// init은 한번만 해야하므로 함수 밖에 추가
Kakao.init("a8d74c802fd3ef2e828ea1bcaafa1e4d")

function share(){
  Kakao.Link.createDefaultButton({
    container: '#share', // 공유하기의 id
    objectType: 'feed', //카카오 sdk에 있는 공유 타입
    content: {
      title: '나의 회사생활 직장인 유형은?', //타이틀
      description: '직장에서 살아남기 위한 당신의 모습이 궁금하다면?', //설명
      imageUrl: 'http://imagescdn.gettyimagesbank.com/500/202005/jv12022343.jpg',
      link: {
        webUrl: window.location.href,
        mobileWebUrl: window.location.href
      }
    },
    social: {
      likeCount: 286,
      commentCount: 45,
      sharedCount: 845
    },
    buttons: [
      {
        title: '테스트하러 가기', //밑에 글자
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href
        }
      }
    ]
  });
}

document.querySelector('#run-btn').addEventListener('click',run);
document.querySelector('#share').addEventListener('click',share);
document.querySelector('#retry').addEventListener('click',retry);

document.querySelector('#A').addEventListener('click',function(){
  var type = document.querySelector('#type').value;
  var preValue = document.querySelector('#'+type).value;
  document.querySelector('#'+type).value = preValue+1;
  next();
});

document.querySelector('#B').addEventListener('click',function(){
  next();
});


function next(){
  if(i==13){
    document.querySelector('#test').style.display="none";
    document.querySelector('#result').style.display="block";
    var mbti='';
    (document.querySelector('#EI').value<2)? mbti+='I': mbti +='E';
    (document.querySelector('#SN').value<2)? mbti+='N': mbti +='S';
    (document.querySelector('#TF').value<2)? mbti+='F': mbti +='T';
    (document.querySelector('#JP').value<2)? mbti+='P': mbti +='J';
    console.log(mbti);
    document.querySelector('#mymbti').innerHTML = result[mbti]['mbti'];
    document.querySelector('#explain').innerHTML = result[mbti]['explain'];
  } else {
    document.querySelector('#number').innerHTML = i+'/12';
    document.querySelector('#progress').style.width= (i/12)*100+'%';
    document.querySelector('#title').innerHTML = testNum[i]['title'];
    document.querySelector('#description').innerHTML = testNum[i]['description'];
    document.querySelector('#type').value = testNum[i]['type'];
    document.querySelector('#A').innerHTML = testNum[i]['A'];
    document.querySelector('#B').innerHTML = testNum[i]['B'];
    i++;
  }
}
