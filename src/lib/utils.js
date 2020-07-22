/*
 * @Description:
 * @Author: linZengFa
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-19 22:26:01
 * @LastEditTime: 2019-04-19 23:37:48
 */
export function GetUrlParam(paraName) {
  var url = document.location.toString()
  var arrObj = url.split('?')

  if (arrObj.length > 1) {
    var arrPara = arrObj[1].split('&')
    var arr

    for (var i = 0; i < arrPara.length; i++) {
      arr = arrPara[i].split('=')

      if (arr != null && arr[0] === paraName) {
        return arr[1]
      }
    }
    return ''
  } else {
    return ''
  }
}

export function GetStringParam (str,paraName) {
  var arrObj = str.split('?')
  if (arrObj.length > 1) {
    var arrPara = arrObj[1].split('&')
    var arr

    for (var i = 0; i < arrPara.length; i++) {
      arr = arrPara[i].split('=')

      if (arr != null && arr[0] === paraName) {
        return arr[1]
      }
    }
    return ''
  } else {
    return ''
  }
}

// 时间转换换----
export function dateFormat(time) {
  let t = time.replace(/-/g, ':').replace(' ', ':');
  t = t.split(':');
  return new Date(t[0], (t[1] - 1), t[2], t[3], t[4], t[5]);
}

export const throttle = function (fn, time, that = this) {
  let indexTime = +new Date();
  return function() {
    const t = +new Date();
    if (t - indexTime > time) {
      indexTime = t;
      return fn.apply(that, arguments);
    }
  };
};

// 必填项是否都填了
function getDataType (target) {
  var ret = typeof (target);
  var template = {
    "[object Array]": "array",
    "[object Object]": "object",
    "[object Number]": "number - object",
    "[object Boolean]": "boolean - object",
    "[object String]": 'string-object'
  }

  if (target === null) {
    return 'null';
  } else if (ret === "object") {
    var str = Object.prototype.toString.call(target);
    return template[str];
  } else {
    return ret;
  }
}

function showToast (title) {
  window.Toast.fail(title, 1)
}

export function isAllRequire (list, req) {
  return Object.keys(req).every(item => {
    const v = list[item]
    const type = getDataType(v)
    const reqType = getDataType(req[item])
    if (type === 'null' && !v) {
      showToast(req[item])
      return false
    }
    if (type === 'string' && reqType === 'object') {
      if (req[item].min) {
        if (v.length < req[item].min || v.length > req[item].max) {
          showToast(req[item].text)
          return false
        }
      }
    }
    if (type === 'string' && v === '' && reqType !== 'object') {
      showToast(req[item])
      return false
    }

    if (type === 'array' && v.length === 0) {
      showToast(req[item])
      return false
    }
    return true
  })
}