import React from 'react';
import styles from './styles.module.css';

class Switch extends React.Component {
    render() {
        return (
            <div>
                <label className={styles.switch}>
                    <input id={this.props.id || this.props.name} name={this.props.name} type="checkbox" defaultChecked={this.props.checked} />
                    <span className={styles.slider}></span>
                </label>
                <label htmlFor={this.props.id || this.props.name}>{this.props.label}</label>
            </div>
        );
    }
}

export default Switch;