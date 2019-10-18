import React from 'react';
import DefaultButton from '../components/DefaultButton';

import styled from 'styled-components/native';
export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-left: 30px;
  margin-right: 30px;
`;
export const WelcomeText = styled.Text`
  font-size: 22px;
  color: #333;
  margin-top: 50px;
`;
export const WelcomeImage = styled.View`
  flex: 1;
  justify-content: center;
`;
export const WelcomeLogo = styled.Image`
  width: 200px;
  height: 200px;
`;
export const BeginConfigArea = styled.View`
  margin-bottom: 50px;
  width: 100%;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;

const Page = props => {
  const start = () => {
    props.navigation.navigate('StarterName');
  };

  return (
    <Container>
      <WelcomeText>Bem vindo(a) ao DevFit</WelcomeText>
      <WelcomeImage>
        <WelcomeLogo source={require('../assets/boneco.png')} />
      </WelcomeImage>
      <BeginConfigArea>
        <DefaultButton
          width="100%"
          bgcolor="#0072c0"
          underlayColor="#0b7ac6"
          onPress={start}>
          <ButtonText>Iniciar Configuração</ButtonText>
        </DefaultButton>
      </BeginConfigArea>
    </Container>
  );
};
Page.navigationOption = {
  header: null,
};

export default Page;
