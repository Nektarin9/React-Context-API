import {
	AppContextSearch,
	AppContextSorting,
	AppContextOnTodoAdd,
} from '../context';

export const AppContextProvider = ({
	setSearchPhrase,
	setIsAlphabetSorting,
	onTodoAdd,
	children,
}) => {
	return (
		<AppContextSearch.Provider value={setSearchPhrase}>
			<AppContextSorting.Provider value={setIsAlphabetSorting}>
				<AppContextOnTodoAdd.Provider value={onTodoAdd}>
					{children}
				</AppContextOnTodoAdd.Provider>
			</AppContextSorting.Provider>
		</AppContextSearch.Provider>
	);
};

