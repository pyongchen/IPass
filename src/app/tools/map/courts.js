(function () {
  var pointsLng = [
    113.397605, 113.397416, 113.397236, 113.397043, 113.397605, 113.397416,
    113.397236, 113.397043, 113.397591, 113.397403, 113.397223, 113.397043,
    113.397591, 113.397407, 113.397227, 113.397043, 113.397596, 113.397416
  ];
  var pointsLat = [
    23.070778, 23.070782, 23.070770, 23.070774, 23.071065, 23.071069,
    23.071073, 23.071069, 23.071435, 23.071431, 23.071431, 23.071435,
    23.071709, 23.071709, 23.071709, 23.071709, 23.071992, 23.071992
  ];
  var edge1Lngs = [
    113.397681, 113.397488, 113.397308, 113.397115, 113.397681, 113.397488,
    113.397308, 113.397115, 113.397672, 113.397483, 113.397299, 113.397112,
    113.397672, 113.397483, 113.397299, 113.397112, 113.397672, 113.397483
  ];
  var edge1Lats = [
    23.070903, 23.070903, 23.070903, 23.070903, 23.071194, 23.071194,
    23.071194, 23.071194, 23.071555, 23.071555, 23.071555, 23.071555,
    23.071838, 23.071838, 23.071838, 23.071838, 23.072125, 23.072125
  ];
  var edge2Lngs = [
    113.397533, 113.397344, 113.397165, 113.396967, 113.397533, 113.397344,
    113.397165, 113.396967, 113.397519, 113.397335, 113.397147, 113.396976,
    113.397519, 113.397335, 113.397147, 113.396976, 113.397519, 113.397335
  ];
  var edge2Lats = [
    23.070903, 23.070903, 23.070903, 23.070903, 23.071194, 23.071194,
    23.071194, 23.071194, 23.071555, 23.071555, 23.071555, 23.071555,
    23.071838, 23.071838, 23.071838, 23.071838, 23.072125, 23.072125
  ];
  var edge3Lngs = [
    113.397533, 113.397344, 113.397165, 113.396967, 113.397533, 113.397344,
    113.397165, 113.396967, 113.397519, 113.397335, 113.397147, 113.396976,
    113.397519, 113.397335, 113.397147, 113.396976, 113.397519, 113.397335
  ];
  var edge3Lats = [
    23.070649, 23.070649, 23.070649, 23.070649, 23.070936, 23.070936,
    23.070936, 23.070936, 23.071302, 23.071302, 23.071302, 23.071302,
    23.071589, 23.071589, 23.071589, 23.071589, 23.071867, 23.071867
  ];
  var edge4Lngs = [
    113.397681, 113.397488, 113.397308, 113.397115, 113.397681, 113.397488,
    113.397308, 113.397115, 113.397672, 113.397483, 113.397299, 113.397112,
    113.397672, 113.397483, 113.397299, 113.397112, 113.397672, 113.397483
  ];
  var edge4Lats = [
    23.070649, 23.070649, 23.070649, 23.070649, 23.070936, 23.070936,
    23.070936, 23.070936, 23.071302, 23.071302, 23.071302, 23.071302,
    23.071589, 23.071589, 23.071589, 23.071589, 23.071867, 23.071867
  ];
  var courts = [];
  for (var i = 0; i < pointsLng.length; i++) {
    var court = {
      middle: {},
      edge1: {},
      edge2: {},
      edge3: {},
      edge4: {}
    };
    court.middle.lng = pointsLng[i];
    court.middle.lat = pointsLat[i];
    court.edge1.lng = edge1Lngs[i];
    court.edge1.lat = edge1Lats[i];
    court.edge2.lng = edge2Lngs[i];
    court.edge2.lat = edge2Lats[i];
    court.edge3.lng = edge3Lngs[i];
    court.edge3.lat = edge3Lats[i];
    court.edge4.lng = edge4Lngs[i];
    court.edge4.lat = edge4Lats[i];
    court.name = "广州大学城中大" + (i + 1) + "号场";
    courts.push(court);
  }
  window.courts = courts;
  window.isInCourt = function (point) {
    var index = null;
    (function () {
      for (var i = 0; i < courts.length; i++) {
        if (point.lng >= courts[i].edge3.lng && point.lng <= courts[i].edge1.lng
          && point.lat <= courts[i].edge1.lat && point.lat >= courts[i].edge3.lat) {
          index = i;
        }
      }
    })(i);
    return index;
  };
  window.addLabel = function (map) {
    for (var i = 0; i < courts.length; i++) {
      var point = new BMap.Point(courts[i].middle.lng, courts[i].middle.lat);
      var opts = {
        position: point,    // 指定文本标注所在的地理位置
        offset: new BMap.Size(-5, -8)    //设置文本偏移量
      };
      var label = new BMap.Label(i + 1, opts);
      label.setStyle({
        color: "red",
        fontSize: "12px",
        backgroundColor: "0",
        border: "0"
      });
      map.addOverlay(label);
    }
  };
  window.getCourtByName = function (name) {
    for (var i = 0; i < courts.length; i++) {
      if (courts[i].name == name) return courts[i];
    }
  };
  window.drawRectangle = function (map, court_) {
    var polygon = new BMap.Polygon([
      new BMap.Point(court_.edge1.lng, court_.edge1.lat),
      new BMap.Point(court_.edge2.lng, court_.edge2.lat),
      new BMap.Point(court_.edge3.lng, court_.edge3.lat),
      new BMap.Point(court_.edge4.lng, court_.edge4.lat)
    ], {strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5});
    map.addOverlay(polygon);
  }
})();
