import { DisplayedUser } from "../../types/displayedUser.types";
import styles from "./Card.module.css";
import { useState } from "react";
import EditInputField from "./EditInputField";

export default function Card({ user, updateUser }: { user: DisplayedUser, updateUser: (data: DisplayedUser) => void }) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e)
    updateUser({
      ...user, [e.target.name]: e.target.value
    })
  }

  const [editing, setEditing] = useState(false);

  return (
    <div className={styles.card} >
      <p className={styles.card__button} onClick={() => setEditing(!editing)}>{editing ? 'Done' : 'Edit'}</p>
      <img className={styles.card__picture} src={user.picture} />
      {editing ? (
        <>
          <h3 className={styles.card__name}>
            First Name:
            <EditInputField value={user.firstName} handleChange={handleChange} name={'firstName'} />
            <br />
            <br />
            Last Name:
            <EditInputField value={user.lastName} handleChange={handleChange} name={'lastName'} />
          </h3>
          <p>
            <span className={styles.card__sectionTitle}>Email:</span>{' '}
            <EditInputField value={user.email} handleChange={handleChange} name={'email'} type={'email'} />
          </p>
          <p>
            <span className={styles.card__sectionTitle}>Phone Number:</span>{' '}
            <EditInputField value={user.phone} handleChange={handleChange} name={'phone'} type={'tel'} />
          </p>
          <p>
            <span className={styles.card__sectionTitle}>Country</span>{' '}
            <EditInputField value={user.country} handleChange={handleChange} name={'country'} />
          </p>
          <p>
            <span className={styles.card__sectionTitle}>City:</span>{' '}
            <EditInputField value={user.city} handleChange={handleChange} name={'city'} />
          </p>
          <p>
            <span className={styles.card__sectionTitle}>State:</span>{' '}
            <EditInputField value={user.state} handleChange={handleChange} name={'state'} />
          </p>
          <p>
            <span className={styles.card__sectionTitle}>Time Zone Description:</span>{' '}
            <EditInputField value={user.timezoneDescription} handleChange={handleChange} name={'timezoneDescription'} />
          </p>
          <p>
            <span className={styles.card__sectionTitle}>Time Zone Offset:</span>{' '}
            <EditInputField value={user.timezoneOffset} handleChange={handleChange} name={'timezoneOffset'} />
          </p>
        </>
      ) :
        <>
          <h3 className={styles.card__name}>{user.firstName} {user.lastName}</h3>
          <p><span className={styles.card__sectionTitle}>Email:</span>{' '}{user.email}</p>
          <p><span className={styles.card__sectionTitle}>Phone Number:</span>{' '}{user.phone}</p>
          <p><span className={styles.card__sectionTitle}>Country</span>{' '}{user.country}</p>
          <p><span className={styles.card__sectionTitle}>City:</span>{' '}{user.city}</p>
          <p><span className={styles.card__sectionTitle}>State:</span>{' '}{user.state}</p>
          <p><span className={styles.card__sectionTitle}>Time Zone Description:</span>{' '}{user.timezoneDescription}</p>
          <p><span className={styles.card__sectionTitle}>Time Zone Offset:</span>{' '}{user.timezoneOffset}</p>
        </>
      }
    </div >
  )
}