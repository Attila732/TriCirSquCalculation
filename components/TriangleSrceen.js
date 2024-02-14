// import { Text, View, StyleSheet } from 'react-native';

// export default function TriangleScreen() {
//     return (
//       <View style={styles.container}>
//         <Text>Háromszög</Text>
//       </View>
//     );
//   }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

export default function TriangleScreen() {
  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [sideC, setSideC] = useState('');
  const [area, setArea] = useState('');
  const [perimeter, setPerimeter] = useState('');

  const calculate = () => {
    const a = parseFloat(sideA);
    const b = parseFloat(sideB);
    const c = parseFloat(sideC);

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a > 0 && b > 0 && c > 0) {
      const semiPerimeter = (a + b + c) / 2;
      const triangleArea = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
      const trianglePerimeter = a + b + c;

      setArea(triangleArea.toFixed(2));
      setPerimeter(trianglePerimeter.toFixed(2));
    } else {
      setArea('');
      setPerimeter('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Triangle Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter side A"
        keyboardType="numeric"
        value={sideA}
        onChangeText={(text) => setSideA(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter side B"
        keyboardType="numeric"
        value={sideB}
        onChangeText={(text) => setSideB(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter side C"
        keyboardType="numeric"
        value={sideC}
        onChangeText={(text) => setSideC(text)}
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
