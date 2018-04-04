# _test1.js 설명. 

box1은 current_pattern으로 정의한 마크업 뭉치를 가르킨다. 

	예를들어, 
	division element에 
	id값이 bigbanner라고 가정할 때, 
	box1 = document.getElementById('bigbanner')로 셀렉트하게되고, 
	_test1.js파일에서 정의한 box1오브젝트의 프로퍼티들이
	bigbanner 오브젝트의 프로퍼티가 되는 형태이다.

## 변수 프로퍼티 설명

* _item : Function 오브젝트인 next(), prev()를 통해서 current pattern이 적용된 대상들을 담는 배열이다.
* _len : _item의 총 갯수
* _crt : 현재 보여주고자 하는 아이템의 index 값 (0부터 시작)
* _intv : 자동으로 current값을 변경하고자 할 때 interval 인스턴스를 저장할 용도로 사용.

## method 프로퍼티 설명

* init : method들이 정상동작하기 위해 설정되어야할 값들을 처음 실행할 목적.
* current : 보여주고자 하는 아이템의 index 값으로 current를 설정하고자 parameter가 없을 때 현재 current 값을 반환한다.
* next : 다음으로 이동 (current++)
* prev : 이전으로 이동 (current--)
* clearControl : current가 변경될 때 이전 current에 적용된 값을 해제할 목적
* setControl : current가 변경될 때 현재 current에 적용할 값을 설정할 목적
* play : 자동 재생 [삭제]
* stop : 자동 재생을 해제

## 특이사항

**ISSUE. 1. box1.play 메소드가 오브젝트 프로퍼티에서 삭제하였다.**

그 이유는, setInterval 첫번째 파라메터로 넘기는 Function 오브젝트에서 this 오브젝트로 정의한 next 메소드에 접근할 수 없는 현상을 발견하였다. 이는 완전히 독립적인 스코프를 갖게되어서 그런거 같은데... box1 오브젝트안에 그대로 두고 play()로 실행했을 때 this에 접근이 안되어서 차라리 이건 box1 오브젝트 밖에서 설정하는게 어떨까 싶어서 제외. 

clearInterval의 경우에는 스코프가 달라지거나 this를 참조할 수 없는 상황이 아니라서 그대로 두었다. play가 없는데 stop이 있는게 이상하다면 삭제해도 무관한 부분임. 