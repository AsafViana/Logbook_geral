import React from 'react'
import { Box, Text, Fab } from 'native-base'
import { Platform, Button } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export default function ListaTestados() {
	return (
		<Box backgroundColor={'amber.700'} safeArea flex={1}>
			<Fab  bgColor={'orange.500'} 
      renderInPortal={false} 
      shadow={2} 
      icon={<Entypo color="white" name="plus" size={40} />} 
      margin={'6'}/>
		</Box>
	)
}
