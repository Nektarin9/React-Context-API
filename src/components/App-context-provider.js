import {
	AppContextSearch,
	AppContextSorting,
	AppContextOnTodoAdd,
	AppContextTodo
} from '../context';

export const AppContextProvider = ({
	setSearchPhrase,
	setIsAlphabetSorting,
	onTodoAdd,
	Todo,
	children,
}) => {
	return (
		<AppContextSearch.Provider value={setSearchPhrase}>
			<AppContextSorting.Provider value={setIsAlphabetSorting}>
				<AppContextOnTodoAdd.Provider value={onTodoAdd}>
					<AppContextTodo.Provider value={Todo}>
					{children}
					</AppContextTodo.Provider>

				</AppContextOnTodoAdd.Provider>
			</AppContextSorting.Provider>
		</AppContextSearch.Provider>
	);
};

