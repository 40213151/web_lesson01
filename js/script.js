$(function(){
  $('#slider').vegas({ //背景画像でスライドショーしたい場所の設定
    slides: [
     { src: 'img/image01.jpg' }, //スライドする画像を配列で設定
     { src: 'img/img02.jpg' },
     { src: 'img/image03.jpg' },
	 { src: 'img/img4.jpg' }
    ],
     delay: 6000, //スライドまでの時間ををミリ秒単位で設定
     timer: true, //タイマーバーの表示/非表示を切り替え
     overlay: 'img/01.png', //オーバーレイする画像の設定
     animation: 'random', //スライドのアニメーションを設定
     transition: 'blur', //スライド間のエフェクトを設定
     transitionDuration: 1000 //エフェクト時間をミリ秒単位で設定
  });
});

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), { // #sampleに地図を埋め込む
        center: { // 地図の中心を指定
            lat: 34.7019399, // 緯度
            lng: 135.51002519999997 // 経度
        },
        zoom: 19 // 地図のズームを指定
    });
}
