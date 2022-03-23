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
            bitflag: 0
        }

        this.update = this.update.bind(this)
    }

    update(e) {
        var state = this.state

        if(e) {
            this.setState(e)
            Object.assign(state, e)
        }

        var flag = 0

        var map = {
            'eew': 'EEW',
            'info': 'INFO',
            'tsunami': 'TSUNAMI',
            'edit': 'EDIT',
        }

        var bitflag = {
            EEW: 1 << 0,
            INFO: 1 << 1,
            TSUNAMI: 1 << 2,
            EDIT: 1 << 3,
        }

        for (var key in state) {
            var flagname = map[key]
            if (!flagname || !state[key]) continue;

            flag |= bitflag[flagname]
        }

        flag |= state.sindo << 4

        this.setState({ bitflag: flag.toString(10).toUpperCase()})
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
                        <select name="edit" value={this.state.edit} onChange={(e) => {this.update({edit: e.target.value === 'true'})}}>
                            <option value="true">編集</option>
                            <option value="false">新規投稿</option>
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
                    </form>

                    <span><span className={styles.strong}>「{this.state.bitflag}」</span>を入力してください</span>
                    <span>(設定方法については<Link to="/docs/use/channel">こちら</Link>をご覧ください)</span>
                </div>
            </Layout>
        );
    }
}

export default Page;