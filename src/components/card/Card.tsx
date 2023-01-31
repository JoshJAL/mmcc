import { User } from "../../types/user.types";
import styles from "./Card.module.css";
import { useState } from "react";
import EditInputField from "./EditInputField";

export default function Card({ user }: { user: User }) {
  const [editing, setEditing] = useState(false);
  const [firstName, setFirstName] = useState(user.name.first);
  const [lastName, setLastName] = useState(user.name.last);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.cell);
  const [country, setCountry] = useState(user.location.country);
  const [city, setCity] = useState(user.location.city);
  const [state, setState] = useState(user.location.state);
  const [timezoneDescription, setTimezoneDescription] = useState(user.location.timezone.description);
  const [timezoneOffset, setTimezoneOffset] = useState(user.location.timezone.offset);

  return (
    <div className={styles.card} >
      <p className={styles.card__button} onClick={() => setEditing(!editing)}>{editing ? 'Done' : 'Edit'}</p>
      <img className={styles.card__picture} src={user.picture.large} />
      {editing ? (
        <>
          <h3 className={styles.card__name}>
            First Name:
            <EditInputField value={firstName} stateToSet={setFirstName} />
            <br />
            <br />
            Last Name:
            <EditInputField value={lastName} stateToSet={setLastName} />
          </h3>
          <p>
            <span className={styles.card__sectionTitle}>Email:</span>{' '}
            <EditInputField value={email} stateToSet={setEmail} type={'email'} />
          </p>
          <p>
            <span className={styles.card__sectionTitle}>Phone Number:</span>{' '}
            <EditInputField value={phoneNumber} stateToSet={setPhoneNumber} type={'tel'} />
          </p>
          <p>
            <span className={styles.card__sectionTitle}>Country</span>{' '}
            <EditInputField value={country} stateToSet={setCountry} />
          </p>
          <p>
            <span className={styles.card__sectionTitle}>City:</span>{' '}
            <EditInputField value={city} stateToSet={setCity} />
          </p>
          <p>
            <span className={styles.card__sectionTitle}>State:</span>{' '}
            <EditInputField value={state} stateToSet={setState} />
          </p>
          <p>
            <span className={styles.card__sectionTitle}>Time Zone Description:</span>{' '}
            <EditInputField value={timezoneDescription} stateToSet={setTimezoneDescription} />
          </p>
          <p>
            <span className={styles.card__sectionTitle}>Time Zone Offset:</span>{' '}
            <EditInputField value={timezoneOffset} stateToSet={setTimezoneOffset} />
          </p>
        </>
      ) :
        <>
          <h3 className={styles.card__name}>{firstName} {lastName}</h3>
          <p><span className={styles.card__sectionTitle}>Email:</span>{' '}{email}</p>
          <p><span className={styles.card__sectionTitle}>Phone Number:</span>{' '}{phoneNumber}</p>
          <p><span className={styles.card__sectionTitle}>Country</span>{' '}{country}</p>
          <p><span className={styles.card__sectionTitle}>City:</span>{' '}{city}</p>
          <p><span className={styles.card__sectionTitle}>State:</span>{' '}{state}</p>
          <p><span className={styles.card__sectionTitle}>Time Zone Description:</span>{' '}{timezoneDescription}</p>
          <p><span className={styles.card__sectionTitle}>Time Zone Offset:</span>{' '}{timezoneOffset}</p>
        </>
      }
    </div >
  )
}