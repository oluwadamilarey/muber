import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if neccessary</Text>
      <Text style={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
        obcaecati numquam perferendis eius omnis porro molestiae accusamus,
        dolor incidunt culpa ab animi placeat ut repellendus non blanditiis
        voluptatum assumenda ex.
      </Text>
      <Text style={styles.learnMore}>Learn More</Text>
    </View>
  );
};

export default CovidMessage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1065e9',
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  text: {
    color: '#bed9ff',
    fontSize: 15,
    marginBottom: 10,
  },
  learnMore: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
