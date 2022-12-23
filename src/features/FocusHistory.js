import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/size';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style = {styles.title}> We haven't focused on anything yet!!</Text>;

  const renderItem = ({ item }) => <Text style = {styles.item}> - {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Things we've focused on: </Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSizes: fontSizes.md,
    // textAlign: 'center',
    // padding: spacing.md,
    fontWeight: 'bold',
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    // padding: spacing.md,
    paddingTop: spacing.sm,

  },
});
