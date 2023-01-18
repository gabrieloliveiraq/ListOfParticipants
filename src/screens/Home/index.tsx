import { useEffect, useState } from 'react'
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

  function handleRemoveAllParticipants() {
    return (
      Alert.alert('Remover', 'Deseja remover todos os participantes?', [
        {
          text: 'Sim',
          onPress: () => participants.length = 0
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ])

    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <TextInput
        style={styles.eventNameInput}
        placeholder='Ex: Aniversário da Duda'
        placeholderTextColor='#6B6B6B'
      />
      <Text style={styles.eventDate}>Data do Evento</Text>
      <TextInput
        style={styles.eventDateInput}
        placeholder='Ex: 14/01/2023'
        placeholderTextColor='#6B6B6B'
      />


      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do Participante'
          placeholderTextColor='#6B6B6B'
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} >
          <Text style={styles.buttonText} >+</Text>
        </TouchableOpacity>
      </View>

      {participants.length !== 0 ? <TouchableOpacity style={styles.deleteAllButton} onPress={handleRemoveAllParticipants}>
        <Text style={styles.deleteAllText}>apagar tudo</Text>
      </TouchableOpacity> : null}

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
