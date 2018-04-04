
	var box1 = {
		_item: [
			'a', 
			'b', 
			'c', 
			'd', 
			'e', 
			'f', 
			'g', 
			'h'
		],
		_len: 0,
		_crt: 0, 
		_intv: null, 
		init: function() {
			this._len = this._item.length;
		},
		current: function(su) {
			if(su === undefined) {
				return this._crt;
			}

			console.log('LOG ', this._len + ", " + su); 

			if(this._len < su) {

				console.log('[취소] item의 갯수보다 큰 값을 설정하려 합니다. 다시 설정하십시오.', this._len +","+ su);

				return this._crt; 
			}

			this.clearControl(this._crt); 
			this.setControl(su); 

			this._crt = su;
			return su;
		}, 
		next: function() { 
			console.log('NEXT', '+1'); 

			this._crt++; 

			var su = this._crt; 
			var len = this._len;

			if(su === len) {
				su = 0; 
			}

			this.current(su); 
		},
		prev: function() {
			console.log('PREV', '-1'); 

			this._crt--; 

			var su = this._crt; 
			var len = this._len;

			if(su < 0) {
				su = len-1; 
			}

			this.current(su); 
		},
		clearControl: function(su) {
			// console.log('[실행] 이미 보여지고 있는 오브젝트의 값을 변경하려한다.');
		},
		setControl: function(su) {
			// console.log('[실행] 보여주고자 하는 오브젝트의 값을 변경하려한다.');
		}, 
		stop: function() {
			clearInterval(this._intv);
		}
	}; 

	// console.log('INIT', ; 
	box1.init();

	console.log('GET', box1.current());

	box1.next(); 
	box1.next(); 
	box1.next(); 
	box1.next(); 
	box1.next(); 
	box1.next(); 
	box1.next(); 
	box1.next(); 
	box1.next(); 
	box1.next(); 

	console.log('GET', box1.current());

	box1.prev(); 
	box1.prev(); 
	box1.prev(); 

	console.log('GET', box1.current());

	// box1.play(); 

	box1._intv = setInterval(function() {
		// box1.next.call(box1);
		box1.next(); 
	}, 1000); 

	setTimeout(function() {
		box1.stop();
	}, 5300);

