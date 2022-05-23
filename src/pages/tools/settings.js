import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './settings.module.css';
import Switch from '@site/src/components/Switch';

class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            eew: true,
            info: true,
            tsunami: true,
            edit: true,
            sindo: 4,
            color: 0,
            detect: 0,
            base64: '',
            showTips: false
        }

        this.update = this.update.bind(this)
        this.copyBase64 = this.copyBase64.bind(this)
    }

    update(e) {
        var state = this.state

        if(e) {
            this.setState(e)
            Object.assign(state, e)
        }

        const schema_map = {
            eew: 'a',
            info: 'b',
            tsunami: 'c',
            edit: 'd',
            sindo: 'e',
            color: 'f',
            detect: 'g'
        }

        const json = {}
        Object.keys(schema_map).forEach(key => {
            json[schema_map[key]] = +state[key]
        })

        this.setState({ base64: btoa(JSON.stringify(json))})
    }

    copyBase64() {
        navigator.clipboard.writeText(this.state.base64)
        this.setState({ showTips: true })
        setTimeout(() => {
            this.setState({ showTips: false })
        }, 3000)
    }

    componentDidMount() {
        this.update()
    }

    render() {
        return (
            <Layout title="チャンネル設定ツール">
                <div className={styles.container}>
                    <h1>チャンネル設定ツール</h1>
                    <form>
                        <div onChange={(e) => {this.update({ [e.target.name]: e.target.checked })}}>
                            <Switch name="eew" label="緊急地震速報の投稿" checked />
                            <Switch name="info" label="地震情報の投稿" checked />
                            <Switch name="tsunami" label="津波情報の投稿" checked />
                        </div>

                        <label htmlFor="edit">更新方法: </label>
                        <select name="edit" value={this.state.edit} onChange={(e) => {this.update({edit: e.target.value * 1})}}>
                            <option value="1">編集</option>
                            <option value="0">新規投稿</option>
                        </select>

                        <label htmlFor="sindo">通知震度の設定: </label>
                        <select name="sindo" value={this.state.sindo} onChange={(e) => { this.update({sindo: e.target.value * 1})}}>
                            <option value="1">震度1以上</option>
                            <option value="2">震度2以上</option>
                            <option value="3">震度3以上</option>
                            <option value="4">震度4以上</option>
                            <option value="5">震度5弱以上</option>
                            <option value="6">震度5強以上</option>
                            <option value="7">震度6弱以上</option>
                            <option value="8">震度6強以上</option>
                            <option value="9">震度7以上</option>
                        </select>

                        <label htmlFor="color">震度配色: </label>
                        <select name="color" value={this.state.color} onChange={(e) => { this.update({ color: e.target.value * 1 }) }}>
                            <option value="0">デフォルト</option>
                            <option value="1">気象庁</option>
                            <option value="2">NHK</option>
                            <option value="3">Yahoo</option>
                        </select>

                        {/* <label htmlFor="detect">地震検知: </label>
                        <select name="detect" value={this.state.detect} onChange={(e) => { this.update({ detect: e.target.value * 1 }) }}>
                            <option value="0">通知しない</option>
                            <option value="1">微弱な揺れ</option>
                            <option value="2">揺れ</option>
                            <option value="3">強い揺れ</option>
                        </select> */}
                    </form>
                    <br/>
                    <span>以下の文字列をコピーして設定画面に貼り付けてください</span>
                    <span className={styles.codeBlock}>{this.state.base64}</span>
                    <button onClick={this.copyBase64}>コピーする</button>
                    <span className={styles.copySuccess} style={{ display: this.state.showTips ? 'block' : 'none'}}>コピーしました</span>
                    <span>(設定方法については<Link to="/docs/use/channel">こちら</Link>をご覧ください)</span>
                </div>
            </Layout>
        );
    }
}

export default Page;