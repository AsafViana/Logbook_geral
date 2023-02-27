import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ElementosLista from '../view/page/ElementosLista'
import Testados from '../view/page/ElementosTestados'
import Formulario from '../view/page/FormularioElemento'

const Stack = createNativeStackNavigator()

export default function Routes() {
	return (
		<Stack.Navigator initialRouteName='ElementosLista'>
			<Stack.Screen name="ElementosLista" options={{ headerShown: false }} component={ElementosLista} />
			<Stack.Screen name="Testados" options={{ headerShown: false }} component={Testados} />
			<Stack.Screen name="Formulario" options={{ headerShown: false }} component={Formulario} />
		</Stack.Navigator>
	)
}
