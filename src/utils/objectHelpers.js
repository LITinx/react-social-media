export const updateObjectInArray = (
	items,
	itemId,
	objectPropName,
	newObjPropName,
) => {
	return items.map((item) => {
		if (item[objectPropName] === itemId) {
			return { ...item, ...newObjPropName }
		}
		return item
	})
}
