import React, { useEffect, useState, ReactElement } from 'react'
import { Auth } from 'aws-amplify'
import { StackNavigationProp } from '@react-navigation/stack'
import { onScreen } from '../../../constants'

export default function Welcome() {
    return (
      <View style={styles.container}>
        <Button title="Sign In" color="tomato" onPress={} />
        <Button title="Sign In" color="tomato" onPress={} />
      </View>
    );
  };