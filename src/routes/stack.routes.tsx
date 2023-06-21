import { TransitionSpecs, createStackNavigator } from '@react-navigation/stack'
import ElementoVisualizacao from '../screen/ElementosVisualizacao'
import Home from '../screen/Home'
import TesteDetalhes from '../screen/TesteDetalhes'
import NovoLote from '../screen/NovoLote'
import Testes from '../screen/Testes'

const { Screen, Navigator } = createStackNavigator()

export function StackRoutes() {
	const TransitionScreen = {
		gestureDirection: 'horizontal',
		transitionSpec: {
			open: TransitionSpecs.TransitionIOSSpec,
			close: TransitionSpecs.TransitionIOSSpec,
		},
		cardStyleInterpolator: ({ current, next, layouts }) => {
			return {
				cardStyle: {
					transform: [
						{
							translateX: current.progress.interpolate({
								inputRange: [0, 1],
								outputRange: [layouts.screen.width, 0],
							}),
						},
					],
				},
				overlayStyle: {
					opacity: current.progress.interpolate({
						inputRange: [0, 1],
						outputRange: [0, 0.5],
					}),
				},
			}
		},
	}

	const CardOptions = {
		cardStyle: { backgroundColor: 'transparent' },
		...TransitionScreen,
		headerShown: false,
		gestureEnabled: false,
	}

	return (
		<Navigator /* initialRouteName="NovoTeste" */ screenOptions={CardOptions}>
			<Screen name="Home" component={Home} />
			<Screen name="ElementoVisualizacao" component={ElementoVisualizacao} />
			<Screen name="TesteDetalhes" component={TesteDetalhes} />
			<Screen name="NovoLote" component={NovoLote} />
			<Screen name='Testes' component={Testes}/>
		</Navigator>
	)
}
