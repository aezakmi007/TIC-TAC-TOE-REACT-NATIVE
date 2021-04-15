import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  Text,
  Content,
  Container,
  Card,
  Body,
  Header,
  H1,
  H3,
  Button,
  Title,
} from 'native-base';

import Icons from './components/Icons';
import Snackbar from 'react-native-snackbar';
const itemArray = new Array(9).fill('empty');

function App() {
  const [isCross, setIscross] = useState('false');
  const [winningMessage, setWinningMessage] = useState('');
  const [drawMessage, setDrawMessage] = useState('');

  const changeItem = () => {};
  const checkWinner = () => {};

  const checkDraw = () => {};

  return (
    <Container>
      <Header>
        <Body style={{justifyContent: 'center'}}>
          <Title>Tic Tac Toe</Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.grid}>
          {itemArray.map((item, index) => {
            <TouchableOpacity
              style={styles.box}
              key={index}
              onPress={() => changeItem(index)}>
              <Card style={styles.card}>
                <Icons name={item}></Icons>
              </Card>
            </TouchableOpacity>;
          })}
        </View>
        <View>
          {drawMessage ? (
            <View>
              <H1 style={styles.message}>{drawMessage}</H1>
              <Button onPress={reloadGame} primary block rounded>
                <Text>Reload Game</Text>
              </Button>
            </View>
          ) : winningMessage ? (
            <View>
              <H1 style={styles.message}>{winningMessage}</H1>
              <Button onPress={reloadGame} primary block rounded>
                <Text>Reload Game</Text>
              </Button>
            </View>
          ) : (
            <H3 style={styles.message}>{isCross ? 'Cross' : 'Circle'} turn</H3>
          )}
        </View>
      </Content>
    </Container>
  );
}
const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  message: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFF',
    marginTop: 20,
    backgroundColor: '#4652B3',
    paddingVertical: 10,
    marginBottom: 10,
  },
  box: {
    width: '33%',
    marginBottom: 6,
  },
});
export default App;
