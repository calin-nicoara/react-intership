import {Fragment} from "react";
import styles from './UserFormError.module.css'

export default function UserFormError({errorMessage}) {
  return <Fragment>
    { errorMessage !== null && (
        <div className={styles['error-message']}>We have an error: {errorMessage}</div>
      )
    }
  </Fragment>
}