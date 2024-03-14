import { useRef, useState, useContext } from 'react';
import { AppContextSearch } from '../../../../context';
import { debounce } from './utils';
import styles from './search.module.css';
export const Search = () => {
	const onSearch = useContext(AppContextSearch);

	const [value, setValue] = useState('');

	const debouncedOnSearch = useRef(debounce(onSearch, 1500)).current;

	const onChange = ({ target }) => {
		setValue(target.value);
		debouncedOnSearch(target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		onSearch(value);
	};

	return (
		<form className={styles.search} onSubmit={onSubmit}>
			<input
				className={styles.input}
				type="text"
				value={value}
				placeholder="Поиск..."
				onChange={onChange}
			/>
		</form>
	);
};
