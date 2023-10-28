type Friends = {
	id: number
	personName: string
	bestFriend: boolean
}
type SidebarReducerInitialStateType = {
	friends: Array<Friends>
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

const sidebarReducer = (state = initialState, { type, payload }: any) => {
	switch (type) {
		case 'first':
			return { ...state, ...payload }
		default:
			return state
	}
}
export default sidebarReducer
