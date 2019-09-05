if (!this.myPlugin) {
	this.myPlugin = {}
}
//函数防抖
this.myPlugin.debounce = function (callback, time) {
	var timer;
	return function () {
		clearTimeout(timer);//清除之前的计时
		var args = arguments;//利用闭包,保存参数数组
		timer = setTimeout(function () {
			callback.apply(null,args);
		},time)
	}
	
}

//函数节流:方法一
this.myPlugin.throttle = function (callback, time) {
	var timer;
	return function () {
		if (timer) {
			return;
		}
		var args = arguments;//利用闭包,保存参数数组
		timer = setTimeout(function () {
			callback.apply(null,args);
		},time)
		timer = null;//计时器要清空
	}
}

//函数节流:方法二
this.myPlugin.throttle = function (callback, time) {
	var t;
	return function () {
		if (!t || Date.now() - t >= time) {//之前没有计时 或 距离上次执行时间以超过规定的值
			callback.apply(null,arguments);
			t = Date.now();//得到的当前时间戳
		}
	}
}