$('#settings').on('change', () => {
    var data = $('#settings').serializeArray()

    var flag = 0

    var map = {
        'settings-eew': 'EEW',
        'settings-info': 'INFO',
        'settings-tsunami': 'TSUNAMI',
    }
    
    var bitflag = {
        EEW: 1 << 0,
        INFO: 1 << 1,
        TSUNAMI: 1 << 2,
    }

    data.forEach(setting => {
        if(map[setting.name]) {
            var flagname = map[setting.name]
            flag |= bitflag[flagname]
        }

        if(setting.name === 'settings-sindo') {
            flag |= setting.value << 3
        }
    })

    $('#output').text(flag.toString(16).toUpperCase())
})

$('#copy').on('click', () => {
    execCopy($('#copy-string').text())
})

function execCopy(string){

    // 空div 生成
    var tmp = document.createElement('div');
    // 選択用のタグ生成
    var pre = document.createElement('pre');
  
    // 親要素のCSSで user-select: none だとコピーできないので書き換える
    pre.style.webkitUserSelect = 'auto';
    pre.style.userSelect = 'auto';
  
    tmp.appendChild(pre).textContent = string;
  
    // 要素を画面外へ
    var s = tmp.style;
    s.position = 'fixed';
    s.right = '200%';
  
    // body に追加
    document.body.appendChild(tmp);
    // 要素を選択
    document.getSelection().selectAllChildren(tmp);
  
    // クリップボードにコピー
    var result = document.execCommand('copy');
  
    // 要素削除
    document.body.removeChild(tmp);
  
    return result;
  }