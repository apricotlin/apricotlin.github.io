// NPC材料價格
var npcItemPrice = {
		"salt": {
			"price": 20 // 鹽
		},
		"suger": {
			"price": 20 // 糖
		},
		"leaven": {
			"price": 20 // 發酵劑
		},
		"oil": {
			"price": 20 // 沙拉油
		},
		"seaSalt": {
			"price": 200 // 海鹽
		},
		"blackSuger": {
			"price": 200 // 黑糖
		},
		"oliveOil": {
			"price": 40 // 橄欖油
		},
		"friedOil": {
			"price": 40 // 油炸用油
		},
		"wine": {
			"price": 40 // 料理用紅酒
		},
		"seasoning": {
			"price": 40 // 基本醬料
		},
		"water": {
			"price": 30 // 料理用飲用水
		},
	};

// 全部結果顯示清空
function clear() {
	$("input").val("");
	$(".view").html("");
	$(".message").html("");
}