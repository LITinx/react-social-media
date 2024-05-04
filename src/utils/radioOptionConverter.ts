export const radioOptionConverter = (option: string) => {
	if (option === 'allUsers') return undefined
	return option === 'followed' ? true : false
}
