import clsx from 'clsx'
//import styles from './styles.module.css';

function Button({primary}) {
    const classes = clsx(StyleSheet.btn, {
        [StyleSheet.primary]: primary,
    })
    return (
        <button className={classes}>
            click me!
        </button>
    )
}
export default Button