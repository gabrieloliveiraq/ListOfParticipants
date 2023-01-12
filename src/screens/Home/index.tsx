import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if (participants.includes(participantName))
      return Alert.alert('Participante já existe', 'Já existe participante na lista com este nome.')

      setParticipants(prevState => [...prevState, participantName])
      setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Deseja remover o(a) participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      }, 
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Terça, 10 de Janeiro de 2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do Participante'
          placeholderTextColor='#6B6B6B'
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Ninguém chegou ao evento ainda?
            Adicione participantes a sua lista de presença!</Text>
        )}
        showsVerticalScrollIndicator={false}
      />

    </View>
  )
}
