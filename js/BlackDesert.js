// NPC材料價格
var npcItemPrice = {
		"salt": {
			"price": 20
		},
		"suger": {
			"price": 20
		},
		"leaven": {
			"price": 20
		},
		"oil": {
			"price": 20
		},
		"seaSalt": {
			"price": 200
		},
		"blackSuger": {
			"price": 200
		},
		"oliveOil": {
			"price": 40
		},
		"friedOil": {
			"price": 40
		},
		"wine": {
			"price": 40
		},
		"seasoning": {
			"price": 40
		},
		"water": {
			"price": 30
		},
	};

// 全部結果顯示清空
function clear() {
	$("input").val("");
	$(".view").html("");
	$(".message").html("");
}