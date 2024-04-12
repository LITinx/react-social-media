import { UserType } from '../types/usersReducerTypes'

export const updateObjectInArray = (
	items: UserType[],
	itemId: number,
	objectPropName: keyof UserType,
	newObj: object,
) => {
	return items.map((item) => {
		if (item[objectPropName] === itemId) {
			return { ...item, ...newObj }
		}
		return item
	})
}
