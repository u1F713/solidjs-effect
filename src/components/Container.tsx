import type {Component, JSXElement} from 'solid-js'
import * as styles from './Container.css.ts'

const Container: Component<{children: JSXElement}> = props => {
  return <div class={styles.containerStyle}>{props.children}</div>
}

export default Container
