//单对象模式,也叫命名空间模式
var MyFunctions = {
	//判断奇数还是偶数
	isOdd : function (n) {
		return n % 2 !== 0;
	},

	//判断某年是不是闰年
	isLeap : function (year) {
		return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
	},

	//得到某年某月的天数
	getDays : function (year,month) {
		if (month === 2) {
			return this.isLeap(year) ? 29 : 28;
		}else if (month < 8 && this.isOdd(month) || month >= 8 && !this.isOdd(month)) {
			return 31;
		}else{
			return 30;
		}
	}
	
	sort : function (arr, compare) {
		for (var i = 1; i < arr.length; i++) {
			for (var j = 0; j < Things.length; j++) {
				if (arr[j] > arr[j + 1]) {
					//交换
					var temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
		}
	}
}