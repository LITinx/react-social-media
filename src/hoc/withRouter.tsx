import { ComponentType } from 'react'
import { useParams } from 'react-router-dom'

function withRouter<WCP>(Component: ComponentType<WCP>) {
	function ComponentWithRouterProp(props: WCP) {
		const params = useParams()
		return <Component {...props} params={params} />
	}

	return ComponentWithRouterProp
}

export default withRouter
