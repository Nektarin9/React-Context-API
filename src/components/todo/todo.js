import { Button } from '../button/button';
import styles from './todo.module.css';
import { useContext } from 'react';
import { AppContextTodo } from '../../context';
export const Todo = ({
	id,
	title,
	completed,
	isEditing,
	onTitleChange,
	onCompletedChange,

}) => {
	const {onTodoEdit, onTodoSave, onTodoRemove} = useContext(AppContextTodo);

	return (
		<div className={styles.todo}>
			<input
				className={styles.checkbox}
				type="checkbox"
				checked={completed}
				onChange={({ target }) => onCompletedChange(target.checked)}
			/>
			<div className={styles.title}>
				{isEditing ? (
					<input
						type="text"
						value={title}
						onChange={({ target }) => onTitleChange(target.value)}
					/>
				) : (
					<div onClick={() => onTodoEdit(id)}>{title}</div>
				)}
			</div>
			<div>
				{isEditing ? (
					<Button onClick={() => onTodoSave(id)}>✎</Button>
				) : (
					<Button onClick={() => onTodoRemove(id)}>✖</Button>
				)}
			</div>
		</div>
	);
};
