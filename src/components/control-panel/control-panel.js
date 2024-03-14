import { Button } from '../button/button';
import { Search, Sorting } from './components';
import styles from './control-panel.module.css';
import { AppContextOnTodoAdd } from '../../context';
import { useContext } from 'react';
export const ControlPanel = () => {
	const onTodoAdd = useContext(AppContextOnTodoAdd)
	return (
		<div className={styles.controlPanel}>
			<Search />
			<Sorting />
			<Button onClick={onTodoAdd}>✚</Button>
		</div>
	);
};
