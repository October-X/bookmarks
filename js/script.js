function my$(id) {
  return document.getElementById(id);
}
const bookmarkMoudle = document.querySelector('.bookmark')
bookmarkMoudle.addEventListener('animationend',() => {
  document.querySelector('html').style.overflow = 'auto'
})
var bookmarks = ["bvedio", "bstudy", "bentertainment", "bcode", "bitem"];
var navmarks = ["vedio", "study", "play", "code", "item"];
(function () {
  for (let i = 0; i < navmarks.length; i++) {
    my$(navmarks[i]).onclick = function () {
      for (let j = 0; j < navmarks.length; j++) {
        my$(bookmarks[j]).style.display = "none";
        my$(navmarks[j]).style.color = "black";
      }
      my$(bookmarks[i]).style.display = "block";
      my$(navmarks[i]).style.color = "red";
    };
  }

  let plane = document.getElementById("plane");
  let deg = 0,
    ex = 0,
    ey = 0,
    vx = 0,
    vy = 0,
    count = 0;
  window.addEventListener("mousemove", (e) => {
    ex = e.x - plane.offsetLeft - plane.clientWidth / 2;
    ey = e.y - plane.offsetTop - plane.clientHeight / 2;
    deg = (360 * Math.atan(ey / ex)) / (2 * Math.PI) + 45;
    if (ex < 0) {
      deg += 180;
    }
    count = 0;
  });
  function draw() {
    plane.style.transform = "rotate(" + deg + "deg)";
    if (count < 100) {
      vx += ex / 100;
      vy += ey / 100;
    }
    plane.style.left = vx + "px";
    plane.style.top = vy + "px";
    count++;
  }
  setInterval(draw, 1);
})();
// 加载数据
(function () {
  function loadData() {
    for (let i = 0; i < bookmarks.length; i++) {
      var mark = document.querySelector("#" + bookmarks[i]);
      var ul = document.createElement("ul");
      var dataname = bookmarks[i]+'Data';
      var dataItem = data[dataname];
      for (let j = 0; j < data[dataname].length; j++) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        var div = document.createElement("div");
        var img = document.createElement("img");
        var span = document.createElement("span");
        a.href = dataItem[j].href;
        a.target = '_blank'
        div.className = 'ico';
        img.src = dataItem[j].pic;
        span.innerHTML = dataItem[j].title;
        div.appendChild(img);
        a.appendChild(div);
        a.appendChild(span);
        li.appendChild(a);
        ul.appendChild(li);
      }
      mark.appendChild(ul);
    }
  }
  loadData();
})();
