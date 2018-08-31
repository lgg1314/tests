//时间戳转换成时间
export function formatDateTime(ts, format = 'YYYY-MM-DD HH:mm:ss') {
    let date = new Date(ts);
    return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match) => {
        switch (match) {
            case 'YYYY':
                return date.getFullYear();
            case 'MM':
                return padTwoZero(date.getMonth() + 1);
            case 'DD':
                return padTwoZero(date.getDate());
            case 'HH':
                return padTwoZero(date.getHours());
            case 'mm':
                return padTwoZero(date.getMinutes());
            case 'ss':
                return padTwoZero(date.getSeconds());
            default:
                return match;
        }
    });
}
export function padTwoZero(num) {
    return ('00' + num).substr(-2);
}


// 将qs的对象序列化成 queryString 字符串
function queryStringify(obj) {
    let qs = [];
    for (let p in obj) {
        if (obj.hasOwnProperty(p)) {
            qs.push(
                encodeURIComponent(p)
                + '='
                + encodeURIComponent(obj[p])
            )
        }
    }
    return qs.join('&');
}

// 返回 queryString 对象
function queryParse(url) {
    let qs = {};
    url = url || location.hash.split('?');
    let array = url[url.length - 1].split('&');
    for (let i = 0, len = array.length; i < len; i++) {
        let params = array[i].split('=');
        if (params[0]) {
            qs[decodeURIComponent(params[0])] = decodeURIComponent(params[1])
        }
    }
    return qs;
}

// 根据key返回url中的value
function query(name, url) {
    let reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
    url = url || window.location.href;
    if (reg.test(url)) {
        return unescape(RegExp.$2.replace(/\+/g, " "));
    }
    return undefined;
}

// canvas绘图
function draw(canvas, src, option, callback) {
    let obj = option || {}
    let context = canvas.getContext('2d');
    let drawImg = new Image()
    drawImg.src = src
    drawImg.setAttribute("crossOrigin", 'Anonymous')
    drawImg.onload = function () {
        context.drawImage(drawImg, obj.startX, obj.startY, obj.width, obj.height);
        if (callback) {
            callback(canvas)
        }
    }
}

// canvas示例
//         const canvas = document.querySelector('#cvs')
//         css = document.querySelector('css')
//         css.onload = function (param) {
//             canvas.width = css.width
//             canvas.height = css.height
//             draw(canvas, css.src, {
//                 startX: 0, //开始坐标x
//                 startY: 0, //开始坐标y
//                 width: canvas.width, //绘制宽度
//                 height: canvas.height, //绘制的高度
//             }, (canvas) => {
//                 draw(canvas, css.src, {
//                     startX: canvas.width / 2 - 200,
//                     startY: canvas.height / 2 - 150,
//                     width: 400,
//                     height: 300,
//                 }, (canvas) => {
//                     console.log(canvas.toDataURL("image/png")) //转成base64
//                 })
//             })
//         }