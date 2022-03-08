import React from 'react'
import { View, StyleSheet } from 'react-native'
import TabBarItem from './TabBarItem'

const TabBar = ({ setType, type }) => (
  <View style={styles.container}>
    <TabBarItem
      type={type}
      title='Todos'
      setType={() => setType('All')} />
    <TabBarItem
      type={type}
      border
      title='Activo'
      setType={() => setType('Active')} />
    <TabBarItem
      type={type}
      border
      title='Completado'
      setType={() => setType('Complete')} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#dddddd'
  }
})

export default TabBar
