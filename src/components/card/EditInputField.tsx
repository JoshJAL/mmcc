import styles from './Card.module.css';

interface EditInputFiledProps {
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
}

export default function EditInputField({ name, value, handleChange, type = 'text' }: EditInputFiledProps) {
  return (
    <input className={styles.card__editInput} value={value} onChange={(e) => handleChange(e)} type={type} name={name} />
  )
}