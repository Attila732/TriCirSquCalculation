// import { Text, View, StyleSheet } from 'react-native';

// export default function CircleScreen() {
//     return (
//       <View style={styles.container}>
//         <Text>Kör</Text>
//       </View>
//     );
//   }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });

import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

export default function CircleScreen() {
  const [radius, setRadius] = useState('');
  const [area, setArea] = useState('');
  const [circumference, setCircumference] = useState('');

  const calculate = () => {
    const r = parseFloat(radius);

    if (!isNaN(r) && r > 0) {
      const circleArea = Math.PI * Math.pow(r, 2);
      const circleCircumference = 2 * Math.PI * r;

      setArea(circleArea.toFixed(2));
      setCircumference(circleCircumference.toFixed(2));
    } else {
      setArea('');
      setCircumference('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Circle Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter radius"
        keyboardType="numeric"
        value={radius}
        onChangeText={(text) => setRadius(text)}
      />
      <Button title="Calculate" onPress={calculate} />
      {area !== '' && circumference !== '' && (
        <View style={styles.resultContainer}>
          <Text>Area: {area} square units</Text>
          <Text>Circumference: {circumference} units</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    textAlign: 'center',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
