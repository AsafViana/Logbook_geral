import database from '@react-native-firebase/database'
import Elemento from '../../model/Class/Elemento'

let dados

function delay(timeInMillis: number): Promise<void> {
	return new Promise((resolve) => setTimeout(() => resolve(), timeInMillis));
  }

async function setDado(obj: string): Promise<void> {
	database()
		.ref('/elementos/templateTeste/' + obj)
		.once('value', (snapshot) => {
			dados = snapshot
		})
}

export { dados, setDado, delay }
