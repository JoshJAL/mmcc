import styles from './Card.module.css';

interface EditInputFiledProps {
  value: string;
  stateToSet: React.Dispatch<React.SetStateAction<string>>;
  type?: string;
}

export default function EditInputField({ value, stateToSet, type = 'text' }: EditInputFiledProps) {
  return (
    <input className={styles.card__editInput} value={value} onChange={(e) => stateToSet(e.target.value)} type={type} />
  )
}