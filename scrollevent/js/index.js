(() => {

	// let yOffset = 0; // window.pageYOffset 대신 쓸 변수
	// let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
	// let currentScene = 0; // 현재 활성화된(눈 앞에 보고있는) 씬(scroll-section)
	// let enterNewScene = false; // 새로운 scene이 시작된 순간 true
	// let acc = 0.2;
	// let delayedYOffset = 0;
	// let rafId;
	// let rafState;

	const sceneInfo = [
		{
			// 0
			type: 'sticky',
			heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
			scrollHeight: 0,
			objs: {
				container: document.querySelector('#scroll-section-0'),
			},
		},
		{
			// 1
			type: 'normal',
			// heightNum: 5, // type normal에서는 필요 없음
			scrollHeight: 0,
			objs: {
				container: document.querySelector('#scroll-section-1'),
			}
		},
		{
			// 2
			type: 'sticky',
			heightNum: 5,
			scrollHeight: 0,
			objs: {
				container: document.querySelector('#scroll-section-2'),
			},
		},
		{
			// 3
			type: 'sticky',
			heightNum: 5,
			scrollHeight: 0,
			objs: {
				container: document.querySelector('#scroll-section-3'),
			},
		}
	];

	function setLayout() {
		// 각 스크롤 섹션의 높이 세팅
		for (let i = 0; i < sceneInfo.length; i++) {
			// if (sceneInfo[i].type === 'sticky') {
			// 	sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
			// } else if (sceneInfo[i].type === 'normal')  {
            //     sceneInfo[i].scrollHeight = sceneInfo[i].objs.content.offsetHeight + window.innerHeight * 0.5;
			// }
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
		}

        console.log(sceneInfo);
	}
	
	window.addEventListener('load', () => {
		setLayout(); 
    });

})();
