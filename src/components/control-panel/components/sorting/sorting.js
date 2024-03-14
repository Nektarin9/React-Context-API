import { useState, useContext } from 'react';
import { AppContextSorting } from '../../../../context';
import { Button } from '../../../button/button';
import styles from './sorting.module.css';

export const Sorting = () => {
	const onSorting = useContext(AppContextSorting)

	const [isEnabled, setIsEnabled] = useState(false);

	const onChange = ({ target }) => {
		setIsEnabled(target.checked);
		onSorting(target.checked);
	};

	return (
		<Button>
			<input
				className={styles.checkbox}
				id="sorting-button"
				type="checkbox"
				checked={isEnabled}
				onChange={onChange}
			/>
			<label className={styles.label} htmlFor="sorting-button">
				A&darr;
			</label>
		</Button>
	);
};
