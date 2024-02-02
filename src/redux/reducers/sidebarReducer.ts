export type FriendsType = {
	id: number
	personName: string
	bestFriend: boolean
}
type SidebarReducerInitialStateType = {
	friends: Array<FriendsType>
}

const initialState: SidebarReducerInitialStateType = {
	friends: [
		{ id: 234, personName: 'Volkman', bestFriend: true },
		{ id: 235, personName: 'Mirnuy', bestFriend: false },
		{ id: 236, personName: 'Robel', bestFriend: false },
		{ id: 237, personName: 'Eber', bestFriend: true },
		{ id: 238, personName: 'Choro', bestFriend: false },
		{ id: 239, personName: 'Robin', bestFriend: false },
		{ id: 240, personName: 'Hein', bestFriend: true },
		{ id: 241, personName: 'Ken', bestFriend: false },
	],
}

const sidebarReducer = (
	state = initialState,
	action: { type: string; payload: object },
) => {
	switch (action.type) {
		case 'first':
			return { ...state, ...action.payload }
		default:
			return state
	}
}
export default sidebarReducer
