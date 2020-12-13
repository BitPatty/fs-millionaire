import styles from './Input.module.css';

type Props = {
  className?: string;
  label?: string;
  value?: string;
  required?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
};

const Input = ({ className, label, onChange, placeholder, required, value }: Props) => {
  return (
    <div className={className}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        onChange={e => {
          if (onChange) {
            onChange(e.target.value);
          }
        }}
        className={styles.text_input}
        placeholder={placeholder}
        required={required}
        value={value}
        type="text"
      ></input>
    </div>
  );
};

export default Input;
