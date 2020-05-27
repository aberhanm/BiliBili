let recommend = document.querySelector('.recommend')
let re_items = recommend.querySelectorAll('.re-item')
recommend.innerHTML = ''
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
putextension(6);


(function live(len) {
	let live_list = document.querySelector('.live-list')
	let zone_list_box = live_list.querySelector('.zone-list-box')
	zone_list_box.innerHTML = ''
	for (let i = 0; i < len; i++) {
		zone_list_box.innerHTML +=
			`<div class="live-card">
		<img src="photos/22${Math.floor(i % 10)}.jpg">
		<div class="txt">
			<div class="txt-up">
				<img src="img/头像1.jpg">
			</div>
			<div class="cate">
				<p class="name">穿越火线灵狐姐</p>
				<p class="desc">CFML 14点 eStar vs SVCFML 14点 eStar vs SV</p>
				<p class="tag">CF手游</p>
			</div>
		</div>
	</div>`
	}
})(12);


(function() {
	let switch_tab = document.querySelector('.switch-tab')
	let tabs = switch_tab.querySelectorAll('.switch-tab-item')
	let currentTab = 0
	tabs.forEach((item, key) => {
		item.index = key
		item.onclick = (e) => {
			console.log(e)
			currentTab = e.target.index
			changeTab(currentTab)
			selectContent(currentTab)
		}
	})
})();

function selectContent(index) {
	let tab_content = document.querySelector('.tab-content')
	let contents = tab_content.querySelectorAll('.live-rank')
	for (let i = 0; i < contents.length; i++) {
		if (index === i) {
			contents[i].classList.add('on')
		} else {
			contents[i].classList.remove('on')
		}
	}
};

function changeTab(index) {
	let switch_tab = document.querySelector('.switch-tab')
	let tabs = switch_tab.querySelectorAll('.switch-tab-item')
	for (let i = 0; i < tabs.length; i++) {
		if (index === i) {
			tabs[i].classList.add('on')
		} else {
			tabs[i].classList.remove('on')
		}
	}
};

(function(len) {
	let card_list = document.querySelector('.card-list')
	let zone_list_box = card_list.querySelector('.zone-list-box')
	zone_list_box.innerHTML = ''
	for (let i = 0; i < len; i++) {
		zone_list_box.innerHTML +=
			`<div class="ex-list-item">
		<img src="photos/11${Math.floor(i % 10)}.jpg" class='an-img' alt="推广视频">
		<div class="item-title">[你可能数不清有多少根]【手书X高达W OP(附对比)】明日方舟手书X高达W</div>
		<div class="item-belong"><span>up</span>像下昂待环</div>
	</div>`
	}
})(12);

(function() {
	let el = document.querySelector('.movie-tabs .zone-list-box')
	el.innerHTML = ''
	for (let i = 0; i < 10; i++) {
		el.innerHTML +=
			`<div class="movie-list-item item">
								<img src="photos/33${i}.png"  class="movie-img">
								<div class="movie-txt">
									<p>某科学的超电磁炮T</p>
									<p class="m-p2">第9话</p>
								</div>
							</div>`
	}
})()
