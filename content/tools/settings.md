---
title: "チャンネル設定ツール"
date: 2021-06-01T00:00:00+00:00
draft: false
images: []
js: ['/js/jquery.js', '/js/tools/settings.js']
css: ['/css/tools/settings.css']
---

{{< rawhtml >}}
<form id="settings">
    <div class="box">
        <input id="settings-eew" name="settings-eew" type="checkbox" class="switch" checked>
        <label for="settings-eew">緊急地震速報の投稿</label>
    </div>
    <div class="box">
        <input id="settings-info" name="settings-info" type="checkbox" class="switch" checked>
        <label for="settings-info">地震情報の投稿</label>
    </div>
    <div class="box">
        <input id="settings-tsunami" name="settings-tsunami" type="checkbox" class="switch" checked>
        <label for="settings-tsunami">津波情報の投稿</label>
    </div>
    <div class="box">
        <input id="settings-edit" name="settings-edit" type="checkbox" class="switch" checked>
        <label for="settings-edit">情報更新方法 (ONで編集、OFFで新規投稿)</label>
    </div>
    <div class="box">
        <label for="settings-sindo">通知震度の設定: </label>
        <select name="settings-sindo">
            <option value="1">震度1</option>
            <option value="2">震度2</option>
            <option value="3">震度3</option>
            <option value="4" selected>震度4</option>
            <option value="5">震度5弱</option>
            <option value="6">震度5強</option>
            <option value="7">震度6弱</option>
            <option value="8">震度6強</option>
            <option value="9">震度7</option>
        </select>
        <p style="font-size: 14px; color: red; margin-top:5px">注意: 震度4以下を選択した場合、支援者以外は震度4に設定されます</p>
    </div>
</form>

<p style="margin-top: 36px">以下のコマンドを設定したいチャンネルに貼り付けて送信してください</p>
{{< /rawhtml >}}

```
{{< rawhtml >}}<span id="copy-string">/eq settings <span id="output">4F</span></span>{{< /rawhtml >}}
```

{{< rawhtml >}}<button id="copy" class="btn-square" type="button">コマンドをコピー</button>{{< /rawhtml >}}