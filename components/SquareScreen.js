// import { Text, View, StyleSheet } from 'react-native';

// export default function SquareScreen() {
//     return (
//       <View style={styles.container}>
//         <Text>Négyzet</Text>
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

export default function SquareScreen() {
  const [sideLength, setSideLength] = useState('');
  const [area, setArea] = useState('');
  const [perimeter, setPerimeter] = useState('');

  const calculate = () => {
    const s = parseFloat(sideLength);

    if (!isNaN(s) && s > 0) {
      const squareArea = Math.pow(s, 2);
      const squarePerimeter = 4 * s;

      setArea(squareArea.toFixed(2));
      setPerimeter(squarePerimeter.toFixed(2));
    } else {
      setArea('');
      setPerimeter('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Square Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter side length"
        keyboardType="numeric"
        value={sideLength}
        onChangeText={(text) => setSideLength(text)}
      />
      <Button title="Calculate" onPress={calculate} />
      {area !== '' && perimeter !== '' && (
        <View style={styles.resultContainer}>
          <Text>Area: {area} square units</Text>
          <Text>Perimeter: {perimeter} units</Text>
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

