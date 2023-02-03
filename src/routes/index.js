import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ElementosLista from '../view/page/ElementosLista'

const Stack = createNativeStackNavigator()

export default function Routes() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="ElementosLista" options={{ headerShown: false }} component={ElementosLista} />
		</Stack.Navigator>
	)
}
