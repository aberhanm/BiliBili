let recommend = document.querySelector('.recommend')
let re_items = recommend.querySelectorAll('.re-item')
recommend.innerHTML=''
for (let i = 0; i < 10; i++) {
	recommend.innerHTML +=
		`<div class="re-item">
							<div class="info-box">
								<img src="photos/11${i}.jpg" alt="兰尼斯特" title="ssas">
								<div class="info">高能演技！一台对讲机引发的血案</div>
							</div>
						</div>`
}

re_items.forEach((item, k) => {
	item.index = k
	item.onmouseenter
})

function putextension(len) {
	let extension = document.querySelector('.extension')
	let ex_list = document.querySelector('.ex-left-box-list')
	ex_list.innerHTML = ''
	for (let i = 0; i < len; i++) {
		ex_list.innerHTML +=
			`<div class="ex-list-item"><img src="photos/11${i}.jpg" alt="推广视频">
								<div class="item-title">[你可能数不清有多少根]【手书X高达W OP(附对比)】明日方舟手书X高达W</div>
								<div class="item-belong"><span>up</span>像下昂待环</div>
							</div>`
	}
}
putextension(6)


