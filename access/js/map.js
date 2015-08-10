google.load("maps", "3.x", {"other_params":"sensor=false"});

//マップの初期設定
function initialize() {

//マップの中心座標
  var myLatLng = new google.maps.LatLng(35.47381, 139.59031);

//マップの設定オプション
  var myOptions = {
    zoom: 10,                                 //ズームレベル
    center: myLatLng,                         //中心座標
    mapTypeId: google.maps.MapTypeId.ROADMAP,  //マップタイプ
    mapTypeControlOptions: {
       mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'simple']
    }
  };

  map = new google.maps.Map(document.getElementById("map"), myOptions);

  var samplestyle = [
     {
    "featureType": "road.highway",
    "stylers": [
      { "visibility": "on" },
      { "color": "#dcdfdd" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "visibility": "off" }
      ]
    }
  ];
  
  var samplestyleOptions = {
    name: "シンプル"
  };
  
  var sampleMapType = new google.maps.StyledMapType(samplestyle, samplestyleOptions);
  map.mapTypes.set('simple', sampleMapType);
  map.setMapTypeId('simple');
}

//作成したマップの呼び出し
google.setOnLoadCallback(initialize);