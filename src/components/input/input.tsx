import styles from "./input.module.scss";

interface inputProps {
  label: string;
  type: string;
  name: string;
  value?: string;
}

export function Input({ label, type, name }: inputProps) {
  return (
    <label className={styles.inputStyle}>
      {label}
      <input type={type} name={name} placeholder={`indtast ${name}`}></input>
    </label>
  );
}
