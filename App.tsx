import { Text, View, StyleSheet, Pressable, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>FACULTE DES SCIENCES APPLIQUEES - OUARZAZATE</Text>
      <Text style={styles.sousTitre}>IAIL S5 - Developpement mobile</Text>
      <Pressable
      style={styles.bouton}
      onPress={ () => Alert.alert(
        'Bienvenue',
        'Votre premiere application IAIL S5 fonctionne !'
      )}>
        <Text style={styles.texteBouton}>Bienvenue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F7FD',
    padding: 20,
  },
  titre: {
    textAlign: 'center',
    color: '#003796',
    fontSize: 26,
    fontWeight: 'bold',
  },
  sousTitre: {
    marginTop: 12,
    fontSize: 16,
    textAlign: 'center',
  },
  bouton: {
    marginTop: 24,
    backgroundColor: '#963700',
    paddingVertical: 13,
    paddingHorizontal: 28,
    borderRadius: 9,
 },
 texteBouton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
 },
});
